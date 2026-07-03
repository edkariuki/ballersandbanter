'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import HeroBg from "../assets/images/venson-chou-nD2BjSLt0uE-unsplash.jpg";

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_/\\<>'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const text = "BALLERSANDBANTER"
  const [display, setDisplay] = useState(text)
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const runScramble = () => {
    let frame = 0
    const totalFrames = 24

    scrambleRef.current = setInterval(() => {
      frame++
      const revealCount = Math.floor((frame / totalFrames) * text.length)

      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (i < revealCount) return char
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          })
          .join('')
      )

      if (frame >= totalFrames) {
        setDisplay(text)
        if (scrambleRef.current) clearInterval(scrambleRef.current)
      }
    }, 35)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-bg', { opacity: 0, scale: 1.1, duration: 1.5 })
        .from('.hero-overlay', { opacity: 0, duration: 1 }, '-=1')
        .set('.hero-title', { opacity: 1 }, '-=0.4')
        .call(() => runScramble(), [], '-=0.3')
        .to('.hero-subtitle', {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
        }, '+=0.3') // starts after scramble finishes (24 frames * 35ms ≈ 840ms, plus buffer)
    }, containerRef)

    return () => {
      ctx.revert()
      if (scrambleRef.current) clearInterval(scrambleRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-[70vh] min-h-[400px] sm:h-[80vh] md:h-screen w-full overflow-hidden"
    >
      <Image
        src={HeroBg}
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="hero-bg object-cover object-top"
      />
      <div className="hero-overlay absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4">
        <h1 className="hero-title opacity-0 text-2xl sm:text-3xl md:text-5xl font-bold text-center max-w-3xl font-mono tracking-wider">
          <span className="text-gray-300 font-normal">Welcome to </span>
          <span className="text-amber-400">{display}</span>
        </h1>
        <p className="hero-subtitle opacity-0 translate-y-4 text-white text-lg sm:text-xl md:text-xl text-center max-w-3xl pt-2">
          Where Kenya's best gamers compete
        </p>
        {/* <p className="hero-subtitle opacity-0 translate-y-4 text-white text-lg sm:text-xl md:text-xl text-center max-w-3xl pt-2">
          Join competitive video game tournaments with cash prizes, live broadcasts, leaderboards, and unforgettable events
        </p> */}
      </div>
    </div>
  );
}