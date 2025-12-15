import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function Floraco() {
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
        title="Seaweed extract of Kappaphycus alvarezii 24% (Liquid)"
        composition={[
          'Total carbohydrate percent by weight minimum (Foliar Application): 7.5',
          'D-Galactose-4-O-Sulphate percent by weight minimum : 6.0',
          'pH (Minimum) (1:2 Aqueous Solution) : 3.0-5.0',
        ]}
        crops="Cucumber"
        dosage="One foliar application at 2ml/l"
      />
    </div>
  );
}