import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function PowerGold() {
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
        title="Humic Acid 51 % (Granular)"
        composition={[
          'Humic Acid per cent. by weight minimum : 51',
          'Fulvic Acid percent. by weight minimum : 10',
          'pH (1 % aqueous solution) : 10 - 12',
          'Bulk Density (25°C) g/cc : 0.5 - 0.70',
        ]}
        crops="Green Gram"
        dosage="Two soil applications at 1.5 kg/ha"
      />
    </div>
  );
}