export default function BackgroundVideo() {
  return (
    <img
      src="/l.png"
      alt="Background"
      aria-hidden="true"
      className="fixed inset-0 w-full h-full object-cover"
      style={{ zIndex: -40 }}
    />
  );
}