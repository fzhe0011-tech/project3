'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Page() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const delay = el.dataset.delay ? Number(el.dataset.delay) : 0;
            el.style.animationDelay = `${delay}ms`;
            el.classList.add('in-view');
            io.unobserve(el);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxStyle = () => ({
    transform: `translateY(${offset * 0.2}px) scale(${1 + offset * 0.0001})`,
    transition: 'transform 0.1s linear',
  });

  const sections = [
    {
      src: '/turner-1.jpg',
      title: 'Light and Atmosphere',
      text:
        'Turner pioneered luminous skies and bold colors to convey emotion and atmosphere. He painted with a sense of radiance that seemed to dissolve solid forms into light, capturing the shifting moods of nature with unmatched sensitivity. His glowing horizons, blazing sunsets, and sweeping storms did more than record a scene. They invited viewers to feel the warmth of sunlight, the weight of clouds, and the drama of weather unfolding. Turner’s brush turned ordinary landscapes into poetic visions filled with life and movement.',
    },
    {
      src: '/turner-2.jpg',
      title: 'Sea and Storm',
      text:
        'His marine works captured motion, danger, and the sublime power of nature. Turner painted surging waves that seemed alive, skies heavy with wind, and ships tossed on restless waters. Each canvas carried both fear and beauty, showing how small humanity is before the sea. The spray, the shifting light, and the sudden bursts of color made viewers feel the raw energy of storms. Through these scenes he revealed nature’s strength, unyielding yet full of wonder.',
    },
    {
      src: '/turner-3.jpg',
      title: 'Modernity and Industry',
      text:
        'Later paintings embraced steam, iron and radical abstraction. Turner showed trains rushing through mist, factories glowing with fire, and skies blurred by smoke. His art caught the rhythm of a changing world, where new machines reshaped both land and life.',
    },
    {
      src: '/turner-4.jpg',
      title: 'Turner’s Life',
      text:
        'Joseph Mallord William Turner (1775–1851) was born in London and showed his talent for painting at an early age. At fourteen he entered the Royal Academy of Arts, where his skill soon brought him recognition as a landscape painter. He spent much of his life traveling across Europe, creating a vast body of work that earned him the title of “the painter of light.” In his later years he lived simply, leaving many of his works to the nation and shaping the course of art for generations.',
    },
    {
      src: '/turner-5.jpg',
      title: 'Influence on Later Generations',
      text:
        'Turner’s work opened new paths for modern art, with his use of color and light inspiring both Impressionists and abstractionists. Many later painters learned from his brush to seek freedom and emotion rather than only depict reality. His bold vision made art more expressive and invited viewers to feel the harmony between nature and the human spirit.',
    },
  ];

  return (
    <main className="space-y-24">
      <section className="relative h-[80vh] w-full overflow-hidden flex flex-col items-center justify-center bg-black text-center px-4">
        <div
          className="absolute inset-0 bg-center bg-cover will-change-transform"
          style={{
            backgroundImage: "url(/turner-hero.jpg)",
            ...parallaxStyle(),
            filter: 'brightness(0.75)',
          }}
          aria-hidden="true"
        />
        <h1 className="relative z-10 font-serif text-white text-5xl md:text-7xl drop-shadow-lg">
          Turner's Vision
        </h1>
       <p className="relative z-10 mt-12 text-white/90 italic text-lg md:text-2xl">
        A digital gallery of J.M.W. Turner’s life and works
       </p>
      </section>

      <section data-reveal data-delay="0" className="px-4 md:px-0 max-w-4xl mx-auto reveal">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          J.M.W. Turner (1775–1851) is celebrated as one of Britain’s greatest painters,
          a pioneer of light, atmosphere, and Romantic imagination. His works captured
          both the beauty and terror of nature, redefining landscape art.
        </p>
      </section>

      <section className="space-y-24">
        {sections.map((item, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 px-4 md:px-0 max-w-6xl mx-auto ${
                reversed ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div
                data-reveal
                data-delay="0"
                className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg reveal"
              >
                <Image src={item.src} alt={item.title} fill className="object-cover" />
              </div>

              <div
                data-reveal
                data-delay="200"
                className="w-full md:w-1/2 space-y-4 reveal"
              >
                <h2 className="font-serif text-2xl md:text-3xl">{item.title}</h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}