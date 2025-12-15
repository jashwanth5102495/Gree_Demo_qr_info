import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function GreenGram() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-12 sm:pt-14 pb-6 sm:pb-8">
      <BackgroundVideo />
      <div className="fixed inset-0 -z-20 bg-black/35 pointer-events-none"></div>
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-60 blur-2xl pointer-events-none"></div>
      <IntroOverlay />
      <ProductCard
        brandName=""
        companyName="Green Plant Technologies"
        logoSrc="/vib.mp4"
        productName=""
        gazette="S.O.3922(E), Dated 12-9-2024"
        title="Potassium humate 49% (Powder)"
        composition={[
          'Humic Acid percent by weight minimum: 10.0',
          'Fulvic Acid percent by weight minimum: 2.5',
          'pH (10% aqueous solution): 12–14',
          'Specific Gravity: 1.0–1.20',
        ]}
        crops="Green Gram"
        dosage="Two soil application at 5L/ha"
      />
    </div>
  );
}