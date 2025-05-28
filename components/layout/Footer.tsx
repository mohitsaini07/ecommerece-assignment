import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <ul className="space-y-2">
              <li><Link href="/?category=All" className="hover:text-blue-300">All</Link></li>
              <li><Link href="/?category=Electronics" className="hover:text-blue-300">Electronics</Link></li>
              <li><Link href="/?category=Clothing" className="hover:text-blue-300">Clothing</Link></li>
              <li><Link href="/?category=Home" className="hover:text-blue-300">Home</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-300">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-4 text-sm text-blue-300">
          <p>© 2024 ShopCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}