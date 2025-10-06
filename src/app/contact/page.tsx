'use client';

import { useState } from 'react';
import Button from '../components/ui/Button';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 1500);
  }

  return (
    <section className="pt-12 pb-12 max-w-xl mx-auto animate-fadeInUp">
      <h1 className="font-serif text-5xl md:text-7xl font-semibold text-center drop-shadow-lg">
        Contact
      </h1>

      <p className="mt-3 text-gray-700 text-sm sm:text-base md:text-lg text-center">
        Questions or feedback? Send a message.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5 text-center">
        <div>
          <label
            htmlFor="name"
            className="block text-xs sm:text-sm md:text-base font-medium text-gray-800"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-lg border border-black/15 px-3 py-2.5
                       text-sm sm:text-base md:text-lg
                       outline-none bg-white/95
                       focus-visible:ring focus-visible:ring-blue-400/50"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm md:text-base font-medium text-gray-800"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-black/15 px-3 py-2.5
                       text-sm sm:text-base md:text-lg
                       outline-none bg-white/95
                       focus-visible:ring focus-visible:ring-blue-400/50"
            placeholder="name@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs sm:text-sm md:text-base font-medium text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-2 w-full rounded-lg border border-black/15 px-3 py-2.5
                       text-sm sm:text-base md:text-lg
                       outline-none bg-white/95
                       focus-visible:ring focus-visible:ring-blue-400/50"
            placeholder="Write your message…"
          />
        </div>

        <Button
          type="submit"
          className="w-full text-base sm:text-lg md:text-xl font-medium
                     !bg-[#5c3b2a] !text-white hover:!bg-[#4a2f21]
                     focus-visible:ring focus-visible:ring-[#5c3b2a]/40
                     rounded-xl py-3 transition"
        >
          {sent ? 'Sent ✓' : 'Send'}
        </Button>

        {sent && (
          <p className="pt-2 text-sm sm:text-base text-green-700">
            Thanks! Your message has been sent.
          </p>
        )}
      </form>
    </section>
  );
}