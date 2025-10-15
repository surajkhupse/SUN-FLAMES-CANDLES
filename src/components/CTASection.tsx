import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 text-center rounded-lg">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl titleHeading font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl font-display max-w-2xl mx-auto">Ready to find your perfect scent?</h1>
            <p className="text-lg text-black font-normal leading-relaxed max-w-xl mx-auto">Connect with us directly for personalized recommendations and to place your order.</p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <a
                href="https://wa.me/?text=I'm%20interested%20in%20your%20candles"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gradient-to-r bg-icon text-white text-base font-bold leading-normal tracking-[0.015em]"
              >
                <i className="fab fa-whatsapp fa-lg mr-3" aria-hidden></i>
                <span className="truncate">Order via WhatsApp</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gradient-to-r bg-icon text-white text-base font-bold leading-normal tracking-[0.015em]"
              >
                <i className="fab fa-instagram fa-lg mr-3" aria-hidden></i>
                <span className="truncate">Connect on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
