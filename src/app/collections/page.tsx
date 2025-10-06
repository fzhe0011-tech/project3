'use client';

import { useState } from 'react';
import Image from 'next/image';

type Place = {
  name: string;
  city: string;
  href: string;
  img: string;
  desc: string;
};

export default function CollectionsPage() {
  const places: Place[] = [
    {
      name: 'Tate Britain',
      city: 'London, UK',
      href: 'https://www.tate.org.uk/visit/tate-britain',
      img: '/turner3-13.jpg',
      desc:
        "Tate Britain (1897) showcases British art from the Tudor period to today and holds the world's largest Turner collection (the Turner Bequest), prominently displayed in the Clore Gallery."
    },
    {
      name: 'National Gallery',
      city: 'London, UK',
      href: 'https://www.nationalgallery.org.uk/',
      img: '/turner3-14.jpg',
      desc:
        "In Trafalgar Square, the National Gallery spans European painting from the Middle Ages to the early twentieth century. Turner left key works to be shown with Claude Lorrain, and several are still on display among European masters."
    },
    {
      name: 'Metropolitan Museum of Art',
      city: 'New York, USA',
      href: 'https://www.metmuseum.org/',
      img: '/turner3-15.jpg',
      desc:
        "The Met, founded in 1870 and the largest museum in the United States, holds select Turner paintings and drawings and provides high-resolution images online for global study."
    },
    {
      name: 'National Gallery of Scotland',
      city: 'Edinburgh, UK',
      href: 'https://www.nationalgalleries.org/',
      img: '/turner3-16.jpg',
      desc:
        "Opened in 1859, the gallery celebrates Turner through the Vaughan Bequest of watercolours, which are displayed only each January in the tradition known as ‘Turner in January’ to protect them from light."
    },
    {
      name: 'Yale Center for British Art',
      city: 'New Haven, USA',
      href: 'https://britishart.yale.edu/',
      img: '/turner3-17.jpg',
      desc:
        "Designed by Louis Kahn (1977), YCBA holds the most comprehensive British art outside the UK, including oils, watercolours, and Turner’s only complete sketchbook outside Britain."
    },
    {
      name: 'Museum of Fine Arts',
      city: 'Boston, USA',
      href: 'https://www.mfa.org/',
      img: '/turner3-18.jpg',
      desc:
        "MFA Boston (founded 1870) presents select Turner oils and watercolours that show his mastery of light and atmosphere for American audiences."
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-12 max-w-5xl mx-auto animate-fadeInUp">
      <h2 className="font-serif text-5xl md:text-7xl font-semibold text-center drop-shadow-lg">
        Where to See Turner
      </h2>

      <p className="mt-3 text-gray-700 text-sm sm:text-base md:text-lg text-center">
        A short list of institutions where Turner’s works are part of the collection or frequently exhibited.
      </p>

      <div className="mt-20">
        <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-100">
          {active !== null && (
            <>
              <Image
                src={places[active].img}
                alt={places[active].name}
                fill
                className="object-cover opacity-0 animate-fadeInUp"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div
                  className="max-w-3xl bg-black/60 text-white rounded-lg px-5 py-4 backdrop-blur-md text-center
                             opacity-0 animate-fadeInUp"
                  style={{ animationDelay: '120ms' }}
                >
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl">
                    {places[active].name}
                  </h3>
                  <p className="mt-1 text-white/80 text-xs sm:text-sm md:text-base">
                    {places[active].city}
                  </p>
                  <p className="mt-3 text-[13px] sm:text-sm md:text-base leading-relaxed text-left">
                    {places[active].desc}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        onMouseLeave={() => setActive(null)}
      >
        {places.map((p, i) => (
          <article
            key={p.name}
            className="group cursor-pointer rounded-lg border border-black/10 bg-white p-6 transition-all duration-200
                       hover:shadow-lg hover:-translate-y-[3px] active:translate-y-[1px] animate-fadeInUp"
            style={{ animationDelay: `${(i + 1) * 90}ms` }}
          >
            <a
              className="block w-full h-full outline-none"
              href={p.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(prev => (prev === i ? null : prev))}
            >
              <h3 className="text-gray-900 text-sm sm:text-base md:text-lg leading-snug">
                {p.name} ↗
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">
                {p.city}
              </p>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}