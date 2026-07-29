'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXTwitter,
    faInstagram,
    faYoutube,
    faTwitch,
    faDiscord,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import PsIcons from '../assets/images/ps_icons.jpg'
import Image from 'next/image'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer
            className="relative overflow-hidden border-t border-cyan-400/10"
            style={{ background: '#00000080', backdropFilter: 'blur(16px)' }}
        >
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: `url(${PsIcons.src})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '180px',
                }}
            />
            <div className="relative z-10">
                <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:justify-between">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <h2 className="text-2xl font-bold uppercase tracking-widest text-white">
                            COMPETE
                        </h2>

                        <p className="mt-4 text-gray-400">
                            Join competitive tournaments, challenge top players,
                            earn rewards, and become part of a thriving gaming
                            community.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-4 font-semibold uppercase tracking-wide text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-cyan-400"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/features"
                                    className="transition hover:text-cyan-400"
                                >
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/tournaments"
                                    className="transition hover:text-cyan-400"
                                >
                                    Tournaments
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="transition hover:text-cyan-400"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="mb-4 font-semibold uppercase tracking-wide text-white">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">
                            {[
                                {
                                    icon: faXTwitter,
                                    href: '#',
                                },
                                {
                                    icon: faInstagram,
                                    href: '#',
                                },
                                {
                                    icon: faYoutube,
                                    href: '#',
                                },
                                {
                                    icon: faTwitch,
                                    href: '#',
                                },
                                {
                                    icon: faTiktok,
                                    href: 'https://www.tiktok.com/@ballersnbanters?_r=1&_t=ZS-98PwEKSMxPA',
                                },
                                {
                                    icon: faDiscord,
                                    href: '#',
                                },
                            ].map(({ icon, href }, index) => (
                                <Link
                                    key={index}
                                    href={href}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                                >
                                    <FontAwesomeIcon icon={icon} size="lg" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-cyan-400/10">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row">
                        <p>© {year} Compete. All rights reserved.</p>

                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-cyan-400">
                                Privacy Policy
                            </Link>

                            <Link href="/terms" className="hover:text-cyan-400">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}