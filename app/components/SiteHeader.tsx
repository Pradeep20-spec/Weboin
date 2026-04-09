import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,13,29,0.96),rgba(6,10,24,0.92))] px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur sm:px-6">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/weboin-logo.png"
            alt="Weboin Technologies"
            width={152}
            height={46}
            className="h-auto w-[108px] sm:w-[132px]"
            priority
          />
          <span className="sr-only">Weboin Technologies</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span className="rounded-full border border-violet-500/35 bg-[linear-gradient(180deg,rgba(30,27,75,0.8),rgba(15,23,42,0.8))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
          Dark Mode
        </span>
      </div>
    </header>
  );
}
