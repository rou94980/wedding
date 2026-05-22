import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

export default function ContactSection({ contacts }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow={contacts.eyebrow}
          title={contacts.title}
          description={contacts.description}
        />

        <div className="grid gap-4 md:grid-cols-3">
          {contacts.items.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.06}
              className="frost-card p-6 sm:p-7"
            >
              <div className="flex h-full flex-col gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-white/85 font-display text-xl text-latte shadow-card">
                  {item.label.charAt(0)}
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.26em] text-stonewash">
                    {item.label}
                  </p>
                  <p className="font-display text-2xl font-semibold tracking-[0.04em] text-mocha">
                    {item.value}
                  </p>
                </div>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="mt-auto inline-flex w-fit rounded-full border border-latte/35 bg-white/80 px-5 py-3 text-xs uppercase tracking-[0.24em] text-mocha hover:border-gold/60 hover:text-latte"
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

