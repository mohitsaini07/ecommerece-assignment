"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { getProductById } from "@/lib/data";
import { useCart } from "@/hooks/useCart";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id as string);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    notFound();
  }

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="mb-4">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[400px] md:h-[500px] bg-white rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
          
          <div className="flex items-center mb-4">
            {product.rating && (
              <>
                <StarRating rating={product.rating.rate} />
                <span className="ml-2 text-gray-500">
                  ({product.rating.count} reviews)
                </span>
              </>
            )}
          </div>
          
          <div className="text-2xl font-bold text-gray-900 mb-4">
            ${product.price}
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Category</h3>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
          </div>
          
          <Separator className="my-6" />
          
          <div className="mb-6">
            <h3 className="font-medium mb-3">Quantity</h3>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <span className="w-8 text-center">{quantity}</span>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg flex items-center justify-center gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}