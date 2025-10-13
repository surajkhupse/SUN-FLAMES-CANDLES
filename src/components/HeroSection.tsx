export default function HeroSection() {
  return (
    <section
      className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 min-h-[480px]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCC1YRm0GDE3rQl4JU39dImiZ1v6y9L8AsxayoRF3VeKa7K_eVOXMdm2x7gB51ts7M73KJunqG-pGBUb-DhJN23kvbEokCDsEng41DgcnKP-w5eOCXfADjv493u3Z8PTjMZQuDJ3Ve9SRH60YLT2aDWwzfs3ZScvuPnWhAF1pm2XIpHN1uj7VNQUv4dJyeVlvF6FaliXZvrx1VIPhkv0yUFhaeiSan6OapEu3axHCHGVryXdNp9Y4TPDDbbndqlvmQbvnWD275mkw")',
      }}
    >
      <h1 className="text-white text-5xl md:text-6xl font-black font-display text-center">
        Handcrafted Light for Your Home
      </h1>
      <p className="text-white text-lg md:text-xl text-center">
        Discover our collection of small-batch, artisanal candles.
      </p>
      <button className="h-12 px-5 bg-[#e8308c] text-white font-bold rounded-lg relative z-10 shadow-sm hover:brightness-95">
        Explore Our Collections
      </button>
    </section>
  );
}
