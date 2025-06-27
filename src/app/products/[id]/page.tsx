"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProductDetailCard, { ProductDetailSkeleton } from "../../../components/ProductDetailCard";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
        setFavorite(localStorage.getItem(`favorite_${data.id}`) === "true");
      });
  }, [id]);

  const handleFavorite = () => {
    if (!product) return;
    const newFav = !favorite;
    setFavorite(newFav);
    localStorage.setItem(`favorite_${product.id}`, newFav.toString());
  };

  if (loading) return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <Link href="/" className="text-blue-600 hover:underline font-semibold text-lg">&larr; Back to Products</Link>
        <div className="mt-8">
          <ProductDetailSkeleton />
        </div>
      </div>
    </main>
  );
  if (!product) return <div className="p-8">Product not found.</div>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <Link href="/" className="text-blue-600 hover:underline font-semibold text-lg">&larr; Back to Products</Link>
        <div className="mt-8">
          <ProductDetailCard product={product} favorite={favorite} onFavoriteToggle={handleFavorite} />
        </div>
      </div>
    </main>
  );
} 