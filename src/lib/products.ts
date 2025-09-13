export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'honey' | 'oils' | 'ghee' | 'nuts' | 'powders' | 'spices';
  description: string;
  benefits: string[];
  weight: string;
  inStock: boolean;
  featured: boolean;
  organic: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Pure Wildflower Honey',
    price: 24.99,
    originalPrice: 29.99,
    image: 'organic-honey.jpg',
    category: 'honey',
    description: 'Raw, unprocessed wildflower honey sourced directly from local organic beekeepers. Rich in antioxidants and natural enzymes.',
    benefits: ['Rich in antioxidants', 'Natural energy boost', 'Antibacterial properties', 'Supports digestive health'],
    weight: '500g',
    inStock: true,
    featured: true,
    organic: true,
  },
  {
    id: '2',
    name: 'Traditional Ghee',
    price: 32.99,
    image: 'organic-ghee.jpg',
    category: 'ghee',
    description: 'Premium quality ghee made from grass-fed cow milk using traditional churning methods. Rich, golden, and aromatic.',
    benefits: ['High smoke point for cooking', 'Rich in vitamins A, D, E, K', 'Supports healthy digestion', 'Traditional Ayurvedic superfood'],
    weight: '450g',
    inStock: true,
    featured: true,
    organic: true,
  },
  {
    id: '3',
    name: 'Cold-Pressed Mustard Oil',
    price: 18.99,
    originalPrice: 22.99,
    image: 'mustard-oil.jpg',
    category: 'oils',
    description: 'Authentic cold-pressed mustard oil with a distinctive pungent flavor. Perfect for traditional cooking and health benefits.',
    benefits: ['Rich in omega-3 fatty acids', 'Natural antibacterial properties', 'Supports heart health', 'Traditional cooking oil'],
    weight: '1L',
    inStock: true,
    featured: true,
    organic: true,
  },
  {
    id: '4',
    name: 'Raw Almonds',
    price: 28.99,
    image: '/placeholder.svg',
    category: 'nuts',
    description: 'Premium quality raw almonds, naturally grown without pesticides. Perfect for snacking or adding to your recipes.',
    benefits: ['High in protein and fiber', 'Rich in vitamin E', 'Supports brain health', 'Heart-healthy fats'],
    weight: '500g',
    inStock: true,
    featured: false,
    organic: true,
  },
  {
    id: '5',
    name: 'Turmeric Powder',
    price: 12.99,
    image: '/placeholder.svg',
    category: 'powders',
    description: 'Fresh ground turmeric powder from organically grown turmeric roots. Known for its anti-inflammatory properties.',
    benefits: ['Natural anti-inflammatory', 'Rich in curcumin', 'Supports immune system', 'Traditional healing spice'],
    weight: '200g',
    inStock: true,
    featured: false,
    organic: true,
  },
  {
    id: '6',
    name: 'Organic Garam Masala',
    price: 15.99,
    image: '/placeholder.svg',
    category: 'spices',
    description: 'Aromatic blend of traditional Indian spices, freshly ground and perfectly balanced for authentic flavors.',
    benefits: ['Digestive aid', 'Rich in antioxidants', 'Enhances metabolism', 'Traditional spice blend'],
    weight: '100g',
    inStock: true,
    featured: false,
    organic: true,
  },
];

export const CATEGORIES = [
  { id: 'honey', name: 'Honey & Sweeteners', icon: '🍯' },
  { id: 'oils', name: 'Organic Oils', icon: '🫒' },
  { id: 'ghee', name: 'Pure Ghee', icon: '🧈' },
  { id: 'nuts', name: 'Dry Fruits & Nuts', icon: '🥜' },
  { id: 'powders', name: 'Herbal Powders', icon: '🌿' },
  { id: 'spices', name: 'Organic Spices', icon: '🌶️' },
];