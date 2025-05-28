"use client";

import { Product } from "@/lib/data";
import { ProductCard } from "./ProductCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    const category = searchParams.get("category");
    if (category && category !== "All") {
      result = result.filter(product => product.category === category);
    }
    
    // Filter by price range
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    if (minPrice && maxPrice) {
      result = result.filter(
        product => product.price >= parseInt(minPrice) && product.price <= parseInt(maxPrice)
      );
    }
    
    // Filter by search term
    const search = searchParams.get("search");
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        product => 
          product.title.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredProducts(result);
  }, [products, searchParams]);

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h3 className="text-xl font-semibold mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your filters or search term</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}