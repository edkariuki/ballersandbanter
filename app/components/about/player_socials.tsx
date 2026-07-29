// components/about/player_socials.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faXTwitter,
    faTwitch,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

interface SocialLink {
    platform: "instagram" | "twitter" | "twitch" | "youtube";
    url: string;
}

interface PlayerSocialsProps {
    title?: string;
    socials: SocialLink[];
}

const platformIcons = {
    instagram: faInstagram,
    twitter: faXTwitter,
    twitch: faTwitch,
    youtube: faYoutube,
};

const platformColors = {
    instagram: "hover:text-pink-400",
    twitter: "hover:text-sky-400",
    twitch: "hover:text-purple-400",
    youtube: "hover:text-red-400",
};

export default function PlayerSocials({
    title = "Follow",
    socials,
}: PlayerSocialsProps) {
    return (
        <div className="bg-gray-800/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
            <h3 className="text-white text-2xl font-bold mb-6">
                {title}
            </h3>

            <div className="flex items-center gap-6">
                {socials.map((social) => (
                    <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-300 transition-colors ${platformColors[social.platform]}`}
                    >
                        <FontAwesomeIcon icon={platformIcons[social.platform]} size="xl" />
                    </a>
                ))}
            </div>
        </div >
    );
}