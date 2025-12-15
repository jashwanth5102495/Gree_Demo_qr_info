import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function Okra() {
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
        title="Mixture of Humic Acid, Amino Acid, Vitamins and Bio-chemicals (powder) – Soil Application"
        composition={[
          'Humic Acid percent. by weight, minimum : 30',
          'Amino Acid (Glycine) percent. by weight , minimum : 7',
          'Myoinositol percent. by weight , minimum : 2',
          'Vitamin C percent by weight , minimum : 12.0',
          'Vitamin E percent by weight , minimum : 0.2',
          'pH (1% aqueous solution) : 5.0 - 6.5',
          'Total organic carbon percent by weight , minimum : 25',
        ]}
        crops="Okra"
        dosage="Two soil applications at 250g/ha"
      />
    </div>
  );
}