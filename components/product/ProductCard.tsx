"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data";
import { useCart } from "@/hooks/useCart";
import { StarRating } from "@/components/ui/star-rating";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md">
      <Link href={`/product/${product.id}`} className="block relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </Link>
      
      <div className="p-4">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-gray-800 hover:text-blue-600 mb-1 truncate">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-lg">${product.price}</span>
          {product.rating && (
            <StarRating rating={product.rating.rate} className="ml-1" />
          )}
        </div>
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={() => addItem(product)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}