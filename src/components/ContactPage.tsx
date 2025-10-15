
const ContactPage = () => {
  return (
    <section className="flex flex-col max-w-[960px] mx-auto flex-1">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSTQvcaoI979VnMV3QkfU3mjHKaoKCfqLXgJbKWMtgbe0YJDpjLEmm42ER_vnaoNZBMI-h5-DI8asupvHTk4JrpvNZutSYpKdiz3AmiX-LBxaaPSpC7TIFuRkpU_JWLElmMw4O1E8FXE5h4WXPUTkLJa_u-tIOfUS0W47Lmp99JbGJf37oDgzy34a-8X5TZKtneBNGs-khI2zTaKh6iakLAzYVQGexWBbTGt17lbfIZaDKkcJHV0oUHbAmD-Vrp7uyHlhGqNlASw")',
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl font-display">
                Get in Touch
              </h1>
              <h2 className="text-white text-base @[480px]:text-lg font-normal leading-normal">
                We'd love to hear from you. Reach out with any questions or just
                to say hello.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4 font-display titleHeading text-primary">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed mb-6 text-gray-700">
              Have a question about our products, an inquiry about a custom
              order, or just want to share your thoughts? Fill out the form
              below, and we'll get back to you as soon as possible. You can also
              connect with us on our social media channels.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="flex items-center justify-center bg-icon gap-2 min-w-[84px] rounded-lg h-12 px-5 bg-primary/20 text-primary text-base font-bold"
              >
                <span className="material-symbols-outlined">chat</span>
                <span>WhatsApp</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center bg-icon gap-2 min-w-[84px] rounded-lg h-12 px-5 bg-primary/20 text-primary text-base font-bold"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border p-3 text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border p-3 text-sm"
              />
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border p-3 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full rounded-lg border p-3 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg h-12 px-5 bg-gradient-to-r bg-icon text-white text-base font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
