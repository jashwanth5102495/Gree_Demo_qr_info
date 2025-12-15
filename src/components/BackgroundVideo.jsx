export default function BackgroundVideo() {
  return (
    <video
      src="/asd.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      className="fixed inset-0 w-full h-full object-cover"
      style={{ zIndex: -40 }}
    />
  );
}