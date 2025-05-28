// Mock product data
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: 'Electronics' | 'Clothing' | 'Home';
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    description: 'Comfortable running shoes with cushioned soles for maximum support during your runs.',
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 149,
    description: 'High-quality wireless headphones with noise cancellation for an immersive audio experience.',
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    description: 'Durable backpack with multiple compartments, perfect for daily use or travel.',
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    title: 'Smartwatch',
    price: 249,
    description: 'Feature-rich smartwatch with health tracking and smartphone notifications.',
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    description: 'Stylish sunglasses with UV protection for both fashion and eye care.',
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    description: 'High-resolution digital camera for capturing your most precious moments with clarity.',
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    description: 'Comfortable cotton t-shirt, perfect for casual wear.',
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    description: 'Latest smartphone with advanced features and an excellent camera system.',
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: {
      rate: 4.2,
      count: 120
    }
  },
  {
    id: '9',
    title: 'Desk Lamp',
    price: 79,
    description: 'Adjustable desk lamp with multiple brightness levels for comfortable reading and working.',
    category: 'Home',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '10',
    title: 'Coffee Maker',
    price: 129,
    description: 'Programmable coffee maker for brewing your perfect cup of coffee every morning.',
    category: 'Home',
    image: 'https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}