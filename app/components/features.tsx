'use client'

import FeatureSection from './features_section'
import GameLogoCarousel from './games_carousel'

import tournamentImg from '../assets/images/pexels-yankrukov-9072204.jpg'
import onevsoneImg from '../assets/images/unov.jpg'
import cashprizeImg from '../assets/images/winning.jpg'
import medals from '../assets/images/leaderboard2.jpg'
import liveTournamentImg from '../assets/images/pexels-amateur-wizard-5382381.jpg'

export default function Features() {
  const features = [
    {
      title: 'Competitive Tournaments',
      description: 'Compete in weekly tournaments and prove you are the best.',
      image: tournamentImg,
    },
    {
      title: 'Prizes',
      description: 'Win real cash rewards from exciting competitions.',
      image: cashprizeImg,
    },
    {
      title: 'Live Broadcasts',
      description: 'Watch every big match live with the community.',
      image: liveTournamentImg,
    },
    {
      title: 'Leaderboards',
      description: 'Track your rank and climb to the top every season.',
      image: medals,
    },
    {
      title: '1v1 Challenges',
      description: 'Challenge friends and rivals anytime.',
      image: onevsoneImg,
    },
  ]

  return (
    <section className="relative bg-[#07071a] px-8 py-10 text-white md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="px-4 overflow-x-hidden mb-20 mt-20">
          <h1
            className="text-6xl lg:text-8xl font-black text-white leading-none mb-6"
            style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "-0.02em" }}
          >
            COMPETE.
            <br />
            <span style={{ color: "#7c3aed" }}>WIN.</span>
            <br />
            DOMINATE.
          </h1>
        </div>

        <div className="mb-20">
          <p className="mb-6 text-center text-sm uppercase tracking-widest text-white/40">
            Compete across your favorite titles
          </p>
          <GameLogoCarousel />
        </div>

        <div className="relative">
          <div className="mt-2 space-y-4">
            {features.map((feature, index) => (
              <FeatureSection
                key={feature.title}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                isReversed={index % 2 === 1}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}