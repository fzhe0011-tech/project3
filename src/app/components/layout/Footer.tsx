export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Turner Site</p>
        <a
          href="#top"
          className="transition-all duration-200 ease-out hover:text-[#5c3b2a] hover:-translate-y-0.5 
                     active:translate-y-[1px] active:scale-95 
                     focus-visible:outline-none focus-visible:ring focus-visible:ring-[#5c3b2a]/40 inline-flex items-center"
          aria-label="Back to top"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}