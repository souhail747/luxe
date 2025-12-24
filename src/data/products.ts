export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  sku: string;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  featured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Artisan Leather Tote',
    description: 'Handcrafted from premium full-grain leather, this timeless tote combines elegance with everyday functionality. Features brass hardware, cotton lining, and multiple interior pockets.',
    price: 295,
    originalPrice: 350,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
    ],
    category: 'accessories',
    tags: ['leather', 'bags', 'handmade'],
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    stockCount: 23,
    sku: 'LT-001',
    colors: [
      { name: 'Cognac', hex: '#8B4513' },
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Tan', hex: '#D2B48C' },
    ],
    featured: true,
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Minimalist Ceramic Watch',
    description: 'A stunning timepiece featuring a scratch-resistant ceramic case, sapphire crystal, and Swiss movement. Water-resistant to 50 meters.',
    price: 485,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800',
    ],
    category: 'accessories',
    tags: ['watches', 'minimalist', 'luxury'],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    stockCount: 15,
    sku: 'CW-002',
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Rose Gold', hex: '#B76E79' },
    ],
    featured: true,
    isNew: true,
  },
  {
    id: '3',
    name: 'Cashmere Blend Overcoat',
    description: 'Luxuriously soft overcoat crafted from a premium cashmere-wool blend. Features a classic notched lapel, single-breasted design, and silk lining.',
    price: 895,
    originalPrice: 1100,
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
    ],
    category: 'fashion',
    tags: ['coats', 'cashmere', 'winter'],
    rating: 4.7,
    reviewCount: 64,
    inStock: true,
    stockCount: 8,
    sku: 'CO-003',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Navy', hex: '#000080' },
    ],
    featured: true,
  },
  {
    id: '4',
    name: 'Wireless ANC Headphones',
    description: 'Premium over-ear headphones with adaptive noise cancellation, 40-hour battery life, and Hi-Res Audio certification. Handcrafted with genuine leather ear cushions.',
    price: 379,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800',
    ],
    category: 'electronics',
    tags: ['audio', 'headphones', 'wireless'],
    rating: 4.8,
    reviewCount: 312,
    inStock: true,
    stockCount: 45,
    sku: 'HP-004',
    colors: [
      { name: 'Midnight Black', hex: '#191919' },
      { name: 'Silver', hex: '#C0C0C0' },
    ],
    isBestSeller: true,
  },
  {
    id: '5',
    name: 'Organic Cotton Loungewear Set',
    description: 'Ultra-soft loungewear set made from GOTS-certified organic cotton. Includes relaxed-fit top and matching pants with adjustable drawstring.',
    price: 145,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800',
    ],
    category: 'fashion',
    tags: ['loungewear', 'organic', 'comfort'],
    rating: 4.6,
    reviewCount: 78,
    inStock: true,
    stockCount: 32,
    sku: 'LW-005',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Oatmeal', hex: '#E8DCC4' },
      { name: 'Sage', hex: '#9DC183' },
      { name: 'Dusty Rose', hex: '#DCAE96' },
    ],
    isNew: true,
  },
  {
    id: '6',
    name: 'Artisan Scented Candle Set',
    description: 'Hand-poured soy wax candles featuring three signature scents: Mediterranean Fig, Wild Lavender, and Sandalwood Noir. Burns for 45+ hours each.',
    price: 89,
    images: [
      'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=800',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800',
    ],
    category: 'home',
    tags: ['candles', 'home decor', 'gifts'],
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    stockCount: 67,
    sku: 'SC-006',
    featured: true,
    isBestSeller: true,
  },
  {
    id: '7',
    name: 'Smart Fitness Tracker',
    description: 'Advanced fitness tracker with ECG monitoring, blood oxygen sensing, and GPS. Features a stunning AMOLED display and 14-day battery life.',
    price: 249,
    originalPrice: 299,
    images: [
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800',
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800',
    ],
    category: 'electronics',
    tags: ['fitness', 'wearables', 'health'],
    rating: 4.5,
    reviewCount: 456,
    inStock: true,
    stockCount: 89,
    sku: 'FT-007',
    colors: [
      { name: 'Obsidian', hex: '#0B1215' },
      { name: 'Arctic White', hex: '#F8F8FF' },
      { name: 'Forest Green', hex: '#228B22' },
    ],
  },
  {
    id: '8',
    name: 'Premium Skincare Essentials',
    description: 'Complete skincare routine featuring cleanser, serum, moisturizer, and SPF. Formulated with natural ingredients and suitable for all skin types.',
    price: 175,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
      'https://images.unsplash.com/photo-1570194065650-d99fb4d38c59?w=800',
    ],
    category: 'beauty',
    tags: ['skincare', 'natural', 'beauty'],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    stockCount: 54,
    sku: 'SK-008',
    isNew: true,
  },
{
    id: '9',
    name: 'Premium Skincare ',
    description: 'Complete skincare routine featuring cleanser, serum, moisturizer, and SPF. Formulated with natural ingredients and suitable for all skin types.',
    price: 750,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
      'https://images.unsplash.com/photo-1570194065650-d99fb4d38c59?w=800',
    ],
    category: 'beauty',
    tags: ['skincare', 'natural', 'beauty'],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    stockCount: 54,
    sku: 'SK-008',
    isNew: true,
  },
];

export const categories = [
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
    productCount: 156,
  },
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800',
    productCount: 89,
  },
  {
    id: 'home',
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    productCount: 234,
  },
  {
    id: 'beauty',
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
    productCount: 112,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800',
    productCount: 78,
  },
  {
    id: 'sports',
    name: 'Sports',
image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
    ,productCount: 45,
  },
];
