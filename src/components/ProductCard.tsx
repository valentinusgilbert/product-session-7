import Link from "next/link";
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { toast } from "sonner";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(localStorage.getItem(`favorite_${product.id}`) === "true");
  }, [product.id]);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    const newFav = !favorite;
    setFavorite(newFav);
    localStorage.setItem(`favorite_${product.id}`, newFav.toString());
    toast(newFav ? "Added to Favorite" : "Removed from Favorite", {
      style: {
        background: newFav ? "#22c55e" : "#ef4444", // Tailwind green-500 / red-500
        color: "#fff",
      },
    });
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow p-4 flex flex-col items-center group border border-transparent hover:border-blue-200 relative">
      <button
        className={`absolute top-3 right-3 text-xl transition-colors ${favorite ? "text-red-500" : "text-gray-300"} hover:text-red-400 cursor-pointer select-none`}
        onClick={handleFavorite}
        aria-label={favorite ? "Remove from Favorite" : "Add to Favorite"}
      >
        <FiHeart />
      </button>
      <div className="w-full flex justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={128}
          height={128}
          className="h-32 object-contain mb-4 transition-transform group-hover:scale-105"
        />
      </div>
      <h2 className="font-semibold text-lg mb-2 text-center line-clamp-2 min-h-[3rem]">{product.title}</h2>
      <div className="text-green-600 font-bold mb-2">${product.price}</div>
      <Link
        href={`/products/${product.id}`}
        className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full text-center"
      >
        View Details
      </Link>
    </div>
  );
}

// SKELETON LOADER COMPONENT
export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center border border-transparent relative animate-pulse overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{backgroundSize:'200% 100%'}} />
      <div className="w-full flex justify-center z-10">
        <div className="h-32 w-32 bg-gray-200 rounded mb-4" />
      </div>
      <div className="w-3/4 h-6 bg-gray-200 rounded mb-2 z-10" />
      <div className="w-1/3 h-5 bg-gray-200 rounded mb-2 z-10" />
      <div className="w-full h-10 bg-gray-200 rounded mt-auto z-10" />
    </div>
  );
} 