'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import AvatarImg from '../assets/avatars/olise.jpg'
import QuoteIcon from '../assets/icons/quote.svg'

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
        avatar: AvatarImg,
    },
    {
        quote:
            "I've tried many gaming platforms, but this one stands out for its fair play and quick payouts. Highly recommended!",
        name: 'Sarah Johnson',
        role: 'League of Legends, Platinum rank',
        avatar: AvatarImg,
    },
    {
        quote:
            "The community here is amazing! I've made so many friends and had incredible experiences competing in tournaments.",
        name: 'Mike Thompson',
        role: 'CS:GO, Global rank',
        avatar: AvatarImg,
    },
    // add more testimonials here — next/back will cycle through this array
]

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
            <Image src={QuoteIcon} alt="" width={51} height={45} className="text-[#7c3aed]" />

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