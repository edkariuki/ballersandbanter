import Image, { StaticImageData } from "next/image";

type HeroImageProps = {
    src: string | StaticImageData;
    alt: string;
};

export default function HeroImage({
    src,
    alt,
}: HeroImageProps) {
    return (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-[420px]">
            <Image
                src={src}
                alt={alt}
                fill
                priority
                className="object-contain"
            />
        </div>
    );
}