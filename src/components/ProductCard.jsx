import { motion } from 'framer-motion';

export default function ProductCard({
  brandName,
  logoSrc,
  companyName,
  productName,
  gazette,
  title,
  composition,
  crops = '—',
  dosage = '—',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md w-full"
    >
      {/* Outer card mimicking screenshot */}
      <div className="glass-card rounded-3xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-xl-soft overflow-hidden">
        {/* Header brand title */}
        {brandName ? (
          <div className="px-6 sm:px-8 pt-4 sm:pt-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black/90">
              {brandName}
            </h1>
          </div>
        ) : null}

        {/* Logo container */}
        <div className="px-6 sm:px-8 pb-4">
          <div className="mt-4 rounded-2xl bg-white/30 border border-white/40 p-3 flex flex-col items-center">
            {companyName && (
              <div className="w-full text-center text-base sm:text-lg font-semibold text-black/80 mb-2">
                {companyName}
              </div>
            )}
            {logoSrc?.endsWith('.mp4') ? (
              <video
                src={logoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-32 sm:h-40 md:h-44 object-contain rounded-xl"
              />
            ) : (
              <img
                src={logoSrc}
                alt="Logo"
                className="w-full h-32 sm:h-40 md:h-44 object-contain"
              />
            )}
          </div>
        </div>

        {/* Info sections matching screenshot style */}
        <div className="px-6 sm:px-8 pb-8 space-y-4">
          {productName && (
            <section className="rounded-2xl bg-black/12 text-white border border-white/25 p-4">
              <p className="text-sm tracking-wide text-white/80">Product Name</p>
              <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{productName}</p>
            </section>
          )}

          {gazette && (
            <section className="rounded-2xl bg-black/12 text-white border border-white/25 p-4">
              <p className="text-sm tracking-wide text-white/80">1. Gazette Notification</p>
              <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{gazette}</p>
            </section>
          )}

          {title && (
            <section className="rounded-2xl bg-black/12 text-white border border-white/25 p-4">
              <p className="text-sm tracking-wide text-white/80">2. Title of Bio Stimulant</p>
              <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{title}</p>
            </section>
          )}

          {composition?.length > 0 && (
            <section className="rounded-2xl bg-black/12 text-white border border-white/25 p-4">
              <p className="text-sm tracking-wide text-white/80">3. Composition</p>
              <ul className="mt-2 space-y-2 list-disc pl-5 text-base sm:text-lg">
                {composition.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Crops section (always render with placeholder if missing) */}
          <section className="rounded-2xl bg-black/12 text-white border border-white/25 p-4">
            <p className="text-sm tracking-wide text-white/80">4. Crops</p>
            <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{crops}</p>
          </section>

          {/* Dosage section (always render with placeholder if missing) */}
          <section className="rounded-2xl bg-black/12 text-white border border-white/25 p-4">
            <p className="text-sm tracking-wide text-white/80">5. Dosage</p>
            <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{dosage}</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}