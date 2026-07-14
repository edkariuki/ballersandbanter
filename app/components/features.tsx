'use client'

import FeatureSection from './features_section'

import tournamentImg from '../assets/images/alexander-jt-2kl_Gj70F6U-unsplash.jpg'
import onevsoneImg from '../assets/images/unov.jpg'
import cashprizeImg from '../assets/images/krabs2.jpg'
import medals from '../assets/images/medals.jpg'
import liveTournamentImg from '../assets/images/florian-olivo-Mf23RF8xArY-unsplash.jpg'

export default function Features() {
  const features = [
    {
      title: 'Competitive Tournaments',
      description: 'Compete in weekly tournaments and prove you are the best.',
      image: tournamentImg,
    },
    {
      title: 'Cash Prizes',
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
        <div className="px-4 overflow-x-hidden">
          <p className="text-center text-4xl font-black uppercase tracking-[0.15em] whitespace-nowrap sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-blue-400">COMPETE.</span>{" "}
            <span className="text-emerald-400">WIN.</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              DOMINATE.
            </span>
          </p>
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