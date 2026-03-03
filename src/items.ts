export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: 'shoes' | 'clothing';
  image: string;
  images?: string[];
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
    images: [
      'https://picsum.photos/seed/jordan1/800/800',
      'https://picsum.photos/seed/j1-2/800/800',
      'https://picsum.photos/seed/j1-3/800/800',
      'https://picsum.photos/seed/j1-4/800/800',
    ],
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
    images: [
      'https://picsum.photos/seed/dunklow/800/800',
      'https://picsum.photos/seed/panda2/800/800',
      'https://picsum.photos/seed/panda3/800/800',
    ],
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
    images: [
      'https://picsum.photos/seed/yeezy/800/800',
      'https://picsum.photos/seed/yeezy2/800/800',
      'https://picsum.photos/seed/yeezy3/800/800',
    ],
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
    images: [
      'https://picsum.photos/seed/nb2002r/800/800',
      'https://picsum.photos/seed/nb2/800/800',
    ],
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
    images: [
      'https://picsum.photos/seed/kobe6m/800/800',
      'https://picsum.photos/seed/kobe2/800/800',
    ],
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
    images: [
      'https://picsum.photos/seed/jordan4/800/800',
      'https://picsum.photos/seed/j4-2/800/800',
    ],
    availableSizes: ['42.5', '44', '45', '46'],
  },
]