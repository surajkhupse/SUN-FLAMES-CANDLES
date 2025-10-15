import img1 from '../assets/img1.jpeg';

export default function HeroSection() {
  return (
    <section
      className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 min-h-[480px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${img1})`,
      }}
    >
      <h1 className="text-white text-5xl md:text-5xl font-black font-display text-center">
        Ignite Your Space with Color & Light
      </h1>
      <p className="text-white text-lg md:text-xl text-center">
        Sun & Flames Candles — colorful, handcrafted candles to brighten your home and heart.
      </p>

      <button className="h-12 px-5 bg-gradient-to-r bg-icon text-white font-bold rounded-lg relative z-10 shadow-sm hover:brightness-95">
        Explore Our Collections
      </button>
    </section>
  );
}
