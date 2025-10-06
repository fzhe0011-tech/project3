'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
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
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = () => ({
    transform: `translateY(${offset * 0.2}px) scale(${1 + offset * 0.0001})`,
    transition: 'transform 0.1s linear',
  });

  return (
    <main className="pt-12 space-y-24">
      {/* 1 */}
      <div className="space-y-14">
        <header className="text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold drop-shadow-lg">
            About Turner
          </h1>
        </header>

        <section className="relative w-full h-[70vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover will-change-transform"
            style={{
              backgroundImage: "url(/turner2-1.jpg)",
              ...parallaxStyle(),
            }}
          />
          <div
            data-reveal
            data-delay="200"
            className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 
                       max-w-xl bg-white/80 backdrop-blur p-6 rounded-lg shadow-lg reveal"
          >
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Joseph Mallord William Turner was born in London on 23 April 1775, in
              Covent Garden. His family background was modest. His father worked as a barber
              and wig maker, while his mother came from a family of butchers and shopkeepers.
            </p>
          </div>
        </section>
      </div>

      {/* 2 */}
      <section className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 md:px-0">
        <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg reveal">
          <Image src="/turner2-3.jpg" alt="Turner study" fill className="object-cover" />
        </div>
        <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg reveal">
          <Image src="/turner2-6.jpg" alt="Turner travels" fill className="object-cover" />
        </div>
        <div
          data-reveal
          data-delay="200"
          className="flex items-center p-6 bg-white/90 backdrop-blur rounded-lg reveal"
        >
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            By his early teens, Turner was already producing sketches of landscapes and
            local scenes. In his twenties and thirties, he travelled widely across Britain
            and Europe, filling notebooks with studies of light, weather, and nature.
          </p>
        </div>
      </section>

      {/* 3 */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row gap-8 items-center">
        <div data-reveal className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg reveal">
          <Image src="/turner2-2.jpg" alt="Turner painter of light" fill className="object-cover" />
        </div>
        <div data-reveal data-delay="200" className="w-full md:w-1/2 space-y-4 reveal">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Turner’s style matured steadily. He became known for expressive use of light,
            colour, and atmosphere. In later works, forms dissolved into luminous colour,
            with boundaries between sea, sky, and horizon blurred.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed"
          style={{ backgroundImage: "url(/turner2-5.jpg)" }}
        />
        <div
          data-reveal
          data-delay="300"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     max-w-xl bg-black/60 text-white p-6 rounded-lg shadow-lg reveal"
        >
          <p className="text-base md:text-lg leading-relaxed">
            In his later years, Turner lived simply, leaving much of his work to the
            nation. Though his life grew more reclusive, his artistic influence expanded,
            shaping Impressionism and modern abstraction.
          </p>
        </div>
      </section>

      {/* 5 */}
      <section className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 md:px-0">
        <div data-reveal className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg reveal">
          <Image src="/turner2-4.jpg" alt="Turner legacy" fill className="object-cover" />
        </div>
        <div
          data-reveal
          data-delay="200"
          className="flex flex-col justify-center space-y-4 reveal"
        >
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Turner died in 1851, at the age of seventy-six. He was buried in St Paul’s
            Cathedral, and his reputation has grown steadily ever since. Today, he is
            celebrated as one of Britain’s greatest Romantic painters, a precursor to
            Impressionism and abstraction.
          </p>
        </div>
      </section>
    </main>
  );
}