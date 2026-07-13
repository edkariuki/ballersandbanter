import Image, { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";

type FeatureSectionProps = {
  title: string;
  description: string;
  image: StaticImageData;
  isReversed?: boolean;
  index?: number;
};

export default function FeatureSection({
  title,
  description,
  image,
  isReversed = false,
}: FeatureSectionProps) {
  return (
    <div className="group grid overflow-hidden border-b border-cyan-400/10 md:grid-cols-2">
      {/* Image */}
      <div
        className={`relative h-80 overflow-hidden md:h-[460px] ${isReversed ? "md:order-2" : "md:order-1"
          }`}
        style={{ background: "#0a0a1e" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Fade into text */}
        <div
          className="absolute inset-0"
          style={{
            background: isReversed
              ? "linear-gradient(to left, transparent 55%, #07071a 100%)"
              : "linear-gradient(to right, transparent 55%, #07071a 100%)",
          }}
        />

        {/* Mobile bottom fade */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, transparent 55%, #07071a 100%)",
          }}
        />

        {/* Watermark */}
        <div className="pointer-events-none absolute bottom-6 right-6 select-none text-8xl font-black text-cyan-400/10">
        </div>
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center px-8 py-16 md:px-14 md:py-20 ${isReversed ? "md:order-1" : "md:order-2"
          }`}
        style={{ background: "#07071a" }}
      >

        {/* Heading */}
        <h2 className="text-4xl font-black leading-tight text-white lg:text-5xl">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-md text-lg leading-8 text-gray-400">
          {description}
        </p>


        {/* <button
          className="
            mt-10
            flex
            w-fit
            items-center
            gap-3
            border
            border-cyan-400/30
            bg-cyan-400/5
            px-6
            py-3
            text-sm
            font-bold
            uppercase
            tracking-[0.15em]
            text-cyan-400
            transition-all
            duration-300
            hover:scale-105
            hover:border-cyan-400
            hover:bg-cyan-400/10
          "
          style={{
            clipPath:
              "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
          }}
        >
          Learn More
          <ChevronRight size={16} />
        </button> */}
      </div>
    </div>
  );
}