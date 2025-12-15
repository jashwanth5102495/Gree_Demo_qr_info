import { useEffect, useRef, useState } from 'react';

export default function IntroOverlay() {
  const [show, setShow] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    // Safety fallback in case onEnded doesn't fire; hide after 6s.
    timerRef.current = setTimeout(() => setShow(false), 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <video
        src="/int.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => setShow(false)}
      />
    </div>
  );
}