// app/about/page.tsx  (or wherever About currently lives)

import PlayerProfile from "../components/about/player_profile";
import { players } from "../components/about/data/player_data";

export default function About() {
    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
            {players.map((player) => (
                <PlayerProfile key={player.name} {...player} />
            ))}
        </div>
    );
}