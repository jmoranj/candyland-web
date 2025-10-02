interface CandyLogoProps {
  sizeClasses?: string;
  alt?: string;
  src?: string;
}

export default function CandyLogo({
  sizeClasses = "w-[10%] max-2xl:w-[10%] max-xl:w-[15%] max-md:w-[20%] max-sm:w-[25%]",
  alt = "Candy Logo",
  src = "/logo.png",
}: CandyLogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClasses}`}
    />
  );
}