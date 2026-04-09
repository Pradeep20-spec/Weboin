import Image from "next/image";

type Service = {
  icon: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    icon: "✦",
    title: "UI/UX Design",
    description:
      "Human-centered interfaces, rapid prototyping, and conversion-minded user flows.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
    alt: "Designer working on UI wireframes and visual prototypes",
  },
  {
    icon: "⌘",
    title: "Web Development",
    description:
      "Fast, scalable websites built with modern stacks and clean maintainable code.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer coding a modern web application",
  },
  {
    icon: "◉",
    title: "Branding",
    description:
      "Brand strategy, identity systems, and visual direction that stands apart.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    alt: "Brand identity design materials on a creative desk",
  },
  {
    icon: "↗",
    title: "Digital Marketing",
    description:
      "Campaign pages and performance content designed to attract and convert traffic.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital marketing analytics dashboard on screen",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(5,10,26,0.98),rgba(4,8,21,0.98))] px-5 py-5 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-cyan-300">
          Services
          </p>
          <h2 className="mt-3 max-w-md text-[2rem] font-black leading-tight text-white sm:text-[2.5rem]">
          End-to-end creative execution
          </h2>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="animate-reveal group relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.88),rgba(10,15,30,0.96))] p-0 shadow-[0_10px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_20px_55px_rgba(56,189,248,0.18)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1200}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />
              </div>

              <div className="p-5">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(124,58,237,0.95),rgba(59,130,246,0.95))] text-base font-bold text-white shadow-lg shadow-indigo-950/30">
                  {service.icon}
                </div>
                <h3 className="text-[1.08rem] font-semibold text-white">{service.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
