import React from "react";
import { FiHeart } from "react-icons/fi";
import { toast } from "sonner";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export function ProductDetailSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row gap-10 border border-blue-100 relative min-h-[22rem] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{backgroundSize:'200% 100%'}} />
      <div className="relative flex-shrink-0 flex items-center justify-center z-10">
        <div className="h-56 w-56 rounded-xl bg-gray-200 bg-gray-50 shadow-sm" />
      </div>
      <div className="flex-1 flex flex-col justify-center z-10">
        <div className="w-3/4 h-10 bg-gray-200 rounded mb-3" />
        <div className="w-1/3 h-5 bg-gray-200 rounded mb-2" />
        <div className="w-1/4 h-8 bg-gray-200 rounded mb-4" />
        <div className="w-full h-16 bg-gray-200 rounded mb-6" />
        <div className="self-start w-32 h-10 bg-gray-300 rounded-lg" />
      </div>
    </div>
  );
}

export default function ProductDetailCard({
  product,
  favorite,
  onFavoriteToggle,
}: {
  product: Product;
  favorite: boolean;
  onFavoriteToggle: (msg?: string) => void;
}) {
  const handleClick = () => {
    onFavoriteToggle();
    toast(favorite ? "Removed from Favorite" : "Added to Favorite", {
      style: {
        background: favorite ? "#ef4444" : "#22c55e",
        color: "#fff",
      },
    });
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row gap-10 border border-blue-100 hover:shadow-2xl transition-all relative">
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="h-56 w-56 object-contain rounded-xl bg-gray-50 shadow-sm" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold mb-3 text-blue-800 drop-shadow-sm">{product.title}</h1>
        <p className="text-sm text-gray-500 mb-2 font-medium">Category: <span className="text-gray-700">{product.category}</span></p>
        <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>
        <p className="mb-6 text-gray-700 leading-relaxed">{product.description}</p>
        <button
          onClick={handleClick}
          className={`self-start px-6 py-2 rounded-lg text-white font-semibold shadow transition-all ${favorite ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"} cursor-pointer`}
        >
          {favorite ? "Remove from Favorite" : "Add to Favorite"}
        </button>
      </div>
    </div>
  );
} 