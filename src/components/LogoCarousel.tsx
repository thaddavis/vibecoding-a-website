"use client";

const logos = [
  { id: 1, src: "/logos/wwlogo-2025-header.png", alt: "Word Wizards logo" },
  { id: 2, src: "/logos/OpenLaw_Logo_Black.png", alt: "OpenLaw logo" },
  { id: 3, src: "/logos/carnival_logo.jpg", alt: "Carnival Cruise Line logo" },
  { id: 4, src: "/logos/kforce_logo.png", alt: "Kforce logo" },
  { id: 5, src: "/logos/predev_logo_name-removebg.png", alt: "pre.dev logo" },
  { id: 6, src: "/logos/ncl_logo.png", alt: "NCL logo" },
  { id: 7, src: "/logos/PropyKeys.png", alt: "Propy Keys logo" },
  { id: 8, src: "/logos/Ally_Financial.png", alt: "Ally Financial logo" },
  { id: 9, src: "/logos/AgentOps_logo.png", alt: "Carnival Cruise Line logo" },
];

export function LogoCarousel() {
  return (
    <div className="w-full overflow-hidden py-4">
      <div className="flex animate-scroll">
        {/* First track */}
        <div className="flex gap-8 whitespace-nowrap shrink-0">
          {logos.map((logo, i) => (
            <div key={`track1-${i}`} className="flex items-center justify-center h-24 px-8 flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="h-12 w-auto min-w-20 object-contain hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        {/* Second track (exact duplicate) */}
        <div className="flex gap-8 whitespace-nowrap shrink-0">
          {logos.map((logo, i) => (
            <div key={`track2-${i}`} className="flex items-center justify-center h-24 px-8 flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="h-12 w-auto min-w-20 object-contain hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 