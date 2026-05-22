import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

export default function InfoSection({ event }) {
  const items = [
    { label: event.dateLabel, value: event.date },
    { label: event.timeLabel, value: event.time },
    { label: event.venueLabel, value: event.venue },
    { label: event.addressLabel, value: event.address },
  ];

  return (
    <section id="wedding-info" className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal className="space-y-10">
          <SectionHeading
            eyebrow={event.eyebrow}
            title={event.title}
            description={event.description}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.06}
                className="frost-card p-6 sm:p-7"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-stonewash">
                  {item.label}
                </p>
                <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-[0.04em] text-mocha">
                  {item.value}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

