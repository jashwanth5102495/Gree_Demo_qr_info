import { motion } from 'framer-motion';

export default function ProductCard({
  brandName,
  logoSrc = '/vib.mp4',
  companyName,
  productName,
  gazette,
  title,
  category,
  composition,
  crops,
  dosage,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md w-full mx-auto pb-12"
    >
      {/* Top Header Card (Video / Logo Container) */}
      <div className="rounded-3xl bg-black/75 border border-white/25 shadow-2xl p-4 sm:p-5 overflow-hidden backdrop-blur-xl mb-4">
        {brandName && (
          <h1 className="text-xl sm:text-2xl font-extrabold text-white text-center mb-2">
            {brandName}
          </h1>
        )}
        {companyName && (
          <p className="text-sm sm:text-base font-semibold text-white/80 text-center mb-3">
            {companyName}
          </p>
        )}
        <div className="rounded-2xl overflow-hidden border border-amber-400/30 bg-black/60 shadow-inner flex items-center justify-center">
          {logoSrc?.endsWith('.mp4') ? (
            <video
              src={logoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-40 sm:h-48 md:h-52 object-contain rounded-xl"
            />
          ) : (
            <img
              src={logoSrc || '/dark-logo.png'}
              alt="Logo"
              className="w-full h-40 sm:h-48 md:h-52 object-contain rounded-xl p-2"
            />
          )}
        </div>
      </div>

      {/* Main Section Header */}
      <h2 className="text-center text-white font-bold text-lg sm:text-xl tracking-wide my-4 drop-shadow-md">
        Bio-Stimulant Registration Details
      </h2>

      {/* Individual Glass Section Cards */}
      <div className="space-y-3 sm:space-y-4">
        {/* Product Name Card */}
        {productName && (
          <div className="dark-glass-pill rounded-2xl p-4 sm:p-4 flex items-start space-x-3.5 sm:space-x-4">
            <div className="icon-box-tile shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lime-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0C9.5 13 6 10.5 6 6a6 6 0 0112 0c0 4.5-3.5 7-6 7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-[#C5E1A5] tracking-wide">
                Product Name:
              </p>
              <p className="mt-0.5 text-base sm:text-lg md:text-xl font-bold text-white leading-snug break-words">
                {productName}
              </p>
            </div>
          </div>
        )}

        {/* Gazette Notification Card */}
        {gazette && (
          <div className="dark-glass-pill rounded-2xl p-4 sm:p-4 flex items-start space-x-3.5 sm:space-x-4">
            <div className="icon-box-tile shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-amber-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6m-6 4h6" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-[#C5E1A5] tracking-wide">
                Gazette Notification:
              </p>
              <p className="mt-0.5 text-base sm:text-lg md:text-xl font-bold text-white leading-snug break-words">
                {gazette}
              </p>
            </div>
          </div>
        )}

        {/* Title of Bio Stimulant Card */}
        {title && (
          <div className="dark-glass-pill rounded-2xl p-4 sm:p-4 flex items-start space-x-3.5 sm:space-x-4">
            <div className="icon-box-tile shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-sky-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.595 15.12a2 2 0 00-1.808.547l-1.5 1.5A2 2 0 003.707 20.62L16.293 8.034a2 2 0 012.828 0l.303.303a2 2 0 010 2.828l-1.5 1.5z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-[#C5E1A5] tracking-wide">
                Tittle of Bio Stimulant:
              </p>
              <p className="mt-0.5 text-base sm:text-lg md:text-xl font-bold text-white leading-snug break-words">
                {title}
              </p>
            </div>
          </div>
        )}

        {/* Category Card */}
        {category && (
          <div className="dark-glass-pill rounded-2xl p-4 sm:p-4 flex items-start space-x-3.5 sm:space-x-4">
            <div className="icon-box-tile shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-yellow-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-[#C5E1A5] tracking-wide">
                Category:
              </p>
              <p className="mt-0.5 text-base sm:text-lg md:text-xl font-bold text-white leading-snug break-words">
                {category}
              </p>
            </div>
          </div>
        )}

        {/* Composition Card */}
        {composition && composition.length > 0 && (
          <div className="dark-glass-pill rounded-2xl p-4 sm:p-4 flex items-start space-x-3.5 sm:space-x-4">
            <div className="icon-box-tile shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-emerald-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-[#C5E1A5] tracking-wide mb-1">
                Composition:
              </p>
              <div className="space-y-1.5 text-sm sm:text-base font-semibold text-white leading-snug">
                {composition.map((item, idx) => (
                  <p key={idx} className="break-words">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Crops Card */}
        {crops && (
          <div className="dark-glass-pill rounded-2xl p-4 sm:p-4 flex items-start space-x-3.5 sm:space-x-4">
            <div className="icon-box-tile shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lime-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4 4-4 8 0 12m0-12c4 4 4 8 0 12" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-[#C5E1A5] tracking-wide">
                Crops:
              </p>
              <p className="mt-0.5 text-base sm:text-lg md:text-xl font-bold text-white leading-snug break-words">
                {crops}
              </p>
            </div>
          </div>
        )}

        {/* Dosage Card */}
        {dosage && (
          <div className="dark-glass-pill rounded-2xl p-4 sm:p-4 flex items-start space-x-3.5 sm:space-x-4">
            <div className="icon-box-tile shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-teal-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.595 15.12a2 2 0 00-1.808.547l-1.5 1.5A2 2 0 003.707 20.62L16.293 8.034a2 2 0 012.828 0l.303.303a2 2 0 010 2.828l-1.5 1.5z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-[#C5E1A5] tracking-wide">
                Dosage:
              </p>
              <p className="mt-0.5 text-base sm:text-lg md:text-xl font-bold text-white leading-snug break-words">
                {dosage}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}