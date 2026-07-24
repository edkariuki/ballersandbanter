'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type Testimonial = {
    quote: string
    name: string
    role: string
    avatar: StaticImageData | string
}

const TESTIMONIALS: Testimonial[] = [
    {
        quote:
            "This is one of the best platforms I've interacted with as a gamer. The tournaments actually feel competitive, and getting paid out is fast.",
        name: 'Kevo Muriithi',
        role: 'Valorant, Diamond rank',
        avatar: '/avatars/kevo.jpg',
    },
    {
        quote:
            "I've tried many gaming platforms, but this one stands out for its fair play and quick payouts. Highly recommended!",
        name: 'Sarah Johnson',
        role: 'League of Legends, Platinum rank',
        avatar: '/avatars/sarah.jpg',
    },
    {
        quote:
            "The community here is amazing! I've made so many friends and had incredible experiences competing in tournaments.",
        name: 'Mike Thompson',
        role: 'CS:GO, Global rank',
        avatar: '/avatars/mike.jpg',
    },
    // add more testimonials here — next/back will cycle through this array
]

function QuoteMark() {
    return (
        <svg
            width="51"
            height="45"
            viewBox="0 0 102 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#7c3aed]"
        >
            <path
                d="M101.4 0.356934V15.6569C96.6001 16.4569 92.7001 18.4569 89.7001 21.6569C86.7001 24.8569 84.4001 28.8569 82.8001 33.6569C81.4001 38.4569 80.7001 43.6569 80.7001 49.2569H99.3001V87.657H61.2001V52.5569C61.2001 40.7569 63.1001 31.3569 66.9001 24.3569C70.7001 17.1569 75.6001 11.6569 81.6001 7.85695C87.8001 4.05695 94.4001 1.55694 101.4 0.356934ZM40.8001 0.356934V15.6569C36.0001 16.4569 32.1001 18.4569 29.1001 21.6569C26.1001 24.8569 23.8001 28.8569 22.2001 33.6569C20.8001 38.4569 20.1001 43.6569 20.1001 49.2569H38.7001V87.657H0.600098V52.5569C0.600098 40.7569 2.5001 31.3569 6.3001 24.3569C10.1001 17.1569 15.0001 11.6569 21.0001 7.85695C27.2001 4.05695 33.8001 1.55694 40.8001 0.356934Z"
                stroke="currentColor"
            />
        </svg>
    )
}

export default function TestimonialCard() {
    const [index, setIndex] = useState(0)
    const current = TESTIMONIALS[index]

    const goNext = () => setIndex((i) => (i + 1) % TESTIMONIALS.length)
    const goBack = () =>
        setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

    return (
        <div
            className="mx-auto flex w-full max-w-md flex-col items-center rounded-2xl border border-cyan-400/10 px-8 py-12 text-center"
            style={{ background: '#0a0a1e' }}
        >
            <QuoteMark />

            <p
                className="mt-6 text-lg leading-8 text-gray-300"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
                &ldquo;{current.quote}&rdquo;
            </p>

            <div className="relative mt-8 h-16 w-16 overflow-hidden rounded-full border border-cyan-400/20">
                <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                />
            </div>

            <p className="mt-4 text-base font-bold uppercase tracking-wide text-white">
                {current.name}
            </p>
            <p className="text-sm text-gray-500">{current.role}</p>

            <div className="mt-8 flex items-center gap-4">
                <button
                    onClick={goBack}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 text-white transition-colors hover:border-[#7c3aed] hover:text-[#7c3aed]"
                >
                    <ArrowLeft size={18} />
                </button>
                <button
                    onClick={goNext}
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 text-white transition-colors hover:border-[#7c3aed] hover:text-[#7c3aed]"
                >
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
    )
}