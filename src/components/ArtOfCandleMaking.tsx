// ArtOfCandleMaking.tsx
import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function ArtOfCandleMaking({
  title = "The Art of Candle Making",
  children = (
    <>
      Each Aura candle is a testament to the art of traditional craftsmanship. We pour every candle by hand,
      blending our unique fragrances with natural soy wax. This meticulous, step-by-step process ensures a clean,
      long-lasting burn and an unparalleled scent experience.
    </>
  ),
  className = "",
}: Props) {
  return (
    <section
      aria-labelledby="art-of-candle-making-title"
      className={`text-center ${className}`}
    >
      {/* Text content */}
      <h2
        id="art-of-candle-making-title"
        className="titleHeading text-3xl md:text-4xl font-display font-bold leading-tight tracking-[-0.015em] pb-4"
      >
        {title}
      </h2>

      <p className="text-black text-base font-sans font-normal leading-relaxed max-w-3xl mx-auto">
        {children}
      </p>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        <div
          className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-xl"
          aria-label="Close-up of hands carefully pouring melted wax into a glass vessel."
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQMrdPa__mbFQnVyBA1cVY42MsUcHvBWbVuIlRu4LP3fzFz9tV7U2rqF4qbqmTZwHY-0O1WBPgW-wxKlslIVF2TypEMHyGl8UJ0eVYsY4tJBlAOwjhNs9f1KeE_Ip7kT9imUGNKEVwoWfCJVACtmPVA0NaIH1tOwS3VOFwhPoJnzFT1hCiImwTBRBqR2IsM5VoEc1BILn3eCuppRzVSX5X1yjtzV-t4Qge8XLPUwTwlLJ3XPfe_K2Wkbr0dMx7aEB-kmm1wb5jrQ")',
          }}
        ></div>

        <div
          className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-xl"
          aria-label="A selection of wicks being centered in candle jars before pouring."
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMBZYAm9jL0SZVfzWC11Lurf9EV0D5z7qx_T3uniDEW8UWrvX_7IO_dP_RhcvVc6nW1y0SO8Jhdwcgrnu-R4Tu-inQLJEr_04keXFpG0rWj3Uiv2BRWoMybNcjz1WVUzWWHkoEGhzwAi8-YWMtgxCkyBHo5bE6saT0NBeUJdNbN6s55kSUK9KThMndnkYBIOmdAp_4GRTbgrTSYsCTtN6kLmwxfMpMhc5FL8qSSpcTnKO6Bfqb3ijB2obT7cboqe47ZIZOixqIkw")',
          }}
        ></div>

        <div
          className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-xl"
          aria-label="Finished candles curing on a wooden shelf, with elegant labels."
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDu7fYj9kAGmLZXCwv6mg2pBSzGOUXZGbgm067qdipWDR-hlXBqb0n6zlJC3RHzThRHvNyJywlkEAj-omvQDbBqGUpWEeT7wY1rZA7iulbS4Me0jXYd_A9LeAg-EqYpFI4PSH0LYi5MHO9Usscoo2uGQodiBS-3Afcv84uMpP8CirIcu285i98D4dKYY-ccbeigIyrVD9kXR9idrBEMsXIj50DiMFr_VlRqwUUSdwWMHwpitOOj5obQ7QFQPzU_C1AHcZsOBNu0eg")',
          }}
        ></div>
      </div>
    </section>
  );
}
