import { motion } from 'framer-motion';
import { useState } from 'react';
import { resolveAssetPath } from '../../lib/asset';
import SectionHeading from '../common/SectionHeading';
import PhotoLightbox from './PhotoLightbox';

const offsetClasses = {
  none: '',
  soft: 'sm:mt-8',
  lifted: 'sm:mt-14',
};

export default function GallerySection({ gallery }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="section-shell space-y-12">
          <SectionHeading
            eyebrow={gallery.eyebrow}
            title={gallery.title}
            description={gallery.description}
          />

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {gallery.items.map((photo, index) => (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`Open photo ${photo.title}`}
                className={`group mb-5 block w-full break-inside-avoid text-left ${offsetClasses[photo.offset] || ''}`}
                initial={{ opacity: 0, y: 34, rotate: photo.rotation || 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: photo.rotation || 0 }}
                whileHover={{ y: -6, rotate: (photo.rotation || 0) * 0.5 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="overflow-hidden rounded-[1.8rem] border border-white/75 bg-white/90 p-3 shadow-card">
                  <div className="overflow-hidden rounded-[1.35rem] bg-oat/60">
                    <img
                      src={resolveAssetPath(photo.src)}
                      alt={photo.alt}
                      className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                      style={{ objectPosition: photo.objectPosition || 'center' }}
                    />
                  </div>

                  <div className="px-2 pb-2 pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold tracking-[0.04em] text-mocha">
                        {photo.title}
                      </h3>
                      <span className="text-[0.68rem] uppercase tracking-[0.28em] text-stonewash">
                        Tap
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-stonewash">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <PhotoLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </>
  );
}
