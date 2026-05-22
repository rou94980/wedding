import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function EnvelopeIntro({
  coupleName,
  subtitle,
  onComplete,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isOpening) {
      return undefined;
    }

    const dismissDelay = shouldReduceMotion ? 260 : 2200;
    const completeDelay = shouldReduceMotion ? 320 : 2480;

    const dismissTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, dismissDelay);

    const completeTimer = window.setTimeout(() => {
      onComplete?.();
    }, completeDelay);

    return () => {
      window.clearTimeout(dismissTimer);
      window.clearTimeout(completeTimer);
    };
  }, [isOpening, onComplete, shouldReduceMotion]);

  const handleOpen = () => {
    if (!isOpening) {
      setIsOpening(true);
    }
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ivory/95 px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <div className="absolute inset-0 bg-aura" />
          <div className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-white/60 blur-3xl" />
          <div className="absolute bottom-16 right-0 h-72 w-72 rounded-full bg-oat/55 blur-3xl" />

          <motion.button
            type="button"
            onClick={handleOpen}
            className="relative z-10 flex flex-col items-center gap-8 text-center"
            animate={
              !isOpening && !shouldReduceMotion
                ? { y: [0, -10, 0] }
                : { y: 0 }
            }
            transition={{
              duration: 4.8,
              repeat: isOpening || shouldReduceMotion ? 0 : Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="space-y-4">
              <span className="gold-label">Wedding Invitation</span>
              <div>
                <h1 className="font-display text-4xl font-semibold tracking-[0.08em] text-mocha sm:text-5xl">
                  {coupleName}
                </h1>
                <p className="mt-3 font-script text-3xl text-latte sm:text-4xl">
                  {subtitle}
                </p>
              </div>
            </div>

            <div className="relative h-80 w-[20rem] max-w-full animate-float sm:h-[22rem] sm:w-[24rem]">
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={isOpening ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="absolute left-1/2 top-6 z-10 h-[14.5rem] w-[78%] -translate-x-1/2 rounded-[1.9rem] bg-white px-7 py-8 shadow-soft"
                  initial={false}
                  animate={
                    isOpening
                      ? { y: -118, scale: 1.03, opacity: 1 }
                      : { y: 34, scale: 0.96, opacity: 0.98 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.35 : 1.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-oat/70 bg-gradient-to-b from-white to-cream/55 px-5 py-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-stonewash">
                      Join Us
                    </p>
                    <div>
                      <p className="font-display text-3xl font-semibold tracking-[0.08em] text-mocha">
                        {coupleName}
                      </p>
                      <p className="mt-2 font-script text-3xl text-latte">
                        Save the date
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-stonewash">
                      Tap the envelope and step into our day.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute left-1/2 top-0 z-30 h-32 w-[92%] -translate-x-1/2 rounded-t-[2.2rem] bg-[#f5ebdc] shadow-card"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 88%)',
                    transformPerspective: 1200,
                  }}
                  initial={false}
                  animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 1.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <div className="absolute inset-x-3 bottom-0 h-[15.25rem] rounded-[2.25rem] bg-[#efe4d3] shadow-soft" />
                <div
                  className="absolute bottom-0 left-3 h-[15.25rem] w-[50%] rounded-bl-[2.25rem] bg-[#e7dac7]"
                  style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
                />
                <div
                  className="absolute bottom-0 right-3 h-[15.25rem] w-[50%] rounded-br-[2.25rem] bg-[#eadfcd]"
                  style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                />

                <motion.div
                  className="absolute left-1/2 top-[10.2rem] z-40 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-white/75 bg-white/90 font-display text-lg tracking-[0.22em] text-latte shadow-card"
                  initial={false}
                  animate={
                    isOpening
                      ? { opacity: 0, scale: 0.75, y: -8 }
                      : { opacity: 1, scale: 1, y: 0 }
                  }
                  transition={{ duration: 0.45 }}
                >
                  B C
                </motion.div>
              </motion.div>
            </div>

            <motion.p
              className="text-xs uppercase tracking-[0.36em] text-stonewash"
              animate={
                isOpening || shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: [0.4, 1, 0.4] }
              }
              transition={{
                duration: 2.6,
                repeat: isOpening || shouldReduceMotion ? 0 : Infinity,
              }}
            >
              Tap to open
            </motion.p>
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

