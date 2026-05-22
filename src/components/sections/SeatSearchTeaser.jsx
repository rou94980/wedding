import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal';

export default function SeatSearchTeaser({ seatSearch }) {
  return (
    <section className="pb-24 pt-6 sm:pb-32">
      <div className="section-shell">
        <Reveal className="overflow-hidden border border-mocha/10 bg-[#f7f4ed] px-6 py-10 shadow-soft sm:px-12 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end">
            <div className="space-y-5">
              <span className="gold-label">{seatSearch.status}</span>
              <div className="space-y-4">
                <h2 className="font-display text-4xl font-medium italic text-mocha sm:text-5xl">
                  {seatSearch.title}
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-stonewash sm:text-base">
                  {seatSearch.description}
                </p>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <Link
                to="/seat-search"
                className="inline-flex w-full items-center justify-center border border-mocha/20 bg-ivory px-7 py-4 text-xs uppercase tracking-[0.28em] text-mocha shadow-card hover:border-pine hover:bg-pine hover:text-ivory sm:w-auto"
              >
                {seatSearch.buttonLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
