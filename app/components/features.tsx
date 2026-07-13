'use client'

import FeatureSection from './features_section'

import tournamentImg from '../assets/images/tourneyImg.jpg'
import onevsoneImg from '../assets/images/saka.jpg'
import cashprizeImg from '../assets/images/kd.jpg'

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
      image: tournamentImg,
    },
    {
      title: 'Leaderboards',
      description: 'Track your rank and climb to the top every season.',
      image: tournamentImg,
    },
    {
      title: '1v1 Challenges',
      description: 'Challenge friends and rivals anytime.',
      image: onevsoneImg,
    },
  ]

  return (
    <section className="relative bg-gray-900 px-8 py-24 text-white md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold md:text-5xl">
          Features
        </h2>

        <p className="mt-4 text-center text-lg text-gray-400">
          Everything you need to compete, win and dominate.
        </p>

        <div className="relative">
          <div className="mt-8 space-y-16">
            {features.map((feature, index) => (
              <FeatureSection
                key={feature.title}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}