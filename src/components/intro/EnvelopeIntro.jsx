import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EnvelopeIntro({
  coupleName,
  subtitle,
  onComplete,
  bg,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isOpening, setIsOpening] = useState(false);
  const [isCardRevealed, setIsCardRevealed] = useState(false);
  const [isCardFloating, setIsCardFloating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isOpening) {
      setIsCardRevealed(false);
      setIsCardFloating(false);
      return undefined;
    }

    const revealDelay = shouldReduceMotion ? 0 : 810;
    const floatDelay = shouldReduceMotion ? 0 : 1400;
    const revealTimer = window.setTimeout(() => {
      setIsCardRevealed(true);
    }, revealDelay);
    const floatTimer = window.setTimeout(() => {
      setIsCardFloating(true);
    }, floatDelay);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(floatTimer);
    };
  }, [isOpening, shouldReduceMotion]);

  useEffect(() => {
    if (!isOpening) {
      return undefined;
    }

    const dismissDelay = shouldReduceMotion ? 260 : 5000;
    const completeDelay = shouldReduceMotion ? 320 : 5480;

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
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ivory/96 px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${bg}')`,
            }}
          />
          <div className="absolute inset-0 bg-aura" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.44)_44%,transparent_45%)]" />

          <motion.button
            type="button"
            onClick={handleOpen}
            className="relative z-10 flex flex-col items-center gap-8 text-center"
            animate={
              !isOpening && !shouldReduceMotion ? { y: [0, -10, 0] } : { y: 0 }
            }
            transition={{
              duration: 4.8,
              repeat: isOpening || shouldReduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="space-y-4">
              <span className="gold-label">Wedding Invitation</span>
              <div>
                <h1 className="font-display text-4xl font-semibold tracking-[0.08em] text-mocha sm:text-5xl">
                  {coupleName}
                </h1>
                <p className="mt-3 font-display text-3xl italic text-stonewash sm:text-4xl">
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
                <div
                  className={`absolute left-1/2 top-6 h-[14.5rem] w-[78%] -translate-x-1/2 ${
                    isCardRevealed ? "z-50" : "z-10"
                  }`}
                >
                  <motion.div
                    className="h-full border border-mocha/15 bg-[#f8f5ef] px-7 py-8 shadow-soft"
                    initial={false}
                    animate={
                      isCardFloating
                        ? { y: -120, scale: 1.03, opacity: 1 }
                        : {
                            y: 34,
                            scale: 0.96,
                            opacity: isCardRevealed ? 1 : 0.2,
                          }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0.35 : 1.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      className="flex h-full flex-col justify-between border border-mocha/15 bg-[#f4f1ea] px-5 py-6"
                      onClick={() => {
                        setIsVisible(false);
                        onComplete?.();
                      }}
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-stonewash">
                        Join Us
                      </p>
                      <div>
                        <p className="font-display text-3xl font-semibold tracking-[0.08em] text-mocha">
                          {coupleName}
                        </p>
                        <p className="mt-2 font-display text-3xl italic text-latte">
                          Save the date
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 bottom-[7.215rem] z-30 h-32 w-[95%] -translate-x-1/2 ">
                  <motion.div
                    className="m-auto h-full w-[97%] bg-[#d8d1c4] shadow-card"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 88%)",
                      transformPerspective: 1200,
                      transformOrigin: "50% 0%",
                    }}
                    initial={false}
                    animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.3 : 1.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>

                <div className="absolute inset-x-3 bottom-0 z-20 h-[15.25rem] border border-mocha/15 bg-[#ded7ca] shadow-soft" />
                <div
                  className="absolute bottom-0 left-3 z-20 h-[15.25rem] w-[50%] bg-[#cfc7b9]"
                  style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                />
                <div
                  className="absolute bottom-0 right-3 z-20 h-[15.25rem] w-[50%] bg-[#d7d0c3]"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                />

                <div className="absolute left-1/2 top-[10.2rem] z-40 h-16 w-16 -translate-x-1/2">
                  <motion.div
                    style={{
                      backgroundImage: `url('assets/images/ol.png')`,
                    }}
                    className="flex h-full w-full items-center justify-center border-none bg-cover "
                    initial={false}
                    animate={
                      isOpening
                        ? { opacity: 0, scale: 0.75, y: -8 }
                        : { opacity: 1, scale: 1, y: 0 }
                    }
                    transition={{ duration: 0.45 }}
                  ></motion.div>
                </div>
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
