import React from 'react';

type Item = {
  id: string | number;
  title: string;
  subtitle?: string;
  image?: string;
  alt?: string;
  category?: string;
};

type Props = {
  category: string;
};

const CategoryPage: React.FC<Props> = ({ category }) => {
  // fallback items (same as CollectionGrid) — small duplication for now
  const items: Item[] = [
    {
      id: 'jar',
      title: 'Jar Candles',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDFUMzI8Sm9t9tZgQxr4tKU--M4mVd3spwZwmZREYKG7QL2w4BViIlY76Zu9cg0vVG0WqfUN3IFhb4ogUY4uvzZTJOBx-TSHOHph3bFJGuT9gSDonkNIjGz63V6pCmsAZildSpGQe2A2B8V8tmHagM1r3LDih-Eq_QcMl9lYDGJPnOxZK_LeOpc-4TKCC7LkTJO1WwI9Q3r6EBim81xRcG4vu14M8cq7ceHVeUH67CKSlxUYaQk0IY5owfjMtUeNMFUhz7OSBx5Hg',
      alt: 'A beautifully crafted jar candle.',
      category: 'Jar',
    },
    {
      id: 'jar-2',
      title: 'Jar Candle - Vanilla',
      image: '/src/assets/img2.jpeg',
      alt: 'Vanilla scented jar candle',
      category: 'Jar',
    },
    {
      id: 'jar-3',
      title: 'Jar Candle - Rose',
      image: '/src/assets/img3.jpeg',
      alt: 'Rose jar candle',
      category: 'Jar',
    },
    // ...other items could be added or fetched
  ];

  const list = items.filter((i) => i.category === category);

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{category} Candles</h2>
          <a href="#/" className="text-sm text-gray-600 hover:underline">← Back to shop</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {list.map((it) => (
            <div key={it.id} className="rounded-lg overflow-hidden shadow-sm bg-white">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${it.image})` }} />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">{it.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{it.alt}</p>
              </div>
            </div>
          ))}
          {list.length === 0 && (
            <p className="text-gray-600">No items found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
