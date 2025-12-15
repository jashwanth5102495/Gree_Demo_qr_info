import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function Genik() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-12 sm:pt-14 pb-6 sm:pb-8">
      <BackgroundVideo />
      {/* Subtle overlays for readability */}
      <div className="fixed inset-0 -z-20 bg-black/35 pointer-events-none"></div>
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-60 blur-2xl pointer-events-none"></div>

      <IntroOverlay />
      <ProductCard
        brandName=""
        companyName="Green Plant Technologies"
        logoSrc="/vib.mp4"
        productName=""
        gazette="S.O.3922(E), Dated 12-9-2024"
        title="Sea Weed Extract of Sargassum tenerrimum 10% (Liquid)"
        composition={[
          'Alginic Acid per cent.by weight minimum : 2.0',
          'pH (1:2 aqueous solution) : 8 - 10',
          'Organic matter (dry mass basis) per cent. by weight,minimum : 20',
        ]}
        crops="Paddy"
        dosage="One foliar application at 625 ml/ha"
      />
    </div>
  );
}