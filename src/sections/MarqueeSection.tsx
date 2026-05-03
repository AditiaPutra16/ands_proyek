export default function MarqueeSection() {
  const marqueeItems = [
    "QUALITY INGREDIENTS",
    "BAKED WITH LOVE",
    "ALWAYS FRESH",
    "AUTHENTIC TASTE",
    "HALAL",
    "HYGIENIC INGREDIENTS",
  ];

  return (
    <>
      {/* CSS Animasi Marquee (Disisipkan langsung agar mudah di-copy) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
            display: flex;
            white-space: nowrap;
            will-change: transform;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .marquee-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0 1rem;
            flex-shrink: 0;
          }
        `,
        }}
      />

      <section className="bg-[#5C3D2E] text-white py-3 overflow-hidden border-y-4 border-[#7F1D1D]">
        <div className="animate-marquee">
          {/* Group 1 */}
          <div className="flex">
            {marqueeItems.map((item, index) => (
              <div key={`group1-${index}`} className="marquee-item text-sm sm:text-base font-medium tracking-wide">
                <span>{item}</span>
                <span className="text-[#EA580C]">●</span>
              </div>
            ))}
          </div>

          {/* Group 2 (Duplicate untuk seamless loop) */}
          <div className="flex">
            {marqueeItems.map((item, index) => (
              <div key={`group2-${index}`} className="marquee-item text-sm sm:text-base font-medium tracking-wide">
                <span>{item}</span>
                <span className="text-[#EA580C]">●</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
