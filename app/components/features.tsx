'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import FeatureCard from './features_section'

import tournamentImg from '../assets/images/tourneyImg.jpg'
import onevsoneImg from '../assets/images/saka.jpg'
import cashprizeImg from '../assets/images/kd.jpg'
import FeatureSection from './features_section'

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      title: 'Competitive Tournaments',
      description: 'Compete in weekly tournaments and prove you are the best.',
      image: tournamentImg,
    },
    {
      title: 'Cash Prizes',
      description: 'Win real cash rewards from exciting competitions.',
      image: cashprizeImg,
    },
    {
      title: 'Live Broadcasts',
      description: 'Watch every big match live with the community.',
      image: tournamentImg,
    },
    {
      title: 'Leaderboards',
      description: 'Track your rank and climb to the top every season.',
      image: tournamentImg,
    },
    {
      title: '1v1 Challenges',
      description: 'Challenge friends and rivals anytime.',
      image: onevsoneImg,
    },
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const scrollerEl = document.getElementById('scroll-container')
    if (!scrollerEl) return

    const ctx = gsap.context(() => {
      gsap.from('.features-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollerEl,
          start: 'top 75%',
        },
      })

      gsap.from('.features-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollerEl,
          start: 'top 75%',
        },
      })

      gsap.utils.toArray<HTMLElement>('.feature-item').forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          x: index % 2 === 0 ? -120 : 120,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            scroller: scrollerEl,
            start: 'top 80%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-900 text-white px-8 md:px-16 lg:px-24 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="features-title text-center text-4xl font-bold md:text-5xl">
          Features
        </h2>

        <p className="features-subtitle mt-4 text-center text-lg text-gray-400">
          Everything you need to compete, win and dominate.
        </p>

        {/* Center Line */}
        <div className="relative">

          <div className="mt-8 space-y-16">
  {features.map((feature, index) => (
    <div key={feature.title} className="feature-item">
      <FeatureSection
        title={feature.title}
        description={feature.description}
        image={feature.image}
        isReversed={index % 2 === 1}
      />
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  )
}