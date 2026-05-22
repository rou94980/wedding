import { motion } from "framer-motion";
import { resolveAssetPath } from "../../lib/asset";

function SingleHero({ image, alt }) {
  return (
    <div className="absolute inset-0 bg-pine">
      <img
        src={resolveAssetPath(image)}
        alt={alt}
        className="h-full w-full object-cover object-[50%_55%] contrast-110 saturate-[0.74]"
      />
      <div className="absolute inset-0 bg-pine/28 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/12 to-black/58" />
    </div>
  );
}

function TriptychHero({ images }) {
  return (
    <div className="absolute inset-0 bg-pine p-3 sm:p-5">
      <div className="grid h-full grid-cols-3 gap-3 overflow-hidden">
        {images.map((item) => (
          <div key={item.src} className="relative overflow-hidden">
            <img
              src={resolveAssetPath(item.src)}
              alt={item.alt}
              className="h-full w-full object-cover"
              style={{ objectPosition: item.objectPosition || "center" }}
            />
            <div className="absolute inset-0 bg-pine/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/48" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection({ couple, hero }) {
  const activeVariant = hero.variants[hero.activeVariant];

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {activeVariant.type === "triptych" ? (
        <TriptychHero images={activeVariant.images} />
      ) : (
        <SingleHero image={activeVariant.image} alt={activeVariant.alt} />
      )}

      <div className="section-shell relative z-10 flex min-h-[100svh] items-end pb-20 pt-24 sm:pb-24">
        <motion.div
          className="mx-auto max-w-4xl text-center text-ivory"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex border-b border-ivory/70 pb-1 text-[0.7rem] uppercase tracking-[0.34em] text-ivory/82">
            {couple.kicker}
          </span>
          <h1 className="mt-8 font-display text-5xl font-medium italic leading-[0.92] text-ivory drop-shadow-[0_3px_24px_rgba(0,0,0,0.34)] sm:text-6xl lg:text-8xl">
            {couple.displayName}
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-ivory/82 sm:text-base">
            {hero.description}
          </p>
        </motion.div>
      </div>

      <a
        href="#wedding-info"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 text-[0.72rem] uppercase tracking-[0.3em] text-ivory/80 hover:text-ivory"
      >
        <span>{hero.scrollHint}</span>
        <span className="h-px w-12 bg-ivory/55" />
      </a>
    </section>
  );
}
