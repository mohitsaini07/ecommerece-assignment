import { products } from "@/lib/data";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Sidebar } from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Product Listing</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Sidebar />
        </div>
        
        <div className="md:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}