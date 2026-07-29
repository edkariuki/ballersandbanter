import HeroImage from "../components/about/hero_image";
import DancingRasta from '../assets/images/dancing_rasta.png'
import PlayerDNA from "../components/about/player_dna";

export default function About() {
    return (
        <main className="relative min-h-screen bg-gray-900 overflow-hidden">
            <HeroImage
                src={DancingRasta}
                alt="Mohamed Rady"
            />
            <div className="absolute left-40 top-64 w-[360px]">
                <PlayerDNA
                    position="CAM"
                    platform="PlayStation 5"
                    playstyle="Creative Playmaker"
                    region="Kenya 🇰🇪"
                />
            </div>
        </main>
    )
}