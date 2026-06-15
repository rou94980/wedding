import { motion } from "framer-motion";
import { useState } from "react";
import { resolveAssetPath } from "../../lib/asset";
import Reveal from "../common/Reveal";

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

export default function GallerySection({ gallery, contacts }) {
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
      <section className="max-w-6xl px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24 mx-auto">
        <div className="overflow-hidden pb-14 sm:pb-16">
          <div className="gallery-carousel-track gap-3 sm:gap-4">
            {carouselLoop.map((photo, index) => (
              <motion.button
                key={`${photo.id}-${index}`}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`Open photo ${photo.title}`}
                className="group gallery-carousel-cell overflow-hidden bg-pine"
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

        <div className="px-6 sm:px-10 lg:px-16 py-24 text-center bg-[#fbfaf5]">
          <h3 className="font-display text-4xl font-medium italic leading-none text-mocha sm:text-5xl">
            Contact
            <br />
            <span className="text-lg text-stonewash">
              如有任何需求或其他問題，歡迎隨時聯繫我們。
            </span>
          </h3>
          <div className="mx-auto max-w-4xl pt-10 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-mocha/18">
            {contacts.items.map((item, index) => (
              <div key={index} className="flex-1 px-3 py-8 text-center">
                <p className="font-display text-xl italic text-mocha">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-mocha">{item.mobile}</p>
                <p className="mt-2 text-sm text-mocha">{item.ig}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function RevealText({ gallery, contacts }) {
  return (
    <motion.div
      className="max-w-sm self-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="gold-label">{contacts.eyebrow}</span>
      {/* <h2 className="mt-6 font-display text-4xl font-medium italic leading-[0.95] text-mocha sm:text-5xl">
        {contacts.title}
      </h2> */}
      <p className="text-lg text-mocha mt-3 mb-5">{contacts.description}</p>
      <div>
        {contacts.items.map((item, index) => (
          <div key={index} className="mt-6">
            <p className="text-xl text-mocha leading-8">
              <span className="text-stonewash text-sm mr-3 mb-auto">新郎</span>
              {item.label}
            </p>
            <div className="text-sm text-stonewash">
              <span>{item.mobile}</span>
              <span className="ml-7">{item.ig}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-12 border border-mocha/25 px-5 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-mocha"
      >
        座位查詢
      </button>
    </motion.div>
  );
}
