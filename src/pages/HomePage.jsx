import { useEffect, useMemo, useState } from "react";
import EnvelopeIntro from "../components/intro/EnvelopeIntro";
import ContactSection from "../components/sections/ContactSection";
import CountdownSection from "../components/sections/CountdownSection";
import GallerySection from "../components/sections/GallerySection";
import HeroSection from "../components/sections/HeroSection";
import InfoSection from "../components/sections/InfoSection";
import SeatSearchTeaser from "../components/sections/SeatSearchTeaser";
import galleryData from "../data/gallery.json";
import siteData from "../data/site.json";

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(true);

  const gallery = useMemo(
    () => ({
      eyebrow: siteData.gallery.eyebrow,
      title: siteData.gallery.title,
      description: siteData.gallery.description,
      items: galleryData,
    }),
    [],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = introComplete ? "" : "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [introComplete]);

  useEffect(() => {
    document.title = siteData.meta.siteTitle;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", siteData.meta.siteDescription);
    }
  }, []);

  return (
    <>
      {/* <EnvelopeIntro
        coupleName={siteData.couple.displayName}
        subtitle={siteData.couple.scriptSubtitle}
        onComplete={() => setIntroComplete(true)}
        bg={siteData.hero.variants.single.image}
      /> */}

      <main className="relative overflow-hidden">
        <HeroSection couple={siteData.couple} hero={siteData.hero} />
        <InfoSection event={siteData.event} />
        <GallerySection gallery={gallery} contacts={siteData.contacts} />
      </main>
    </>
  );
}
