export default function MarqueeSection() {
  const marqueeItems = [
  "QUALITY INGREDIENTS",
  "●",
  "BAKED WITH LOVE",
  "●",
  "ALWAYS FRESH",
  "●",
  "AUTHENTIC TASTE",
  "●",
  "HALAL AND HYGIENIC",
  "●"
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
            animation: marquee 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `,
        }}
      />

      <section className="bg-[#5C3D2E] text-white py-3 overflow-hidden flex border-y-4 border-[#7F1D1D]">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 justify-around items-center">
            {marqueeItems.map((item, index) => (
              <div
                key={`group1-${index}`}
                className="flex items-center space-x-2 text-sm sm:text-base font-medium tracking-wide"
              >
                <span>{item}</span>
                <span className="text-[#EA580C] px-4 sm:px-8">●</span>
              </div>
            ))}
          </div>

          <div className="flex w-1/2 justify-around items-center">
            {marqueeItems.map((item, index) => (
              <div
                key={`group2-${index}`}
                className="flex items-center space-x-2 text-sm sm:text-base font-medium tracking-wide"
              >
                <span>{item}</span>
                <span className="text-[#EA580C] px-4 sm:px-8">●</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
