import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import { useCountdown } from '../../hooks/useCountdown';

export default function CountdownSection({ countdown }) {
  const timeLeft = useCountdown(countdown.target);
  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal className="frost-card overflow-hidden px-6 py-10 sm:px-12 sm:py-14">
          <div className="relative">
            <div className="absolute -right-10 top-0 h-36 w-36 rounded-full bg-white/45 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-oat/45 blur-3xl" />

            <div className="relative space-y-10">
              <SectionHeading
                eyebrow={countdown.eyebrow}
                title={countdown.title}
                description={countdown.description}
                align="center"
              />

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {items.map((item, index) => (
                  <Reveal
                    key={item.label}
                    delay={index * 0.06}
                    className="rounded-[1.6rem] border border-white/65 bg-white/80 px-4 py-6 text-center shadow-card"
                  >
                    <p className="font-display text-4xl font-semibold tracking-[0.08em] text-mocha sm:text-5xl">
                      {String(item.value).padStart(2, '0')}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.28em] text-stonewash">
                      {item.label}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

