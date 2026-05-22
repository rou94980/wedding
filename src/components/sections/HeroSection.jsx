import { motion } from 'framer-motion';
import { resolveAssetPath } from '../../lib/asset';

function SingleHero({ image, alt }) {
  return (
    <div className="absolute inset-0">
      <img
        src={resolveAssetPath(image)}
        alt={alt}
        className="h-full w-full object-cover object-[74%_center] sm:object-[70%_center] lg:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/5 via-white/10 to-stone-900/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory/70 via-transparent to-transparent" />
    </div>
  );
}

function TriptychHero({ images }) {
  return (
    <div className="absolute inset-0 bg-cream/80 p-3 sm:p-5">
      <div className="grid h-full grid-cols-3 gap-3 overflow-hidden rounded-[2.25rem] bg-white/60">
        {images.map((item) => (
          <div key={item.src} className="relative overflow-hidden">
            <img
              src={resolveAssetPath(item.src)}
              alt={item.alt}
              className="h-full w-full object-cover"
              style={{ objectPosition: item.objectPosition || 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/18" />
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
      {activeVariant.type === 'triptych' ? (
        <TriptychHero images={activeVariant.images} />
      ) : (
        <SingleHero image={activeVariant.image} alt={activeVariant.alt} />
      )}

      <div className="section-shell relative z-10 flex min-h-[100svh] items-end pb-14 pt-24 sm:pb-16 lg:items-center lg:pb-20">
        <motion.div
          className="max-w-md rounded-[2rem] border border-white/60 bg-white/28 p-7 shadow-soft backdrop-blur-md sm:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="gold-label">{couple.kicker}</span>
          <div className="mt-6 space-y-5">
            <h1 className="font-display text-5xl font-semibold uppercase tracking-[0.12em] text-mocha sm:text-6xl lg:text-7xl">
              {couple.displayName}
            </h1>
            <p className="font-script text-4xl text-latte sm:text-5xl">
              {couple.scriptSubtitle}
            </p>
            <p className="max-w-sm text-sm leading-7 text-mocha/80 sm:text-base">
              {hero.description}
            </p>
          </div>
        </motion.div>
      </div>

      <a
        href="#wedding-info"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.72rem] uppercase tracking-[0.3em] text-white/88"
      >
        <span>{hero.scrollHint}</span>
        <span className="flex h-12 w-7 items-start justify-center rounded-full border border-white/60 p-1">
          <span className="h-3 w-1 rounded-full bg-white/90 animate-pulseSoft" />
        </span>
      </a>
    </section>
  );
}

