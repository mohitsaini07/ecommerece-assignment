"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export function CartSummary() {
  const { items, total } = useCart();
  
  const handleCheckout = () => {
    toast.success("Checkout functionality would be implemented here");
  };
  
  const shipping = items.length > 0 ? 10 : 0;
  const tax = total * 0.08;
  const orderTotal = total + shipping + tax;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <Separator />
        
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${orderTotal.toFixed(2)}</span>
        </div>
        
        <Button 
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
          onClick={handleCheckout}
          disabled={items.length === 0}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}