import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { resolveAssetPath } from '../../lib/asset';

export default function PhotoLightbox({ photo, onClose }) {
  useEffect(() => {
    if (!photo) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, photo]);

  return (
    <AnimatePresence>
      {photo ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 py-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#f8f5ef]"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-10 rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs uppercase tracking-[0.24em] text-mocha"
            >
              Close
            </button>

            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_20rem]">
              <div className="bg-[#ede6d8]">
                <img
                  src={resolveAssetPath(photo.src)}
                  alt={photo.alt}
                  className="max-h-[80vh] w-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-end gap-4 p-7 sm:p-9">
                <span className="gold-label">Photo Note</span>
                <h3 className="font-display text-3xl font-semibold tracking-[0.05em] text-mocha">
                  {photo.title}
                </h3>
                <p className="text-sm leading-7 text-stonewash sm:text-base">
                  {photo.caption}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

