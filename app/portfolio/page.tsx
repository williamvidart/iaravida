import type { Metadata } from "next";
import MobileNav from "../components/MobileNav";
import PortfolioGrid from "../components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfólio | Iara Vida",
  description: "Obras de Iara Vida — aquarelas, telas, geotintas e murais.",
};

const fotos = [
  "/portfolio/IMG_0762.jpg",
  "/portfolio/our-story-medicine.jpg",
  "/portfolio/IMG_8939.jpg",
  "/portfolio/aba86080-9f89-11f0-92fe-51c137129a48.jpg",
  "/portfolio/IMG_9200.jpg",
  "/portfolio/IMG_5023.jpg",
  "/portfolio/IMG_0509.PNG",
  "/portfolio/IMG_0207.jpg",
  "/portfolio/IMG_1337.jpg",
  "/portfolio/IMG_8786.jpg",
  "/portfolio/IMG_5021.jpg",
  "/portfolio/IMG_8934.jpg",
  "/portfolio/IMG_4869.jpg",
  "/portfolio/IMG_6924.jpg",
  "/portfolio/IMG_5017.jpg",
  "/portfolio/IMG_8718.jpg",
  "/portfolio/IMG_8773.jpg",
  "/portfolio/IMG_8811.jpg",
  "/portfolio/IMG_5010.jpg",
  "/portfolio/IMG_0796.PNG",
  "/portfolio/canva4.png",
  "/portfolio/IMG_2841.jpg",
  "/portfolio/IMG_8650.jpg",
  "/portfolio/IMG_8790.jpg",
  "/portfolio/IMG_8940.jpg",
  "/portfolio/IMG_4895.jpg",
  "/portfolio/IMG_0766.jpg",
  "/portfolio/IMG_2748.jpg",
  "/portfolio/IMG_2752.jpg",
  "/portfolio/IMG_1557.jpg",
  "/portfolio/IMG_1349.jpg",
  "/portfolio/IMG_1481.jpg",
  "/portfolio/IMG_1547.jpg",
  "/portfolio/IMG_2754.jpg",
  "/portfolio/IMG_2805.jpg",
  "/portfolio/IMG_1560.jpg",
  "/portfolio/IMG_1726.JPG",
  "/portfolio/IMG_3938.jpg",
  "/portfolio/Terra.jpg",
  "/portfolio/IMG_6629.jpg",
];

export default function Portfolio() {
  return (
    <div className="flex flex-1 flex-col bg-creme">
      <div className="relative">
        <MobileNav />
        <div className="h-16" />
      </div>

      <div className="mx-auto w-full max-w-sm">
        {/* Title */}
        <div className="px-6 pt-8 pb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-terra/50">obras</p>
          <h1 className="font-grandenhas mt-1 text-5xl text-terra">Portfólio</h1>
        </div>

        <PortfolioGrid fotos={fotos} />
      </div>

      {/* Contato */}
      <footer className="bg-dark px-6 py-16 text-creme text-center">
        <img src="/logo-iara.png" alt="Iara Vida" className="mx-auto mb-8 h-24 w-auto" style={{ filter: "brightness(10) sepia(1) saturate(0)" }} />
        <div className="space-y-3 text-base">
          <a
            href="https://instagram.com/iaravidart"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-areia"
          >
            @iaravidart
          </a>
          <a
            href="mailto:contato@iaravida.com"
            className="block transition-colors hover:text-areia"
          >
            contato@iaravida.com
          </a>
          <a
            href="https://wa.me/5548988017788"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-areia"
          >
            (48) 98801-7788
          </a>
        </div>
      </footer>
    </div>
  );
}
