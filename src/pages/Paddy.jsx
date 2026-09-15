import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function Paddy() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-12 sm:pt-14 pb-6 sm:pb-8">
      <BackgroundVideo />
      {/* Dark overlay to improve text visibility */}
      <div className="fixed inset-0 -z-20 bg-black/35 pointer-events-none"></div>
      {/* Animated gradient overlay behind the blurred background */}
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-60 blur-2xl pointer-events-none"></div>

      <IntroOverlay />
      <ProductCard
        brandName=""
        companyName="Green Plant Technologies"
        logoSrc="/vib.mp4"
        productName=""
        gazette="S.O.3922(E), Dated 12-9-2024"
        title="Sea Weed Extract of Sargassum tenerrimum 2% (Granular)"
        composition={[
          'Alginic Acid percent.by weight minimum : 0.2',
          'pH (1:2 aqueous solution) : 6.0-8.5',
          'Bulk density (g/cc) : 0.95-1.1',
        ]}
        crops="Paddy"
        dosage="One soil application at 12.5 kg/ha"
      />
    </div>
  );
}