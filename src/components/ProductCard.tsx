import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  description,
  image,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="cursor-pointer">
      <div className="w-full h-full flex flex-col justify-between border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer bg-white">
        {image ? (
          <div className="mb-4 overflow-hidden rounded">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            {/* <div className="bg-gray-100 h-48 w-full flex items-center justify-center">
              <span className="text-gray-400">{name}</span>
            </div> */}
          </div>
        ) : (
          <div className="mb-4 bg-gray-100 h-48 rounded flex items-center justify-center">
            <span className="text-gray-400">{name}</span>
          </div>
        )}

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
          {description && (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-blue-600">
            ${price.toFixed(2)}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            View
          </button>
        </div>
      </div>
    </Link>
  );
}
