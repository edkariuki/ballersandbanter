'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  if (!sectionRef.current) return

  const scrollerEl = document.getElementById('scroll-container')
  if (!scrollerEl) return

  const ctx = gsap.context(() => {
    const sharedTrigger = {
      trigger: sectionRef.current,
      scroller: scrollerEl,
    }

    gsap.from('.features-title', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { ...sharedTrigger, start: 'top 75%' },
    })

    gsap.from('.features-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: { ...sharedTrigger, start: 'top 75%' },
    })

    gsap.from('.feature-item', {
      opacity: 0,
      x: -30,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: { ...sharedTrigger, start: 'top 65%' },
    })
  }, sectionRef)

  return () => ctx.revert()
}, [])

  const features = [
    'Competitive Tournaments',
    'Cash Prizes',
    'Live Broadcasts',
    'Leaderboards',
    'Community Events',
  ]

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center h-full bg-gray-900 text-white px-8 md:px-16 lg:px-24"
    >
      <h2 className="features-title text-3xl md:text-4xl font-bold mb-3 text-left max-w-xl">
        Features
      </h2>
      <p className="features-subtitle text-gray-400 text-lg mb-8 text-left max-w-xl">
        Everything you need to compete, win, and be seen.
      </p>
      <ul className="space-y-3 max-w-xl">
        {features.map((feature) => (
          <li key={feature} className="feature-item text-lg text-gray-200 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}