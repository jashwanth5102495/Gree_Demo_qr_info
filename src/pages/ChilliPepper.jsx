import { motion } from 'framer-motion';

export default function ChilliPepper() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-24 sm:pt-28 pb-8 sm:pb-10">
      <div className="fixed inset-0 -z-20 bg-black/35 pointer-events-none"></div>
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-60 blur-2xl pointer-events-none"></div>

      <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-20">
        <motion.img
          src="/dark-logo.png"
          alt="Green Plant Technologies"
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-lg shadow-2xl"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: [0, 180, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformPerspective: 600 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-box relative z-10 max-w-xs sm:max-w-sm md:max-w-md w-full"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700 tracking-wide drop-shadow-xl mb-2">
          Green Plant Technologies
        </h1>

        <div className="space-y-5 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-white">
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">1. Gazette Notification</h2>
            <p>S.O.3922(E), Dated 12-9-2024</p>
          </div>
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">2. Title of Bio Stimulant</h2>
            <p>Humic acid 5% (powder)</p>
          </div>
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">3. Composition</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Humic Acid percent by weight minimum: 5</li>
              <li>pH (1% aqueous solution): 4.0–5.0</li>
              <li>Specific Gravity: 1.0</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">4. Crops</h2>
            <p>Chilli pepper</p>
          </div>
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">5. Dosage</h2>
            <p>Three foliar application at 0.5g/ltr</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://www.greenplanttechnologies.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 ease-in-out"
          >
            More Info
          </a>
        </div>
      </motion.div>
    </div>
  );
}