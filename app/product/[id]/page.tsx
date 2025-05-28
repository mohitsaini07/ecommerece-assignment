import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById } from "@/lib/data";
import { ProductClient } from "./product-client";

export async function generateStaticParams() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
