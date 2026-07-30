// components/about/player_profile.tsx

import HeroImage from "./hero_image";
import PlayerDNA from "./player_dna";
import PlayerProwess from "./player_prowess";
import PlayerGames from "./player_games";
import PlayerSocials from "./player_socials";
import { StaticImageData } from "next/image";

interface GameTitle {
    name: string;
    logo: string | StaticImageData;
}

interface SocialLink {
    platform: "instagram" | "twitter" | "twitch" | "youtube";
    url: string;
}

interface PlayerProfileProps {
    heroImage: StaticImageData;
    name: string;
    role: string;
    position: string;
    platform: string;
    playstyle: string;
    prowessDescription: string;
    games: GameTitle[];
    socials: SocialLink[];
}

export default function PlayerProfile({
    heroImage,
    name,
    role,
    position,
    platform,
    playstyle,
    prowessDescription,
    games,
    socials,
}: PlayerProfileProps) {
    return (
        <section className="relative h-screen w-full snap-start shrink-0 bg-gray-900 overflow-hidden">
            <HeroImage src={heroImage} alt={name} />

            <div className="absolute left-40 top-64 w-[360px]">
                <div className="mb-4">
                    <h2 className="font-archivo-black text-8xl font-black uppercase leading-none tracking-[-0.05em] text-gray-400">
                        {name}
                    </h2>
                    <p className="text-2xl font-bold uppercase tracking-[0.4em] text-yellow-400">
                        {role}
                    </p>
                </div>
                <PlayerDNA
                    position={position}
                    platform={platform}
                    playstyle={playstyle}
                />
            </div>

            <div className="absolute right-32 top-20 w-[400px]">
                <PlayerProwess title="Prowess" description={prowessDescription} />
            </div>

            <div className="absolute right-32 top-[475px] w-[400px]">
                <PlayerGames games={games} />
            </div>

            <div className="absolute right-32 top-[600px] w-[400px]">
                <PlayerSocials socials={socials} />
            </div>
        </section>
    );
}