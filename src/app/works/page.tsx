'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function WorksPage() {
  const items = [
    { label: 'Fishermen at Sea (1796)', img: '/turner3-1.jpg' },
    { label: 'The Rising Squall, Hot Wells (≈1792)', img: '/turner3-2.jpg' },
    { label: 'The Destruction of Sodom (1805)', img: '/turner3-3.jpg' },
    { label: 'The Junction of the Thames and the Medway (1807)', img: '/turner3-4.jpg' },

    { label: 'Frosty Morning (1813)', img: '/turner3-5.jpg' },
    { label: 'Mortlake Terrace: Early Summer Morning (1826)', img: '/turner3-6.jpg' },
    { label: 'Dido and Aeneas (1814)', img: '/turner3-7.jpg' },
    { label: 'St. Mawes at the Pilchard Season (1812)', img: '/turner3-8.jpg' },

    { label: 'The Fighting Temeraire (1839)', img: '/turner3-9.jpg' },
    { label: 'Rain, Steam and Speed – The Great Western Railway (1844)', img: '/turner3-10.jpg' },
    { label: 'Snow Storm: Steam-Boat off a Harbour’s Mouth (1842)', img: '/turner3-11.jpg' },
    { label: 'The Sun of Venice Going to Sea (1843)', img: '/turner3-12.jpg' },
  ];

  const [active, setActive] = useState<number | null>(null);

  const early = items.slice(0, 4);
  const middle = items.slice(4, 8);
  const later = items.slice(8, 12);

  const RowHeading = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-serif text-left mt-12 pb-2 pl-4 text-base md:text-lg lg:text-xl leading-snug border-b border-gray-300">
      {children}
    </h2>
  );

  const WorksRow = ({ data, offset = 0 }: { data: typeof items; offset?: number }) => (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((item, i) => (
        <article
          key={item.label}
          onClick={() => setActive(offset + i)}
          className="cursor-pointer rounded-lg border border-black/10 bg-white p-4 transition-all duration-200
                     hover:shadow-lg hover:-translate-y-[3px] active:translate-y-[1px] animate-fadeInUp"
          style={{ animationDelay: `${(offset + i + 1) * 80}ms` }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-gray-100">
            <Image
              src={item.img}
              alt={item.label}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={offset + i < 2}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          <h3 className="mt-3 text-gray-800 text-sm sm:text-base md:text-lg leading-snug font-normal">
            {item.label}
          </h3>
        </article>
      ))}
    </div>
  );

  return (
    <section className="py-12">
      <header className="text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold drop-shadow-lg animate-fadeInUp">
          Selected Works
        </h1>
      </header>

      <RowHeading>Early Works (Apprenticeship to 1800s)</RowHeading>
      <WorksRow data={early} offset={0} />

      <RowHeading>Middle Period (1800s–1820s)</RowHeading>
      <WorksRow data={middle} offset={4} />

      <RowHeading>Later Works (1830s–1850s)</RowHeading>
      <WorksRow data={later} offset={8} />

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-5xl w-[92%] bg-white rounded-lg shadow-xl p-6 animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              aria-label="Close"
            >
              ×
            </button>

            <div className="relative h-[32rem] sm:h-[36rem] lg:h-[40rem] rounded-md overflow-hidden bg-gray-100">
              <Image
                src={items[active].img}
                alt={items[active].label}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            <h2 className="mt-4 font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">
              {items[active].label}
            </h2>
          </div>
        </div>
      )}
    </section>
  );
}