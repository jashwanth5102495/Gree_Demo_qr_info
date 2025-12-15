import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function BioGold() {
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
        title="Sea Weed Extract of Ascophyllum nodosum 15% (Liquid)"
        composition={[
          'Alginic Acid percent. by weight, minimum : 1.5',
          'Mannitol percent. by weight, minimum : 1.0',
          'pH (10% aqueous solution) : 4.7 +- 1.0',
          'Specific gravity : 1.0 - 1.1',
          'Total organic carbon per cent. by weight, minimum : 5',
        ]}
        crops="Green Gram"
        dosage="Two foliar applications at 1.5 l/ha"
      />
    </div>
  );
}