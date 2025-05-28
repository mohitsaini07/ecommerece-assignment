"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CartItem as CartItemType } from "@/hooks/useCart";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="h-24 w-24 relative flex-shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-md"
          sizes="96px"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <Link href={`/product/${product.id}`} className="text-lg font-medium hover:text-blue-600">
          {product.title}
        </Link>
        <p className="text-gray-600">${product.price}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(product.id, quantity - 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(product.id, quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="ml-6 text-right">
        <p className="font-semibold">${(product.price * quantity).toFixed(2)}</p>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={() => removeItem(product.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}