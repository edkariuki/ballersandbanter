import DancingRasta from '../../../assets/images/dancing_rasta-Photoroom.png'
import Shakes from '../../../assets/images/shakes4.png'
import Blok from '../../../assets/images/blok.png'
import CoolJoe from '../../../assets/images/cool_joe.png'
import NorthShaw from '../../../assets/images/north_shaw.png'
import Elmatador from '../../../assets/images/elmatador1.png'
import FClogo from '../../../assets/logos/fc_logo.png'
import ValorantLogo from '../../../assets/logos/valorant_logo.jpg'
import ApexLogo from '../../../assets/logos/apex_logo.jpg'
import LastOfUsLogo from '../../../assets/logos/last_of_us_logo.jpg'
import GtaLogo from '../../../assets/logos/gta_logo.jpg'
import CODLogo from '../../../assets/logos/cod_logo1.jpg'
import NBA2KLogo from '../../../assets/logos/nba2k_logo.jpg'
import FortniteLogo from '../../../assets/logos/fortnite_logo.jpg'
import RedDeadLogo from '../../../assets/logos/red_dead_logo.jpg'

export const players = [
    {
        heroImage: DancingRasta,
        name: "FRODO",
        role: "CAPTAIN",
        position: "CDM",
        platform: "PC",
        playstyle: "Mousa Dembélé",
        prowessDescription:
            "A commanding presence at the heart of midfield, Captain Frodo is the foundation every victory is built on. Shielding the back line with relentless intensity, breaking up attacks before they begin, and leading by example in every challenge, he sets the standard for the entire squad. Calm, disciplined, and always in control, Frodo doesn't just protect the team—he inspires it. Every great performance starts with the captain.",
        games: [
            { name: "EA FC 26", logo: FClogo },
            { name: "Apex Legends", logo: ApexLogo },
            { name: "Last of Us", logo: LastOfUsLogo },
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
        playstyle: "C. Ronaldo",
        region: "Kenya 🇰🇪",
        prowessDescription:
            "An electrifying striker with flair to spare, Core11 lives to embarrass defenders and light up the scoreboard. Every touch is a chance for a new skill move, every one-on-one a challenge he's eager to win. Fearless, unpredictable, and clinical in front of goal, he turns moments of brilliance into match-winning performances and keeps fans on the edge of their seats.",
        games: [
            { name: "EA FC 26", logo: FClogo },
            { name: "Gta", logo: GtaLogo },
            { name: "Call of Duty", logo: CODLogo },
        ],
        socials: [
            { platform: "twitch" as const, url: "https://www.twitch.tv/corethe1" },
            { platform: "instagram" as const, url: "https://www.instagram.com/core.onze/" },
        ],
    },
    {
        heroImage: Blok,
        name: "UNCMIRO",
        role: "",
        position: "CM, ST, RW",
        platform: "PC, PS5",
        playstyle: "Casemiro",
        region: "Kenya 🇰🇪",
        prowessDescription:
            "A fearless ball-winner who treats every tackle like a statement, Uncmiro thrives on shutting down attacks before they can breathe. Aggressive in the challenge, relentless in the press, and always first to the loose ball, he turns defense into opportunity. Every interception, crunching tackle, and perfectly timed challenge fuels the team and reminds opponents that nothing comes easy through his midfield.",
        games: [
            { name: "EA FC 26", logo: FClogo },
            { name: "Call of Duty", logo: CODLogo },
            { name: "Gta", logo: GtaLogo },
        ],
        socials: [
            { platform: "twitch" as const, url: "https://www.twitch.tv/starbuster101" },
            { platform: "instagram" as const, url: "https://instagram.com/ced_clubberlang" },
        ],
    },
    {
        heroImage: NorthShaw,
        name: "SERGIO BISKUTI",
        role: "",
        position: "CM, LB, LW",
        platform: "PS5",
        playstyle: "S. Busquets",
        region: "Kenya 🇰🇪",
        prowessDescription:
            "A master of possession, Sergio Biskuti controls the rhythm of every match with patience and precision. Rarely rushed and almost impossible to dispossess, he shields the ball, picks the right pass, and keeps the team ticking from the heart of midfield. Every touch has a purpose, turning pressure into control and possession into dominance.",
        games: [
            { name: "EA FC 26", logo: FClogo },
            { name: "Call of Duty", logo: CODLogo },
            { name: "NBA 2K", logo: NBA2KLogo },
        ],
        socials: [
            { platform: "twitch" as const, url: "https://www.twitch.tv/chinja22" },
            { platform: "instagram" as const, url: "https://www.instagram.com/edd.deebo/" },
        ],
    },
    {
        heroImage: CoolJoe,
        name: "TANGUS",
        role: "",
        position: "CM, ST, CB",
        platform: "PS5",
        playstyle: "Rodri",
        region: "Kenya 🇰🇪",
        prowessDescription:
            "A midfield marauder who thrives under pressure, Tangus makes escaping tight spaces look effortless. With a constant demand for the ball and a simple yet deadly passing style, he turns chaos into control with every touch. Whether surrounded by opponents or building the next attack, Tangus always finds the easy way out — making difficult situations look routine.",
        games: [
            { name: "EA FC 26", logo: FClogo },
            { name: "Call of Duty", logo: CODLogo },
            { name: "Apex Legends", logo: ApexLogo },
            { name: "Fortnite", logo: FortniteLogo },
        ],
        socials: [
            { platform: "instagram" as const, url: "https://www.instagram.com/titaiiiiii/" },
        ],
    },
    {
        heroImage: Elmatador,
        name: "AREA 51",
        role: "",
        position: "CAM",
        platform: "PS5",
        playstyle: "B. Fernandes",
        region: "Kenya 🇰🇪",
        prowessDescription:
            "A creative mastermind between the lines, Area 51 delivers passes that feel almost impossible to predict. With vision beyond the ordinary, every through ball is a calculated strike into dangerous spaces, slicing open defenses and sending teammates through on goal. Mysterious, precise, and always one pass ahead, Area 51 turns chances into clear-cut opportunities.",
        games: [
            { name: "EA FC 26", logo: FClogo },
            { name: "Apex Legends", logo: ApexLogo },
            { name: "Red Dead Redemption 2", logo: RedDeadLogo },
        ],
        socials: [
            { platform: "twitch" as const, url: "https://www.twitch.tv/mbichiedwin" },
            { platform: "instagram" as const, url: "https://www.instagram.com/_.kari.uki/" },
            { platform: "twitter" as const, url: "https://twitter.com/mbichiedwin" },
        ],
    },
];