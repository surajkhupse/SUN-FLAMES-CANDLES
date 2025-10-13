import React from 'react';

type Item = {
  id: string | number;
  title: string;
  subtitle?: string;
  image?: string; // image URL to use as background
  alt?: string; // alt text / description
};

type Props = {
  items?: Item[];
};

const CollectionGrid: React.FC<Props> = ({ items = [] }) => {
  const fallback = [
    {
      id: 'floral',
      title: 'The Floral Collection',
      subtitle: undefined,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDFUMzI8Sm9t9tZgQxr4tKU--M4mVd3spwZwmZREYKG7QL2w4BViIlY76Zu9cg0vVG0WqfUN3IFhb4ogUY4uvzZTJOBx-TSHOHph3bFJGuT9gSDonkNIjGz63V6pCmsAZildSpGQe2A2B8V8tmHagM1r3LDih-Eq_QcMl9lYDGJPnOxZK_LeOpc-4TKCC7LkTJO1WwI9Q3r6EBim81xRcG4vu14M8cq7ceHVeUH67CKSlxUYaQk0IY5owfjMtUeNMFUhz7OSBx5Hg',
      alt: 'A beautifully crafted floral scented candle.',
    },
    {
      id: 'earthy',
      title: 'The Earthy Collection',
      subtitle: undefined,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCJiFnwgzZt04h5c4g7s_V-h8UsdtsBvGgW1ro-vGoBD5s71BDICDJscw6sqsdjaRap6Bl9bXadwfy3wMs2A_hMTQdZ8bXcbWG8xtbONM_Hkk4wW0l0Ltq6HXNldgUkocvXYG4CCa4R_trhmbEJid0Lffvrf-NoNMwGdC-CukTk7ciMz27L5bqA_-GOcY-F83lOE0IW0fh5cPcAROP7wwGwqv6aLoXozUi3KPDB_TiNwXL_2ugsH9v_J0h4fqxbyEpqupLlnxqDPg',
      alt: 'An earthy scented candle in a rustic setting.',
    },
    {
      id: 'seasonal',
      title: 'The Seasonal Collection',
      subtitle: undefined,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA-dBRYon2PC041pe1UeCyToyV25KalVdo8dqCjF8qqpeURR4dRPmcMTfEstlLROZFm1KmY2rokiJZNqwdKe2DOVlOLaQlde1jQq8nNc4quu83JHacJZlldkBKow9ty8VuVSLmcVRQxfUadakvFv6awY4dx4kdE2fk6ctLuog_bMuB2jdLqTIF-NyT0L6JqXtcQGZFpUBJn16LgG2X93CFwtnqGgy7JmjKNneJI3KRMlbGoT_jnT_zbPufCw-axNj1vEIlRefrbfQ',
      alt: 'A cozy seasonal candle for the holidays.',
    },
  ];

  const list = items.length ? items : fallback;

  return (
    <section id="shop" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6">Our Collection</h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-4">
          {list.map((it) => {
            const imageUrl = it.image || '';
            const bg = imageUrl
              ? `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("${imageUrl}")`
              : undefined;

            return (
              <div
                key={it.id}
                className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-6 aspect-[3/4] group"
                data-alt={it.alt}
                style={bg ? { backgroundImage: bg } : undefined}
                aria-label={it.alt}
              >
                <p className="text-white text-2xl font-bold leading-tight w-4/5 line-clamp-3 transition-transform duration-300 group-hover:-translate-y-2">
                  {it.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Optional larger content below (mirrors the original page layout) */}
      </div>
    </section>
  );
};

export default CollectionGrid;
