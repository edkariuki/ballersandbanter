import DancingRasta from '../../../assets/images/dancing_rasta.png'
import Shakes from '../../../assets/images/shakes2.png'
import FClogo from '../../../assets/logos/fc_logo.png'
import ValorantLogo from '../../../assets/logos/valorant_logo.jpg'
import ApexLogo from '../../../assets/logos/apex_logo.jpg'

export const players = [
    {
        heroImage: DancingRasta,
        name: "FRODO",
        role: "CAPTAIN",
        position: "CDM",
        platform: "PC",
        playstyle: "CDM",
        region: "Kenya 🇰🇪",
        prowessDescription:
            "A relentless creative force in midfield, Frodo reads the game a step ahead of everyone else — threading passes through gaps most players don't even see. Calm under pressure, ruthless in transition, and always the first name on the teamsheet when it matters most.",
        games: [
            { name: "EA FC 26", logo: FClogo },
            { name: "Valorant", logo: ValorantLogo },
            { name: "Apex Legends", logo: ApexLogo },
        ],
        socials: [
            { platform: "twitch" as const, url: "https://www.twitch.tv/ofodongoro" },
            { platform: "instagram" as const, url: "https://instagram.com/ofodongoro" },
            { platform: "twitter" as const, url: "https://twitter.com/ofodongoro" },
        ],
    },
    {
        heroImage: Shakes,
        name: "CORE11",
        role: "",
        position: "ST, RW",
        platform: "PS5",
        playstyle: "CDM",
        region: "Kenya 🇰🇪",
        prowessDescription:
            "A relentless creative force in midfield, Frodo reads the game a step ahead of everyone else — threading passes through gaps most players don't even see. Calm under pressure, ruthless in transition, and always the first name on the teamsheet when it matters most.",
        games: [
            { name: "EA FC 26", logo: FClogo },
            { name: "Valorant", logo: ValorantLogo },
            { name: "Apex Legends", logo: ApexLogo },
        ],
        socials: [
            { platform: "twitch" as const, url: "https://www.twitch.tv/ofodongoro" },
            { platform: "instagram" as const, url: "https://instagram.com/ofodongoro" },
            { platform: "twitter" as const, url: "https://twitter.com/ofodongoro" },
        ],
    },
    // add 5 more player objects here, same shape
];