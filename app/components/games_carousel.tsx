'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const GAMES = [
  { name: 'Valorant', logo: '/logos/valorant.svg' },
  { name: 'FIFA', logo: '/logos/fifa.svg' },
  { name: 'CS2', logo: '/logos/cs2.svg' },
  { name: 'League of Legends', logo: '../assests/images/cod_logo.png' },
  { name: 'Call of Duty', logo: '/logos/cod.svg' },
  { name: 'Fortnite', logo: '/logos/fortnite.svg' },
]

export default function GameLogoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const container = containerRef.current
      if (!track || !container) return

      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 25,
        ease: 'none',
        repeat: -1,
      })

      const pause = () => tween.pause()
      const resume = () => tween.play()

      container.addEventListener('mouseenter', pause)
      container.addEventListener('mouseleave', resume)

      // cleanup for the listeners; gsap.context().revert() below
      // handles killing the tween itself
      return () => {
        container.removeEventListener('mouseenter', pause)
        container.removeEventListener('mouseleave', resume)
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-8"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-16"
        role="list"
        aria-label="Supported games"
      >
        {[...GAMES, ...GAMES].map((game, i) => (
          <div
            key={`${game.name}-${i}`}
            role="listitem"
            className="flex shrink-0 items-center justify-center grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
          >
            <Image
              src={game.logo}
              alt="" // decorative: name is conveyed via aria-label on the list, not per-logo text
              width={120}
              height={60}
              className="h-12 w-auto object-contain lg:h-16"
              onError={(e) => {
                // hide broken image instead of showing alt text/broken icon
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}