// components/about/player_prowess.tsx

interface PlayerProwessProps {
    title?: string;
    description: string;
}

export default function PlayerProwess({
    title = "Prowess",
    description,
}: PlayerProwessProps) {
    return (
        <div className="bg-gray-800/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
            <h3 className="text-white text-2xl font-bold mb-4">
                {title}
            </h3>

            <p className="text-gray-300 text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
}