// components/about/player_games.tsx

import Image, { StaticImageData } from "next/image";

interface GameTitle {
    name: string;
    logo: string | StaticImageData;
}

interface PlayerGamesProps {
    title?: string;
    games: GameTitle[];
}

export default function PlayerGames({
    games,
}: PlayerGamesProps) {
    return (
        <div className="bg-gray-900 backdrop-blur-md rounded-2xl p-8">

            <div className="flex flex-row items-center flex-wrap gap-6">
                {games.map((game) => (
                    <div
                        key={game.name}
                        className="relative w-14 h-14 grayscale hover:grayscale-0 transition-all duration-300"
                        title={game.name}
                    >
                        <Image
                            src={game.logo}
                            alt={game.name}
                            fill
                            sizes="48px"
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}