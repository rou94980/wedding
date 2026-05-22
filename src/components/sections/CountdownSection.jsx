import Reveal from '../common/Reveal';
import { useCountdown } from '../../hooks/useCountdown';
import { resolveAssetPath } from '../../lib/asset';

export default function CountdownSection({ countdown }) {
  const timeLeft = useCountdown(countdown.target);
  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative flex items-center overflow-hidden py-16 sm:py-20 lg:min-h-[100svh]">
      <img
        src={resolveAssetPath(countdown.backgroundImage)}
        alt={countdown.backgroundAlt}
        className="absolute inset-0 h-full w-full object-cover object-center contrast-110 saturate-[0.74]"
      />
      <div className="absolute inset-0 bg-pine/72 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/42" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/32 via-black/18 to-black/68" />

      <div className="section-shell relative z-10 text-ivory">
        <Reveal className="mx-auto max-w-4xl border border-ivory/28 bg-black/34 px-6 py-10 text-center shadow-soft backdrop-blur-[2px] sm:px-12 sm:py-14">
          <span className="inline-flex border-b border-ivory/70 pb-1 text-[0.7rem] uppercase tracking-[0.34em] text-ivory/78">
            {countdown.eyebrow}
          </span>
          <h2 className="mt-6 font-display text-5xl font-medium italic leading-[0.95] text-ivory sm:text-6xl">
            {countdown.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ivory/78 sm:text-base">
            {countdown.description}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {items.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.06}
                className="border border-ivory/24 bg-ivory/10 px-4 py-6 text-center shadow-card"
              >
                <p className="font-display text-4xl font-semibold tracking-[0.08em] text-ivory sm:text-5xl">
                  {String(item.value).padStart(2, '0')}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.28em] text-ivory/66">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
