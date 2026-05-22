import Reveal from "../common/Reveal";
import { resolveAssetPath } from "../../lib/asset";

export default function ContactSection({ contacts }) {
  return (
    <section className="relative flex items-center overflow-hidden py-16 sm:py-20 lg:min-h-[100svh]">
      <img
        src={resolveAssetPath(contacts.backgroundImage)}
        alt={contacts.backgroundAlt}
        className="absolute inset-0 h-full w-full object-cover object-[50%_42%] contrast-110 saturate-[0.72]"
      />
      <div className="absolute inset-0 bg-pine/58 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/24 via-black/16 to-black/50" />

      <div className="section-shell relative z-10 space-y-12 text-ivory">
        <Reveal className="max-w-3xl">
          <span className="inline-flex border-b border-ivory/70 pb-1 text-[0.7rem] uppercase tracking-[0.34em] text-ivory/78">
            {contacts.eyebrow}
          </span>
          <h2 className="mt-6 font-display text-2xl font-medium italic leading-[0.95] text-ivory sm:text-6xl lg:text-3xl">
            {contacts.title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ivory/78 sm:text-base">
            {contacts.description}
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {contacts.items.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.06}
              className="border border-ivory/24 bg-black/25 p-6 shadow-card backdrop-blur-[2px] sm:p-7"
            >
              <div className="flex h-full flex-col gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/35 bg-ivory font-display text-xl text-pine shadow-card">
                  {item.ig.charAt(1).toUpperCase() || "-"}
                </div>
                <div className="space-y-2">
                  <p className="font-display tracking-[0.1em] text-xl font-medium">
                    {item.label}
                  </p>
                  <p className="text-lg text-ivory">{item.mobile}</p>
                  <p className="font-display text-lg text-ivory/62 italic text-ivory">
                    {item.ig}
                  </p>
                </div>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-auto inline-flex w-fit border border-ivory/35 bg-ivory/10 px-5 py-3 text-xs uppercase tracking-[0.24em] text-ivory hover:border-ivory hover:bg-ivory hover:text-pine"
                >
                  Contact
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
