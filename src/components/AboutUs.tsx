import React from 'react';

const AboutUs: React.FC = () => {
  const imageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDeUEC4s-HazRE_5LfaNlcXM_EUhhCh8Ti2Qni4IBjGsZ8wLKQ_m8sBHZRgdWXnQfnsbavptgTLYLjEWvSw0xAVCJNPdqA7Kt20rkq-oySQ65mGZKib6dRqe7Emxgusiqf1oF-fd89rNFq243nCvR29jRinuEccOsHrJO4L-2lyFJpAi9BiRYS0_Vnpq-qrUe6UJmI51IgPl-uMShVc7g14VsG6R21-QcNGzVbtTTnpwkrGXpgeFmE9oz-UmUSEtvjaNL0oifU8wA';

  return (
    <section id="about" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 px-4 py-10 @container items-center">
          <div className="flex-1">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: `url("${imageUrl}")` }}
              aria-hidden
            ></div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl font-display text-black">About Us</h1>
            <p className="text-lg font-normal leading-relaxed max-w-[720px] text-black">
              We are a small, handcrafted candle brand with a passion for craftsmanship, natural ingredients, and creating a cozy atmosphere. Each candle is lovingly poured in small batches, ensuring quality and a personal touch in every flicker.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
