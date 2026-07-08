import Image, { StaticImageData } from "next/image";

type FeatureSectionProps = {
  title: string;
  description: string;
  image: StaticImageData;
  isReversed?: boolean;
};

export default function FeatureSection({
  title,
  description,
  image,
  isReversed = false,
}: FeatureSectionProps) {
  return (
    <div
      className={`
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        lg:gap-20
        items-center
        py-2
      `}
    >
      {/* Text */}
      <div
        className={`
          ${isReversed ? "lg:order-2 text-right" : "lg:order-1 text-left"}
          flex flex-col justify-center
        `}
      >

        <h2 className="text-4xl font-extrabold uppercase tracking-wide text-cyan-300">
          {title}
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
          {description}
        </p>

        <ul
          className={`mt-8 space-y-3 text-gray-400 ${isReversed ? "items-end" : "items-start"
            }`}
        >
          <li>✓ Weekly competitions</li>
          <li>✓ Instant matchmaking</li>
          <li>✓ Cross-platform support</li>
        </ul>

        {/* <button
          className="
            mt-8
            w-fit
            rounded-full
            border
            border-cyan-400
            px-6
            py-3
            text-cyan-300
            transition
            hover:bg-cyan-400
            hover:text-black
            hover:shadow-[0_0_25px_rgba(34,211,238,.5)]
            self-start
          "
        >
          Learn More
        </button> */}
      </div>

      {/* Image */}
      <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-cyan-400/20
            shadow-[0_0_40px_rgba(34,211,238,.15)]
            transition-all
            duration-500
            hover:scale-[1.02]
            hover:shadow-[0_0_50px_rgba(34,211,238,.35)]
          "
        >
          <Image
            src={image}
            alt={title}
            className="w-full h-auto object-cover"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}