const AboutUs = () => {
  return (
    <div className="bg-white font-body">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center min-h-[480px] bg-cover bg-center bg-no-repeat p-6 rounded-xl"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSTQvcaoI979VnMV3QkfU3mjHKaoKCfqLXgJbKWMtgbe0YJDpjLEmm42ER_vnaoNZBMI-h5-DI8asupvHTk4JrpvNZutSYpKdiz3AmiX-LBxaaPSpC7TIFuRkpU_JWLElmMw4O1E8FXE5h4WXPUTkLJa_u-tIOfUS0W47Lmp99JbGJf37oDgzy34a-8X5TZKtneBNGs-khI2zTaKh6iakLAzYVQGexWBbTGt17lbfIZaDKkcJHV0oUHbAmD-Vrp7uyHlhGqNlASw")',
        }}
      >
        <h1 className="text-white text-4xl font-black font-display">
          Our Story: Crafted with Passion
        </h1>
        <h2 className="text-white text-lg mt-2 max-w-2xl">
          Discover the heart and soul behind our handcrafted candles.
        </h2>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-black dark:text-white">
        <div>
          <h2 className="text-3xl font-bold font-display mb-4 text-primary dark:text-primary-light titleHeading">
            From a Spark of Inspiration
          </h2>
          <p className="text-base leading-relaxed mb-4 text-black">
            Our journey began with a simple desire to create beautiful,
            high-quality candles that bring warmth and light into your home. It
            all started in a small kitchen, with a passion for scents and a love
            for the meditative process of candle making.
          </p>
          <p className="text-base leading-relaxed text-black">
            This commitment to craftsmanship and quality is at the heart of
            everything we do, ensuring that every candle we produce is a work of
            art, made with love and intention.
          </p>
        </div>
        <div
          className="aspect-square rounded-xl bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWD3CYwMd3OYyBRlkLjLB05lIa4HHd1CU-dVghSlwbkMSrvkUqY8wnSAgiHvlAW4fOLhWYCQz_bc48w66CrV9d5Lv1MsT8pSdjmsQRocY94-9vZVzASCRx_5yULRm_GtW7qoGXqr__QPIEvojWc5qAmBFAUJrFcRCN2roaACJyXy5HvwIaNkpVh3U32zMGhFyBC0l6Of7s1InlUMOCpGNuwDU4SnWZycPWdQxIJcRBbF5nnZYl3NmH_2t4wPBuQiMBx7kPvkH-dg")',
          }}
        ></div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-primary/10 rounded-xl text-center text-white dark:text-white bg-candleGold">
        <h2 className="text-3xl font-bold font-display mb-12 text-primary dark:text-primary-light titleHeading">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            {
              icon: 'eco',
              title: 'Sustainably Sourced',
              text: 'We use natural, eco-friendly waxes and ethically sourced materials to protect our planet.',
            },
            {
              icon: 'volunteer_activism',
              title: 'Hand-Poured with Care',
              text: 'Each candle is meticulously hand-poured in small batches to ensure the highest quality and care.',
            },
            {
              icon: 'diamond',
              title: 'Exceptional Quality',
              text: 'From premium fragrance oils to lead-free wicks, we are committed to excellence in every detail.',
            },
          ].map((value) => (
            <div key={value.title} className="flex flex-col items-center">
              <div className="p-4 px-5 bg-primary text-black bg-icon rounded-full mb-4">
                <span className="material-symbols-outlined text-white text-4xl">
                  {value.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold font-display mb-2 text-black">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-black">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 text-center text-black dark:text-white">
        <h2 className="text-3xl font-bold font-display mb-4 text-primary dark:text-primary-light titleHeading">
          Let's Connect
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-black">
          We'd love to hear from you. Follow our journey or send us a message
          for custom orders and inquiries.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 bg-icon rounded-lg h-12 px-5 bg-primary text-white font-bold"
          >
            <span className="material-symbols-outlined">chat</span>
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-icon rounded-lg h-12 px-5 bg-primary/20 text-primary font-bold"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>
            <span>Follow on Instagram</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
