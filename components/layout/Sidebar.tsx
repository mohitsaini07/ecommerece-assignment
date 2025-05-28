"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );
  
  const [priceRange, setPriceRange] = useState([
    parseInt(searchParams.get("minPrice") || "0"),
    parseInt(searchParams.get("maxPrice") || "1000")
  ]);

  useEffect(() => {
    setCategory(searchParams.get("category") || "All");
    setPriceRange([
      parseInt(searchParams.get("minPrice") || "0"),
      parseInt(searchParams.get("maxPrice") || "1000")
    ]);
  }, [searchParams]);

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (value === "All") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    
    router.push(`/?${params.toString()}`);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const applyPriceFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>
      
      <div className="mb-8">
        <h3 className="font-medium mb-3">Category</h3>
        <RadioGroup value={category} onValueChange={handleCategoryChange} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="All" id="category-all" />
            <Label htmlFor="category-all">All</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Electronics" id="category-electronics" />
            <Label htmlFor="category-electronics">Electronics</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Clothing" id="category-clothing" />
            <Label htmlFor="category-clothing">Clothing</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Home" id="category-home" />
            <Label htmlFor="category-home">Home</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-3">Price</h3>
        <Slider
          defaultValue={[0, 1000]}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={handlePriceChange}
          onValueCommit={applyPriceFilter}
          className="mb-6"
        />
        <div className="flex items-center justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}