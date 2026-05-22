import { motion } from "framer-motion";
import { useState } from "react";
import { resolveAssetPath } from "../../lib/asset";
import PhotoLightbox from "./PhotoLightbox";

const extraGalleryItems = Array.from({ length: 24 }, (_, index) => {
  const number = index + 12;

  return {
    id: `album-extra-${number}`,
    src: `assets/images/LINE_ALBUM_C_260522_${number}.jpg`,
    alt: `Benny and Cindy wedding photo ${number}.`,
    title: `Wedding Portrait ${number}`,
    caption: "A selected wedding portrait from the full album.",
    objectPosition: "center",
  };
});

const albumPhoto = (number, title, objectPosition = "center") => ({
  id: `album-feature-${number}`,
  src: `assets/images/LINE_ALBUM_C_260522_${number}.jpg`,
  alt: `Benny and Cindy wedding photo ${number}.`,
  title,
  caption: "A selected wedding portrait from the full album.",
  objectPosition,
});

export default function GallerySection({ gallery }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const allPhotos = [...gallery.items, ...extraGalleryItems];
  const pick = (...indexes) =>
    indexes.map((index) => allPhotos[index]).filter(Boolean);
  const topStrip = [
    albumPhoto(20, "Studio Veil", "center top"),
    albumPhoto(26, "Classic Studio", "center top"),
    albumPhoto(35, "Soft Light", "center top"),
  ];
  const feature = albumPhoto(24, "Studio Portrait", "center top");
  const carouselPhotos = [
    ...[
      albumPhoto(13, "Studio Veil", "center top"),
      albumPhoto(21, "Classic Studio", "center top"),
      albumPhoto(22, "Editorial Portrait", "center top"),
      albumPhoto(23, "Quiet Studio", "center top"),
      albumPhoto(24, "Studio Portrait", "center top"),
      albumPhoto(25, "Fine Portrait", "center top"),
    ],
    ...pick(7, 5, 6, 8, 9, 10),
    ...extraGalleryItems,
  ];
  const carouselLoop = [...carouselPhotos, ...carouselPhotos];
  const experiences = [
    { number: "1.", label: "Ceremony" },
    { number: "2.", label: "Banquet" },
    { number: "3.", label: "Memories" },
  ];

  return (
    <>
      <section className="bg-[#f7f4ed] py-16 sm:py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-5xl bg-[#fbfaf5] shadow-soft">
            <div className="grid h-64 grid-cols-3 overflow-hidden sm:h-80">
              {topStrip.map((photo, index) => (
                <motion.button
                  key={photo.id}
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  aria-label={`Open photo ${photo.title}`}
                  className="group relative overflow-hidden bg-pine"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                >
                  <img
                    src={resolveAssetPath(photo.src)}
                    alt={photo.alt}
                    className="h-full w-full object-cover contrast-110 saturate-[0.68] transition duration-700 group-hover:scale-[1.035]"
                    style={{ objectPosition: photo.objectPosition || "center" }}
                  />
                  <div className="absolute inset-0 bg-pine/18 mix-blend-multiply" />
                </motion.button>
              ))}
            </div>

            <div className="grid gap-5 px-6 py-12 sm:px-12 lg:grid-cols-[0.9fr_1fr] lg:px-16 lg:py-16 ">
              <RevealText gallery={gallery} />

              <motion.button
                type="button"
                onClick={() => setSelectedPhoto(feature)}
                aria-label={`Open photo ${feature.title}`}
                className="group justify-self-center overflow-hidden bg-pine shadow-card lg:justify-self-end"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={resolveAssetPath(feature.src)}
                  alt={feature.alt}
                  className="aspect-[4/5] w-full max-w-[22rem] object-cover contrast-110 saturate-[0.7] transition duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: feature.objectPosition || "center" }}
                />
              </motion.button>
            </div>

            <div className="px-6 pb-12 sm:px-12 lg:px-0 ">
              <div className="overflow-hidden bg-[#f7f4ed] p-3 sm:p-4">
                <div className="gallery-carousel-track gap-3 sm:gap-4">
                  {carouselLoop.map((photo, index) => (
                    <motion.button
                      key={`${photo.id}-${index}`}
                      type="button"
                      onClick={() => setSelectedPhoto(photo)}
                      aria-label={`Open photo ${photo.title}`}
                      className="group gallery-carousel-cell overflow-hidden bg-pine shadow-card"
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.75, delay: (index % 6) * 0.05 }}
                    >
                      <img
                        src={resolveAssetPath(photo.src)}
                        alt={photo.alt}
                        className="aspect-[3/4] w-full object-cover contrast-110 saturate-[0.72] transition duration-700 group-hover:scale-[1.035]"
                        style={{
                          objectPosition: photo.objectPosition || "center",
                        }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 pb-14 text-center sm:px-12 lg:px-16 ">
              <h3 className="font-display text-4xl font-medium italic leading-none text-mocha sm:text-5xl">
                Choose your
                <br />
                experience
              </h3>
              <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 divide-x divide-mocha/18 ">
                {experiences.map((item) => (
                  <div key={item.label} className="px-3">
                    <p className="font-display text-2xl italic text-mocha">
                      {item.number}
                    </p>
                    <p className="mt-2 text-[0.62rem] uppercase tracking-[0.22em] text-stonewash">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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

function RevealText({ gallery }) {
  return (
    <motion.div
      className="max-w-sm self-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="gold-label">{gallery.eyebrow}</span>
      <h2 className="mt-6 font-display text-4xl font-medium italic leading-[0.95] text-mocha sm:text-5xl">
        Capturing your
        <br />
        magic moment
      </h2>
      <p className="mt-5 text-sm leading-7 text-stonewash">
        {gallery.description}
      </p>
      <button
        type="button"
        className="mt-6 border border-mocha/25 px-5 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-mocha"
      >
        Gallery
      </button>
    </motion.div>
  );
}
