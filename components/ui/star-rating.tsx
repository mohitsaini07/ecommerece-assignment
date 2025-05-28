import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

export function StarRating({ 
  rating, 
  maxRating = 5,
  className
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4", 
            i < Math.floor(rating) 
              ? "fill-yellow-400 text-yellow-400" 
              : i < rating 
                ? "fill-yellow-400 text-yellow-400 fill-[50%]" 
                : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
}