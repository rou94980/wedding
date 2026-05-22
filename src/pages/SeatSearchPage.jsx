import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import siteData from '../data/site.json';

export default function SeatSearchPage() {
  useEffect(() => {
    document.title = 'Benny & Cindy | Seat Search';
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-8 sm:py-14">
      <div className="absolute left-[-6rem] top-10 h-56 w-56 rounded-full bg-white/55 blur-3xl" />
      <div className="absolute bottom-0 right-[-5rem] h-72 w-72 rounded-full bg-oat/40 blur-3xl" />

      <div className="section-shell relative flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div className="frost-card w-full max-w-3xl p-8 sm:p-12">
          <span className="gold-label">{siteData.seatSearch.status}</span>

          <div className="mt-8 space-y-5">
            <h1 className="font-display text-4xl font-semibold tracking-[0.06em] text-mocha sm:text-5xl">
              Seat Search Placeholder
            </h1>
            <p className="text-sm leading-7 text-stonewash sm:text-base">
              這個頁面已預留 React Router 路由、版型與擴充位置。第二階段可直接接入座位查詢表單、賓客名單 JSON 或 API。
            </p>
          </div>

          <div className="mt-10 grid gap-4 rounded-[1.7rem] border border-white/65 bg-white/75 p-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-stonewash">
                Route
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-mocha">
                /seat-search
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-stonewash">
                Phase
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-mocha">
                Stage 2
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-stonewash">
                Status
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-mocha">
                Reserved
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-latte/35 bg-white/85 px-6 py-3 text-xs uppercase tracking-[0.24em] text-mocha hover:border-gold/60 hover:text-latte"
            >
              Back to Home
            </Link>
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-white/70 bg-white/55 px-6 py-3 text-xs uppercase tracking-[0.24em] text-stonewash"
            >
              Search Form Coming Soon
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
