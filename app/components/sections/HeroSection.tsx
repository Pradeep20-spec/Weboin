import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 pb-10 pt-8 sm:px-10 sm:pt-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.18),transparent_24%),radial-gradient(circle_at_80%_4%,rgba(168,85,247,0.16),transparent_26%),radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.07),transparent_30%)]" />
        <div className="absolute -right-12 top-2 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5 pt-4 sm:pt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-cyan-300">
            Weboin Technologies
          </p>
          <h1 className="max-w-xl text-[2.45rem] font-bold leading-[0.98] text-white sm:text-[3.25rem] lg:text-[3.9rem]">
            We turn ideas into <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">digital</span>{" "}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">experiences</span>
            <br />
            people remember.
          </h1>
          <p className="max-w-lg text-[0.96rem] leading-7 text-slate-300 sm:text-[1rem]">
            Boutique design agency helping bold teams launch brands, websites,
            and product journeys that convert with clarity.
          </p>

          <div className="flex flex-wrap gap-3 pt-1.5">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#d946ef,#3b82f6)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.25)] transition-transform duration-200 hover:-translate-y-1"
            >
              View Work
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Get Started
            </a>
          </div>

          <div className="grid max-w-[26rem] grid-cols-3 gap-0 overflow-hidden rounded-2xl border border-white/8 bg-white/5 shadow-lg shadow-black/20">
            <div className="border-r border-white/8 px-5 py-4">
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="mt-1 text-xs text-slate-400">Projects Done</p>
            </div>
            <div className="border-r border-white/8 px-5 py-4">
              <p className="text-2xl font-bold text-white">30+</p>
              <p className="mt-1 text-xs text-slate-400">Happy Clients</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-2xl font-bold text-white">5+</p>
              <p className="mt-1 text-xs text-slate-400">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center pt-2 lg:pt-0">
          <div className="relative w-full max-w-[640px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,10,26,0.95),rgba(2,6,23,0.98))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.32)] sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(59,130,246,0.14),transparent_26%),radial-gradient(circle_at_48%_50%,rgba(217,70,239,0.14),transparent_34%)]" />
            <Image
              src="/newimage.png"
              alt="Weboin Technologies artwork"
              width={900}
              height={725}
              priority
              className="relative h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
