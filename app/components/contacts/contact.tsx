"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Phone, Inbox } from "lucide-react";
import {
    faTwitch,
    faTiktok,
    faYoutube,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function GetInTouch() {
    return (
        <section className="min-h-screen bg-[#0a0a1e] text-white px-8 md:px-20 py-24 flex items-center">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

                {/* LEFT */}
                <div className="flex items-center">
                    <h1 className="font-archivo-black text-7xl md:text-9xl lg:text-[10rem] uppercase tracking-tighter leading-[0.8]">
                        GET
                        <span className="block text-cyan-400">
                            IN
                        </span>
                        <span className="block">
                            TOUCH
                        </span>
                    </h1>
                </div>

                <div className="flex flex-col justify-center gap-14">

                    {/* EMAIL */}
                    <div>
                        <Inbox className="text-cyan-400 text-5xl mb-6" />

                        <p className="uppercase text-gray-500 text-sm font-bold tracking-widest mb-2">
                            Email
                        </p>

                        <a
                            href="mailto:hello@ballersandbanter.com"
                            className="text-2xl md:text-3xl font-bold hover:text-cyan-400 transition-colors"
                        >
                            hello@ballersandbanter.com
                        </a>
                    </div>

                    <div>
                        <Phone className="text-cyan-400 text-5xl mb-6" />

                        <p className="uppercase text-gray-500 text-sm font-bold tracking-widest mb-2">
                            Phone
                        </p>

                        <a
                            href="tel:+254700000000"
                            className="text-2xl md:text-3xl font-bold hover:text-cyan-400 transition-colors"
                        >
                            +254 700 000 000
                        </a>
                    </div>

                    <div>
                        <p className="uppercase text-gray-500 text-sm font-bold tracking-widest mb-5">
                            Follow Us
                        </p>

                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                aria-label="Twitch"
                                className="text-white text-4xl hover:text-cyan-400 hover:-translate-y-1 transition-all"
                            >
                                <FontAwesomeIcon icon={faTwitch} />
                            </a>

                            <a
                                href="https://www.tiktok.com/@ballersnbanters?_r=1&_t=ZS-98lweQtzM1t"
                                aria-label="TikTok"
                                className="text-white text-4xl hover:text-cyan-400 hover:-translate-y-1 transition-all"
                            >
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                                className="text-white text-4xl hover:text-cyan-400 hover:-translate-y-1 transition-all"
                            >
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-white text-4xl hover:text-cyan-400 hover:-translate-y-1 transition-all"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}