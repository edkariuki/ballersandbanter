type PlayerDNAProps = {
    position: string;
    platform: string;
    playstyle: string;
};

export default function PlayerDNA({
    position,
    platform,
    playstyle,
}: PlayerDNAProps) {
    const items = [
        { label: "Position", value: position },
        { label: "Platform", value: platform },
        { label: "Playstyle", value: playstyle },
    ];

    return (
        <div className="rounded-[8px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 text-white">
            <h2 className="mb-6 text-2xl font-bold tracking-wide">
                Player DNA
            </h2>

            <div className="space-y-5">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center justify-between border-b border-white/10 pb-3 last:border-none last:pb-0"
                    >
                        <span className="text-sm uppercase tracking-[0.2em] text-white/50">
                            {item.label}
                        </span>

                        <span className="text-lg font-semibold">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}