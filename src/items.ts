export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: 'shoes' | 'clothing';
  image: string;
  size?: string;
  availableSizes?: string[];
}

/**
 * ELITE GRIND - PRODUCT ARCHIVE
 * Add or modify items here.
 */
export const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Jordan 1 Retro High OG "Chicago"', 
    brand: 'JORDAN',
    price: 850, 
    category: 'shoes', 
    size: '44', 
    image: 'https://picsum.photos/seed/jordan1/800/800',
    availableSizes: ['41', '42.5', '44', '45', '46'],
  },
  { 
    id: '2', 
    name: 'Nike Dunk Low "Panda"', 
    brand: 'NIKE',
    price: 180, 
    category: 'shoes', 
    size: '45', 
    image: 'https://picsum.photos/seed/dunklow/800/800',
    availableSizes: ['40', '41', '42.5', '44', '45', '46', '47.5'],
  },
  { 
    id: '3', 
    name: 'Yeezy Boost 350 V2 "Slate"', 
    brand: 'YEEZY',
    price: 320, 
    category: 'shoes', 
    size: '44.5', 
    image: 'https://picsum.photos/seed/yeezy/800/800',
    availableSizes: ['42.5', '44', '44.5', '45'],
  },
  { 
    id: '4', 
    name: 'New Balance 2002R "Protection Pack"', 
    brand: 'NEW BALANCE',
    price: 240, 
    category: 'shoes', 
    size: '43', 
    image: 'https://picsum.photos/seed/nb2002r/800/800',
    availableSizes: ['42', '42.5', '43', '44'],
  },
  { 
    id: '5', 
    name: 'Nike Kobe 6 Protro "Mambacita"', 
    brand: 'KOBE',
    price: 750, 
    category: 'shoes', 
    size: '46', 
    image: 'https://picsum.photos/seed/kobe6m/800/800',
    availableSizes: ['45', '46', '47.5'],
  },
  { 
    id: '6', 
    name: 'Jordan 4 Retro "Military Black"', 
    brand: 'JORDAN',
    price: 480, 
    category: 'shoes', 
    size: '45', 
    image: 'https://picsum.photos/seed/jordan4/800/800',
    availableSizes: ['42.5', '44', '45', '46'],
  },
  { id: '7', name: 'Elite Grind "Legacy" Hoodie', brand: 'ELITE GRIND', price: 110, category: 'clothing', size: 'L', image: 'https://picsum.photos/seed/hoodie/800/800', availableSizes: ['S', 'M', 'L', 'XL'] },
  { id: '8', name: 'Elite Grind "Core" Mesh Shorts', brand: 'ELITE GRIND', price: 65, category: 'clothing', size: 'M', image: 'https://picsum.photos/seed/shorts/800/800', availableSizes: ['S', 'M', 'L'] },
  { id: '9', name: 'Nike Air Max 1 "Big Bubble"', brand: 'NIKE', price: 210, category: 'shoes', size: '44', image: 'https://picsum.photos/seed/airmax1/800/800', availableSizes: ['42.5', '44', '45'] },
  { id: '10', name: 'Jordan 3 Retro "White Cement"', brand: 'JORDAN', price: 390, category: 'shoes', size: '45.5', image: 'https://picsum.photos/seed/jordan3/800/800', availableSizes: ['44', '45', '45.5', '46'] },
  { id: '11', name: 'Nike SB Dunk Low "Jarritos"', brand: 'NIKE', price: 580, category: 'shoes', size: '44.5', image: 'https://picsum.photos/seed/sbdunk/800/800', availableSizes: ['42.5', '44', '44.5', '45'] },
  { id: '12', name: 'Elite Grind "Vision" Tee', brand: 'ELITE GRIND', price: 55, category: 'clothing', size: 'XL', image: 'https://picsum.photos/seed/tee/800/800', availableSizes: ['M', 'L', 'XL', 'XXL'] },
];
