import Link from "next/link";

export default function CategoriesSection() {
  const categories = [
    {
      id: "women",
      title: "Women's fashion",
      description:
        "Discover our exclusive collection of women's fashion for every occasion.",
      items: 35,
      image: "/img/categories/category-1.jpg",
      large: true,
    },
    {
      id: "men",
      title: "Men's fashion",
      items: 32,
      image: "/img/categories/category-2.jpg",
    },
    {
      id: "kids",
      title: "Kid's fashion",
      items: 0,
      image: "/img/categories/category-3.jpg",
    },
    {
      id: "cosmetics",
      title: "Cosmetics",
      items: 0,
      image: "/img/categories/category-4.jpg",
    },
    {
      id: "accessories",
      title: "Accessories",
      items: 33,
      image: "/img/categories/category-5.jpg",
    },
  ];

  const largeCat = categories[0];
  const smallCats = categories.slice(1);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Large category */}
          <Link
            href={`/shop`}
            className="h-80 rounded-lg overflow-hidden relative group cursor-pointer"
            style={{
              backgroundImage: `url(${largeCat.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
              <h2 className="text-4xl font-bold mb-3">{largeCat.title}</h2>
              <p className="text-sm mb-4 max-w-md">{largeCat.description}</p>
              <div className="bg-white text-gray-900 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
                Shop now
              </div>
            </div>
          </Link>

          {/* Small categories grid */}
          <div className="grid grid-cols-2 gap-4">
            {smallCats.map((cat) => {
              const url = `/shop?categories=${cat.id}`;

              return (
                <Link
                  key={cat.id}
                  href={url}
                  className="h-40 rounded-lg overflow-hidden relative group cursor-pointer"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
                    <h4 className="text-lg font-bold mb-1">{cat.title}</h4>
                    <p className="text-xs text-gray-200 mb-3">
                      {cat.items} items
                    </p>
                    <div className="text-xs bg-white text-gray-900 px-3 py-1 rounded hover:bg-gray-100 transition">
                      Shop now
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
