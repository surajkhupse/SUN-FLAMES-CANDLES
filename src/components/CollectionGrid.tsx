import React, { useMemo, useState } from 'react';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';

export type Item = {
  id: string | number;
  title: string;
  image?: string;
  alt?: string;
  category?: string;
};

type Props = {
  items?: Item[];
};

const CollectionGrid: React.FC<Props> = ({ items = [] }) => {
  const fallback: Item[] = [
    { id: 'jar', title: 'Jar Candles', image: img1, alt: 'Jar candle', category: 'Jar' },
    { id: 'tealight', title: 'Tea-light', image: img2, alt: 'Tea-light', category: 'Tea-light' },
    { id: 'Flora\'s', title: 'Florals', image: img3, alt: 'Florals', category: 'Florals' },
    { id: 'pillar', title: 'Pillar Candles', image: img4, alt: 'Pillar candle', category: 'Pillar' },
    { id: 'votive', title: 'Votive Candles', image: img3, alt: 'Votive candle', category: 'Votive' },
    { id: 'gifts', title: 'Gift Sets', image: img2, alt: 'Gift set', category: 'Gift Set' },
    
  ];

  const list = items.length ? items : fallback;
  const [selected, setSelected] = useState<string>('All');

  const categories = useMemo(() => {
    const s = new Set<string>();
    list.forEach((i) => i.category && s.add(i.category));
    return ['All', ...Array.from(s)];
  }, [list]);

  const filtered = useMemo(() => (selected === 'All' ? list : list.filter((i) => i.category === selected)), [list, selected]);

  return (
    <section id="shop" className="py-5">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6 text-black">Our Collection</h3>

        <div className="mb-6 px-4">
          <div role="tablist" aria-label="Categories" className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selected === cat}
                onClick={() => setSelected(cat)}
                className={`px-3 py-1 rounded-full text-sm font-medium focus:outline-none transition-colors duration-200 
  ${selected === cat
                    ? 'bg-[#C6AC8F] text-white shadow-sm' // active tab
                    : 'bg-gray-100 text-gray-700 hover:bg-[#C6AC8F] hover:text-white'
                  }`}

              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((it) => {
            const imageUrl = it.image || '';
            const bg = imageUrl ? `linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%), url("${imageUrl}")` : undefined;

            return (
              <div
                key={it.id}
                className="rounded-xl overflow-hidden bg-cover bg-center h-64 cursor-pointer"
                style={bg ? { backgroundImage: bg } : undefined}
                role="button"
                tabIndex={0}
                onClick={() => (window.location.hash = `#/category/${encodeURIComponent(it.category || '')}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.location.hash = `#/category/${encodeURIComponent(it.category || '')}`;
                  }
                }}
                aria-label={it.alt}
              >
                <div className="h-full w-full flex items-end p-6">
                  <h4 className="text-white text-xl font-bold">{it.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
