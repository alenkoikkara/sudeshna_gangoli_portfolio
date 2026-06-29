import { useRef, useState } from 'react'
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


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function HomePage() {
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const homeRef = useRef(null)
  const workRef = useRef(null)
  const aboutRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)

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

  const handleNavClick = (e, id) => {
    e.preventDefault()
    gsap.to(containerRef.current, {
      duration: 1.2,
      scrollTo: `#${id}`,
      ease: "power3.inOut"
    })
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
            {sec.text}
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
            { title: 'OCAD', subtitle: 'Platform for Creatives' },
            { title: 'ReturnLoop', subtitle: 'Digital Exhibition' },
            { title: 'PetClear', subtitle: 'Interactive Guide' }
          ].map((item, idx) => (
            <a href="#" key={idx} className="snap-target h-screen w-full relative flex items-center justify-center px-0 md:px-0 group cursor-pointer">
              <div className="z-2 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center">

                {/* Left Content */}
                <div className="flex flex-col items-end text-right md:w-1/2">
                  <h2 className="text-[clamp(3rem,3vw,4rem)] font-bold text-heading leading-none">{item.title}</h2>
                  <p className="text-xl font-bold text-body mt-1">{item.subtitle}</p>
                  <span className="text-brand font-bold mt-0 group-hover:underline">
                    dive in ↗
                  </span>
                </div>

                {/* Right Content - iMac G3 */}
                <div className="w-full md:w-1/2 flex items-start justify-start pointer-events-none pl-30">
                  <img src={asap1} alt="iMac G3" className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" />
                  <img src={asap1} alt="iMac G3" className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" />
                  <img src={asap1} alt="iMac G3" className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" />
                  <img src={asap1} alt="iMac G3" className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" />
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
    </div>
  )
}
