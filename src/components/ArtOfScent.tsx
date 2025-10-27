// ArtOfScent.tsx
import React from "react";

type ScentImage = {
  url: string;
  alt: string;
};

type Props = {
  title?: string;
  description?: string;
  images?: ScentImage[];
  className?: string;
};

export default function ArtOfScent({
  title = "The Art of Scent",
  description = `At AURA LUMINARE, we believe that scent is an art form. Our candles are meticulously crafted with the finest, ethically sourced ingredients to create complex, captivating fragrances that transform your space and elevate your moments.`,
  images = [
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzXPmwdo5VAr0T4nHSzLl-5JdYdKMPqqWvkfCVRt443mG1WVakkKhMnauFbC8Afsw3STPgWAvtbjDKTHONaSY-a3AnIdf8P1ryO1k5lMEEDBA57WQxo6JWt337RZuIkxy2RD-bIi_84u0OyCjJga0P0NlMep8tNUGOAqDhKWVMMikAi3RulUYoSd4KNTJGX0dCnqjbqOzfy39mWuqvn8PT-eXeSB1PsiRlotdjyTHXfLQFoii6gyP7w1G8-VrZE8g48NqbviCbfg",
      alt: "An artistic circular image representing a floral scent note.",
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj1xYnJ2vKHwrC6ku3L7xg8d_x179xp5cqHC6WN8Zn62g0IRrkA3jzXX-LZEbo0juxnitiYHkakkSg7TLGpJHoL_wYOo0Yyyb1p6JuUCre9VlLd_AjmItrZE-GpAL9a4NOda3PFkA0jgtSd24jlg6fZ4-N_1jU4g70Hu7hVQaoM9N2V88O8xJa0KQbGFASVdBccmf3oaDqqgrdMLE2Jnv11JjBtw4D9-04HVQnbUHPNdJl7OC5s-biUBKNEYG70QMHb8HsyQAtlg",
      alt: "An artistic circular image representing a woody scent note.",
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxfOnrrwO68vlrT7C_nAdJXwvLv7XMTsCZNcdIiCuF3fH93ubQSqq9-9LMzhg7zT_aDONNEX7KGuZ8mTB_EYq22wjoIk21Ic18-e2r_S2px0ozAOSz6G-u-J7hSdSoASnDKFbNNciYQluj0PcEuYvcVtdcKNtcHBM_TL-nH9rXtKp05bcRM7_xpQeR1tWvg8aj11_973udvB78KKRXKD2QPXcrAArMd_TLURrWgc4J_3pl8ULZYVdEwr-x3OZhb1ZvC_dgRbfK3g",
      alt: "An artistic circular image representing a citrus scent note.",
    },
  ],
  className = "",
}: Props) {
  return (
    <section className={`px-4 py-6 text-center ${className}`}>
      {/* Section Title */}
      <h2
        id="art-of-candle-making-title"
        className="titleHeading text-3xl md:text-4xl font-display font-bold leading-tight tracking-[-0.015em] pb-4"
      >
        {title}
      </h2>

      {/* Description */}
      <p className="text-black text-sm font-normal leading-normal pb-3 pt-1 max-w-3xl mx-auto">
        {description}
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 justify-center">
        {images.map((img, index) => (
          <div key={index} className="flex flex-col gap-2 text-center items-center">
            <div className="px-2 w-full max-w-[200px]">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full shadow-md"
                role="img"
                aria-label={img.alt}
                style={{ backgroundImage: `url("${img.url}")` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
