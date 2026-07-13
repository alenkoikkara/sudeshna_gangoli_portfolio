import { useRef, useState, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'
import Navigation from '../components/Navigation'
import imacg3Img from '../assets/images/imacg3.png'
import sunflowerc from '../assets/icons/sunflowerc.png'
import sunflowerb from '../assets/icons/sunflowerb.png'
import coffeec from '../assets/icons/coffeec.png'
import coffeeb from '../assets/icons/coffeeb.png'
import rollc from '../assets/icons/rollc.png'
import rollb from '../assets/icons/rollb.png'
import startupc from '../assets/icons/startupc.png'
import startupb from '../assets/icons/startupb.png'

import asap1 from '../assets/asap/Container-1.png'
import asap2 from '../assets/asap/Container-2.png'
import asap3 from '../assets/asap/Container-3.png'

import { caseStudiesData } from '../data/caseStudiesData'
import OCADCaseStudyView from '../components/OCADCaseStudyView'
import GenericCaseStudyView from '../components/GenericCaseStudyView'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function HomePage() {
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const homeRef = useRef(null)
  const workRef = useRef(null)
  const aboutRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)

  // Transition and Case Study states
  const [selectedProject, setSelectedProject] = useState(null)
  const [transitionState, setTransitionState] = useState('idle') // 'idle' | 'animating-in' | 'open' | 'animating-out'
  const [clickedIndex, setClickedIndex] = useState(null)

  const sections = [
    { ref: homeRef, id: 'home', text: 'Sudeshna Gangoli.' },
    { ref: workRef, id: 'work', text: 'Work' },
    { ref: aboutRef, id: 'about', text: 'About' },
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

    sections.forEach((sec, i) => {
      ScrollTrigger.create({
        trigger: sec.ref.current,
        scroller: containerRef.current,
        start: "top center",
        end: "bottom center",
        onToggle: self => {
          if (self.isActive) {
            setActiveIndex(i)
            // Animate texts smoothly
            gsap.to(texts, {
              y: (idx) => {
                if (idx === i) {
                  return i === 0 ? '0vh' : '-22vh'
                }
                return idx < i ? '-100vh' : '100vh'
              },
              opacity: (idx) => (idx === i ? 0.1 : 0),
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
        duration: { min: 0.5, max: 1.2 },
        delay: 0.05,
        ease: "power3.inOut"
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
        setTransitionState('open')
        return
      }

      // Capture rects
      const sourceRect = sourceEl.getBoundingClientRect()
      const targetRect = targetEl.getBoundingClientRect()

      const sourceStyle = window.getComputedStyle(sourceEl)

      // Apply layout scroll restrictions
      disableScroll()

      // Hide original title & default background texts
      gsap.set(sourceEl, { opacity: 0 })
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
        setSelectedProject(null)
        setTransitionState('idle')
        enableScroll()
        return
      }

      const sourceRect = sourceEl.getBoundingClientRect()
      const targetRect = targetEl.getBoundingClientRect()

      const sourceStyle = window.getComputedStyle(sourceEl)

      // Hide the details background placeholder
      gsap.set(targetEl, { opacity: 0 })

      // Fade out case study content blocks
      const contentBlocks = gsap.utils.toArray('.case-study-content > div > *')
      gsap.to(contentBlocks, {
        opacity: 0,
        y: -30,
        filter: 'blur(5px)',
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.in'
      })

      // Fade case study overlay back to transparent
      gsap.to('.case-study-overlay', {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        duration: 1.0,
        ease: 'power3.inOut'
      })

      const scale = sourceRect.width / targetRect.width

      // Animate the actual target element back down to the source list position
      gsap.fromTo(targetEl,
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
          scale: scale,
          color: sourceStyle.color,
          opacity: 1,
          duration: 1.2,
          ease: 'cubic-bezier(0.32, 0.72, 0, 1)',
          onComplete: () => {
            gsap.set(sourceEl, { opacity: 1 })
            setSelectedProject(null)
            setTransitionState('idle')
            setClickedIndex(null)
            enableScroll()
          }
        }
      )

      // Fade home list content back in
      gsap.to(innerRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      })

      // Fade default bg text elements back in based on scroll position
      const texts = gsap.utils.toArray('.bg-text')
      gsap.to(texts, {
        y: (idx) => {
          if (idx === activeIndex) {
            return activeIndex === 0 ? '0vh' : '-22vh'
          }
          return idx < activeIndex ? '-100vh' : '100vh'
        },
        opacity: (idx) => (idx === activeIndex ? 0.1 : 0),
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      })
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
    <div ref={containerRef} className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-white">
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
        activeId={sections[activeIndex]?.id}
        onNavClick={handleNavClick}
      />

      {/* Scrollable Sections */}
      <div ref={innerRef} className="relative z-10 flex flex-col w-full">

        {/* Home Section */}
        <section ref={homeRef} id="home" className="snap-target h-screen w-full relative flex items-center justify-center gap-12 md:gap-24">
          <div className="grid grid-cols-2 gap-10 absolute top-20 right-20">
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
          </div>
          <div className="text-center pointer-events-none z-2">
            <p className="text-[clamp(28px,3.2vw,52px)] text-left font-bold text-body leading-[1.15] tracking-[-0.02em]">
              I am a story teller, blending<br />
              visual design &amp; strategy.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <section ref={workRef} id="work" className="reveal-on-load w-full relative flex flex-col bg-transparent">
          {[
            { title: 'OCAD', subtitle: 'Platform for Creatives', image: asap1 },
            { title: 'ReturnLoop', subtitle: 'Digital Exhibition', image: asap2 },
            { title: 'PetClear', subtitle: 'Interactive Guide', image: asap3 }
          ].map((item, idx) => (
            <a 
              href="#" 
              key={idx} 
              onClick={(e) => handleProjectClick(e, item, idx)}
              className="snap-target h-screen w-full relative flex items-center justify-center px-0 md:px-0 group cursor-pointer"
            >
              <div className="z-2 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center">

                {/* Left Content */}
                <div className="flex flex-col items-end text-right md:w-1/2">
                  <h2 
                    id={`project-title-${idx}`}
                    className="text-[clamp(3rem,3vw,4rem)] font-bold text-heading leading-none"
                  >
                    <span className="inline-block">{item.title}</span>
                  </h2>
                  <p className="text-xl font-bold text-body mt-1">{item.subtitle}</p>
                  <span className="text-brand font-bold mt-0 group-hover:underline">
                    dive in ↗
                  </span>
                </div>

                {/* Right Content - Mockup */}
                <div className="w-full md:w-1/2 flex items-start justify-start pointer-events-none md:pl-20 mt-6 md:mt-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full max-w-[320px] h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                  />
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
              {selectedProject.title === 'OCAD' ? (
                <OCADCaseStudyView />
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


