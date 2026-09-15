import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function Hipro() {
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
        title="Potassium Humate 49% (Powder)"
        composition={[
          '(i) Potassium humate (Source: Leonardite) per cent. by weight, minimum : 49',
          '(ii) Silwet power (adjuvant) per cent. by weight, maximum : 0.5',
          '(iii) Carboxymethyl cellulose per cent. by weight, maximum : 1.0',
          '(iv) Maltodextrin powder per cent. by weight : QS',
          '(v) Total (per cent.) : 100',
        ]}
        crops="Paddy, Tomato"
        dosage="One soil application at 1 kg/ha"
      />
    </div>
  );
}