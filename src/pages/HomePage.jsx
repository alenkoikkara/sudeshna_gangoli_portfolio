import { useRef, useState, useLayoutEffect, Suspense } from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Navigation from '../components/Navigation'



import ASAPCaseStudyView from '../components/ASAPCaseStudyView'
import PetClearCaseStudyView from '../components/PetClearCaseStudyView'
import ReturnLoopCaseStudyView from '../components/ReturnLoopCaseStudyView'
import GenericCaseStudyView from '../components/GenericCaseStudyView'
import AsapModel from '../components/AsapModel'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function HomePage() {
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const homeRef = useRef(null)
  const asapRef = useRef(null)
  const returnLoopRef = useRef(null)
  const petClearRef = useRef(null)
  const aboutRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredProject, setHoveredProject] = useState(null)

  // Transition and Case Study states
  const [selectedProject, setSelectedProject] = useState(null)
  const [transitionState, setTransitionState] = useState('idle') // 'idle' | 'animating-in' | 'open' | 'animating-out'
  const [clickedIndex, setClickedIndex] = useState(null)

  const sections = [
    { id: 'home', text: 'Sudeshna Gangoli.' },
    { id: 'work', text: 'Work' },
    { id: 'about', text: 'About' },
  ]

  useGSAP(() => {
    const texts = gsap.utils.toArray('.bg-text')

    // Loading Animation
    const revealElements = gsap.utils.toArray('.reveal-on-load')
    gsap.set(revealElements, { opacity: 0, filter: 'blur(10px)' })
    
    gsap.to(revealElements, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1.5,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.9,
      onComplete: () => ScrollTrigger.refresh()
    })

    // Set initial state
    gsap.set(texts, { opacity: 0, y: '100vh' })

    const sectionRefs = [homeRef, asapRef, returnLoopRef, petClearRef, aboutRef]
    sectionRefs.forEach((secRef, i) => {
      ScrollTrigger.create({
        trigger: secRef.current,
        scroller: containerRef.current,
        start: "top center",
        end: "bottom center",
        onToggle: self => {
          if (self.isActive) {
            setActiveIndex(i)
            const targetTextIndex = i === 0 ? 0 : i === 4 ? 2 : 1
            // Animate texts smoothly
            gsap.to(texts, {
              y: (idx) => {
                if (idx === targetTextIndex) {
                  return targetTextIndex === 0 ? '0vh' : '-22vh'
                }
                return idx < targetTextIndex ? '-100vh' : '100vh'
              },
              opacity: (idx) => (idx === targetTextIndex ? 0.1 : 0),
              duration: 1.2,
              ease: "expo.out",
              overwrite: "auto"
            })
          }
        }
      })
    })

    // Smooth Elastic Snapping behavior
    ScrollTrigger.create({
      trigger: innerRef.current,
      scroller: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: 1 / 4, // 5 sections total = 4 scrollable intervals
        duration: { min: 0.2, max: 0.6 },
        delay: 0.15,
        ease: "power2.out"
      }
    })

    // Re-trigger scroll on load to ensure initial state is caught
    ScrollTrigger.refresh()
  }, { scope: containerRef })

  // Disable / Enable main page scroll
  const disableScroll = () => {
    if (containerRef.current) {
      containerRef.current.style.overflow = 'hidden'
    }
  }

  const enableScroll = () => {
    if (containerRef.current) {
      containerRef.current.style.overflow = 'auto'
    }
  }

  // FLIP animations logic inside useLayoutEffect
  useLayoutEffect(() => {
    if (selectedProject && transitionState === 'animating-in') {
      const sourceEl = document.querySelector(`#project-title-${clickedIndex} span`)
      const targetEl = document.querySelector('.case-study-bg-text span')
      
      if (!sourceEl || !targetEl) {
        setTimeout(() => {
          setTransitionState('open')
        }, 0)
        return
      }

      // Capture rects
      const sourceRect = sourceEl.getBoundingClientRect()
      const targetRect = targetEl.getBoundingClientRect()

      const sourceStyle = window.getComputedStyle(sourceEl)

      // Apply layout scroll restrictions
      disableScroll()

      // Hide original title & default background texts
      gsap.set(sourceEl, { opacity: 0, fontWeight: 700, force3D: false })
      gsap.to('.bg-text', { opacity: 0, duration: 0.4, overwrite: 'auto' })
      
      // Fade out home page inner scroll items
      gsap.to(innerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto'
      })

      // Fade in case study background color
      gsap.to('.case-study-overlay', {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        duration: 1.4,
        ease: 'power3.inOut'
      })

      // Fade and slide up content blocks inside case study container
      const contentBlocks = gsap.utils.toArray('.case-study-content > div > *')
      gsap.fromTo(contentBlocks,
        {
          opacity: 0,
          y: 40,
          filter: 'blur(5px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3,
          overwrite: 'auto'
        }
      )

      // Calculate translation and scale
      const scale = sourceRect.width / targetRect.width

      // Animate the actual target element directly from source position to target position
      gsap.fromTo(targetEl,
        {
          x: sourceRect.left - targetRect.left,
          y: sourceRect.top - targetRect.top,
          scale: scale,
          color: sourceStyle.color,
          opacity: 1,
          transformOrigin: 'left top'
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          color: '#4a4a4a', // var(--color-surface-text)
          opacity: 0.1,
          duration: 1.4,
          ease: 'cubic-bezier(0.32, 0.72, 0, 1)', // Emil custom ease
          onComplete: () => {
            setTransitionState('open')
          }
        }
      )
    }
  }, [selectedProject, transitionState, clickedIndex])

  useLayoutEffect(() => {
    if (transitionState === 'animating-out') {
      const sourceEl = document.querySelector(`#project-title-${clickedIndex} span`)
      const targetEl = document.querySelector('.case-study-bg-text span')

      if (!sourceEl || !targetEl) {
        setTimeout(() => {
          setSelectedProject(null)
          setTransitionState('idle')
          enableScroll()
        }, 0)
        return
      }

      const sourceRect = sourceEl.getBoundingClientRect()
      const targetRect = targetEl.getBoundingClientRect()

      const sourceStyle = window.getComputedStyle(sourceEl)

      // Hide the details background placeholder
      gsap.set(targetEl, { opacity: 0 })

      const scale = sourceRect.width / targetRect.width
      const contentBlocks = gsap.utils.toArray('.case-study-content > div > *')
      const texts = gsap.utils.toArray('.bg-text')

      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete: () => {
          setSelectedProject(null)
          setTransitionState('idle')
          setClickedIndex(null)
          enableScroll()
        }
      })

      tl.to(contentBlocks, {
        opacity: 0,
        y: -30,
        filter: 'blur(5px)',
        duration: 1.2,
        stagger: 0.05
      }, 0)

      tl.to('.case-study-overlay', {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        duration: 1.4
      }, 0)

      tl.fromTo(targetEl,
        {
          x: 0,
          y: 0,
          scale: 1,
          color: '#4a4a4a',
          opacity: 0.1,
          transformOrigin: 'left top'
        },
        {
          x: sourceRect.left - targetRect.left,
          y: sourceRect.top - targetRect.top,
          scale: Math.max(scale * 0.96, 0.08),
          color: sourceStyle.color,
          opacity: 0,
          duration: 1.4,
          ease: 'power3.inOut'
        },
        0
      )

      tl.to(innerRef.current, {
        opacity: 1,
        duration: 0.6,
        overwrite: 'auto'
      }, 0)

      tl.to(texts, {
        y: (idx) => {
          if (idx === activeIndex) {
            return activeIndex === 0 ? '0vh' : '-22vh'
          }
          return idx < activeIndex ? '-100vh' : '100vh'
        },
        opacity: (idx) => (idx === activeIndex ? 0.1 : 0),
        duration: 1.0,
        ease: 'power2.out',
        overwrite: 'auto'
      }, 0)

      tl.fromTo(sourceEl,
        {
          opacity: 0,
          filter: 'blur(8px)',
          y: 16,
          scale: 0.9
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          fontWeight: 700,
          duration: 0.45,
          ease: 'power2.out',
          overwrite: 'auto'
        },
        0.95
      )
    }
  }, [transitionState, clickedIndex, selectedProject, activeIndex])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    if (selectedProject) return
    gsap.to(containerRef.current, {
      duration: 1.2,
      scrollTo: `#${id}`,
      ease: "power3.inOut"
    })
  }

  const handleProjectClick = (e, item, idx) => {
    e.preventDefault()
    if (transitionState !== 'idle') return
    setClickedIndex(idx)
    setSelectedProject(item)
    setTransitionState('animating-in')
  }

  const handleCloseProject = () => {
    if (transitionState !== 'open') return
    setTransitionState('animating-out')
  }

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-white overscroll-y-none">
      {/* Fixed Background Text */}
      <div className="reveal-on-load fixed inset-0 z-0 flex items-center justify-start overflow-hidden pointer-events-none">
        {sections.map((sec) => (
          <h1
            key={sec.id}
            className="bg-text absolute left-0 w-full px-10 md:px-20 text-[clamp(10rem,18vw,20rem)] font-black tracking-[-0.02em] leading-[0.85] text-surface-text select-none text-left wrap-break-word"
          >
            <span>{sec.text}</span>
          </h1>
        ))}
      </div>

      {/* Navigation */}
      <Navigation
        activeId={activeIndex === 0 ? 'home' : activeIndex === 4 ? 'about' : 'work'}
        onNavClick={handleNavClick}
      />

      {/* Scrollable Sections */}
      <div ref={innerRef} className="relative z-10 flex flex-col w-full">

        {/* Home Section */}
        <section ref={homeRef} id="home" className="snap-target h-screen w-full relative flex items-center justify-center gap-12 md:gap-24">
          {/* <div className="grid grid-cols-2 gap-10 absolute top-20 right-20">
            <div className="group relative cursor-pointer flex items-center justify-center">
              <img width={100} src={coffeeb} alt="Coffee" className="transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
              <img width={100} src={coffeec} alt="Coffee Hover" className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
            </div>
            <div className="group relative cursor-pointer flex items-center justify-center">
              <img width={100} src={sunflowerb} alt="Sunflower" className="transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
              <img width={100} src={sunflowerc} alt="Sunflower Hover" className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
            </div>
            <div className="group relative cursor-pointer flex items-center justify-center">
              <img width={100} src={startupb} alt="Startup" className="transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
              <img width={100} src={startupc} alt="Startup Hover" className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
            </div>
            <div className="group relative cursor-pointer flex items-center justify-center">
              <img width={100} src={rollb} alt="Roll" className="transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
              <img width={100} src={rollc} alt="Roll Hover" className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
            </div>
          </div> */}
          <div className="text-center pointer-events-none z-2">
            <p className="text-[clamp(28px,3.2vw,52px)] text-left font-bold text-body leading-[1.15] tracking-[-0.02em]">
              I am a story teller, blending<br />
              visual design &amp; strategy.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="reveal-on-load w-full relative flex flex-col bg-transparent">
          {[
            { title: 'ASAP', subtitle: 'Platform for Creatives' },
            { title: 'ReturnLoop', subtitle: 'Digital Exhibition' },
            { title: 'PetClear', subtitle: 'Interactive Guide' }
          ].map((item, idx) => (
            <a 
              ref={[asapRef, returnLoopRef, petClearRef][idx]}
              href="#" 
              key={idx} 
              onClick={(e) => handleProjectClick(e, item, idx)}
              className="snap-target h-screen w-full relative flex items-center justify-center px-0 md:px-0 cursor-pointer"
            >
              <div className="z-2 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center">

                {/* Left Content */}
                <div
                  className="group flex flex-col items-end text-right md:w-1/2"
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <h2 
                    id={`project-title-${idx}`}
                    className="text-[clamp(3rem,3vw,4rem)] font-bold text-heading leading-none"
                  >
                    <span className="inline-block" style={{ fontWeight: 700 }}>{item.title}</span>
                  </h2>
                  <p className="text-xl font-bold text-body mt-1">{item.subtitle}</p>
                  <span className="mt-0 font-bold text-body transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand">
                    dive in ↗
                  </span>
                </div>

                {/* Right Content - Mockup */}
                <div className="w-full md:w-1/2 h-112.5 md:h-150 flex items-center justify-center md:pl-20 mt-6 md:mt-0">
                  <div className="w-full h-full max-w-120 relative pointer-events-none flex items-center justify-center">
                    <Canvas
                      camera={{ position: [0, 0, 6.5], fov: 50 }}
                      gl={{ antialias: true }}
                      style={{ background: 'transparent' }}
                    >
                      <ambientLight intensity={1.5} />
                      <directionalLight position={[5, 10, 5]} intensity={2.0} castShadow />
                      <directionalLight position={[-5, 5, -5]} intensity={0.5} />
                      <Environment preset="city" />
                      <Suspense fallback={null}>
                        <AsapModel
                          hover={hoveredProject === idx}
                          isVisible={Math.abs(activeIndex - (idx + 1)) <= 1}
                        />
                      </Suspense>
                    </Canvas>
                  </div>
                </div>

              </div>
            </a>
          ))}
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="reveal-on-load snap-target h-screen w-full relative flex items-center justify-center bg-transparent">
          <div className="text-center z-2">
            <h2 className="text-4xl font-bold text-body mb-4">About Me</h2>
            <p className="text-muted">Details and experience go here.</p>
          </div>
        </section>

      </div>

      {/* Case Study Detail Container */}
      {selectedProject && (
        <div 
          className="case-study-overlay fixed inset-0 z-40 overflow-y-auto"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0)',
            pointerEvents: transitionState === 'open' ? 'auto' : 'none'
          }}
        >
          {/* Dynamic Case Study Background Text inside the white canvas context */}
          <div className="fixed inset-0 z-0 flex items-center justify-start overflow-hidden pointer-events-none">
            <h1
              className="case-study-bg-text absolute left-0 w-full px-10 md:px-20 text-[clamp(10rem,18vw,20rem)] font-black tracking-[-0.02em] leading-[0.85] text-surface-text select-none text-left wrap-break-word pointer-events-none"
              style={{
                transform: 'translateY(-22vh)',
              }}
            >
              <span className="inline-block opacity-0">{selectedProject.title}</span>
            </h1>
          </div>

          {/* Close Button */}
          <button
            onClick={handleCloseProject}
            className="fixed top-8 right-8 z-50 px-5 py-2.5 bg-black/5 hover:bg-black/10 active:scale-95 border border-black/10 rounded-full font-bold text-xs tracking-wider uppercase text-heading transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span className="inline-block transition-transform duration-300 group-hover:rotate-90">✕</span>
            <span>Close Project</span>
          </button>

          {/* Case Study Content */}
          <div className="case-study-content relative z-10 w-full min-h-screen pt-[45vh] pb-32">
            <div className="max-w-5xl mx-auto px-10 md:px-20">
              {selectedProject.title === 'ASAP' ? (
                <ASAPCaseStudyView />
              ) : selectedProject.title === 'PetClear' ? (
                <PetClearCaseStudyView />
              ) : selectedProject.title === 'ReturnLoop' ? (
                <ReturnLoopCaseStudyView />
              ) : (
                <GenericCaseStudyView selectedProject={selectedProject} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


