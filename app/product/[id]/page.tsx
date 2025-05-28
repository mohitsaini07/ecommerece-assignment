import { notFound } from "next/navigation";
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

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
