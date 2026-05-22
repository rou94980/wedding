import Reveal from "../common/Reveal";
import { resolveAssetPath } from "../../lib/asset";

export default function InfoSection({ event }) {
  const items = [
    { label: event.dateLabel, value: event.date },
    { label: event.venueLabel, value: event.venue },
    { label: event.timeLabel, value: event.time },
    {
      label: event.addressLabel,
      value: event.address,
      tips: event.addressTips,
    },
  ];

  return (
    <section
      id="wedding-info"
      className="flex items-center py-12 sm:py-14 lg:min-h-[100svh]"
    >
      <div className="section-shell">
        <Reveal className="border border-mocha/10 bg-[#f7f4ed] px-6 py-8 shadow-card sm:px-10 lg:px-16 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-[20rem] lg:mx-0">
              <img
                src={resolveAssetPath(event.image)}
                alt={event.imageAlt}
                className="aspect-[3/4] w-full object-cover object-[50%_38%] contrast-110 saturate-[0.76]"
              />
              <div className="absolute inset-0 bg-pine/10 mix-blend-multiply" />
            </div>

            <div className="space-y-6">
              <span className="gold-label">{event.eyebrow}</span>
              <div className="flex flex-wrap">
                <div className="w-full flex items-center gap-3 mb-4">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#fff] border border-mocha"></div>
                  <div className="w-[30px] h-[30px] rounded-full bg-mocha"></div>
                  <div className="w-[30px] h-[30px] rounded-full bg-mocha"></div>
                  <div className="w-[30px] h-[30px] rounded-full bg-mocha"></div>
                  <div className="w-[30px] h-[30px] rounded-full bg-mocha"></div>
                </div>
                <div className="">
                  <p className="text-sm italic leading-7 text-stonewash">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-x-8 gap-y-4 border-t border-mocha/15 pt-6 sm:grid-cols-2">
                {items.map((item, index) => (
                  <Reveal key={item.label} delay={index * 0.06}>
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-stonewash">
                      {item.label}
                    </p>
                    <p className="mt-2 font-display text-xl font-semibold leading-snug tracking-[0.02em] text-mocha sm:text-xl">
                      {item.value}
                    </p>
                    {item.tips && (
                      <p className="mt-2 text-base text-mocha">{item.tips}</p>
                    )}
                  </Reveal>
                ))}
              </div>

              <p className="max-w-md text-sm leading-7 text-stonewash">
                - 因場地有沙灘造景，提醒您避免穿著深色鞋子以免弄髒您的愛鞋 ​​
                <br />- 當天提供位上西餐，請您依照指示入座，以便供餐順利
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
