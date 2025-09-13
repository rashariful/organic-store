import honey from "@/assets/organic-honey.jpg"
import ghee from "@/assets/organic-ghee.jpg"
import mustard from "@/assets/mustard-oil.jpg"
import farm from "@/assets/organic-farm-hero.jpg"
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'honey' | 'oils' | 'ghee' | 'nuts' | 'powders' | 'spices' | 'grains';
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
    image: honey,
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
    image: ghee,
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
    image: mustard,
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
    image: farm,
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
  // Additional products for more sections
  {
    id: '7',
    name: 'Premium Basmati Rice',
    price: 19.99,
    originalPrice: 24.99,
    image: '/placeholder.svg',
    category: 'grains',
    description: 'Aged organic basmati rice with long grains and aromatic fragrance. Perfect for biryanis and pilafs.',
    benefits: ['High in fiber', 'Gluten-free', 'Long grain variety', 'Aged for better taste'],
    weight: '1kg',
    inStock: true,
    featured: false,
    organic: true,
  },
  {
    id: '8',
    name: 'Himalayan Pink Salt',
    price: 14.99,
    image: '/placeholder.svg',
    category: 'spices',
    description: 'Pure Himalayan pink salt crystals, naturally mined and rich in essential minerals.',
    benefits: ['Rich in minerals', 'Natural detoxifier', 'Supports hydration', 'Pure and unprocessed'],
    weight: '500g',
    inStock: true,
    featured: false,
    organic: true,
  },
  {
    id: '9',
    name: 'Organic Coconut Oil',
    price: 22.99,
    originalPrice: 26.99,
    image: '/placeholder.svg',
    category: 'oils',
    description: 'Cold-pressed virgin coconut oil with natural coconut aroma. Perfect for cooking and skincare.',
    benefits: ['High in MCTs', 'Natural moisturizer', 'Antimicrobial properties', 'Heart-healthy'],
    weight: '500ml',
    inStock: true,
    featured: false,
    organic: true,
  },
  {
    id: '10',
    name: 'Raw Cashews',
    price: 34.99,
    image: '/placeholder.svg',
    category: 'nuts',
    description: 'Premium quality raw cashews, naturally sweet and creamy. Perfect for snacking and cooking.',
    benefits: ['Rich in healthy fats', 'Good source of protein', 'Contains magnesium', 'Heart-healthy'],
    weight: '500g',
    inStock: true,
    featured: false,
    organic: true,
  },
  {
    id: '11',
    name: 'Organic Jaggery',
    price: 11.99,
    image: '/placeholder.svg',
    category: 'honey',
    description: 'Traditional organic jaggery made from sugarcane. A healthy alternative to refined sugar.',
    benefits: ['Rich in iron', 'Natural sweetener', 'Aids digestion', 'Traditional superfood'],
    weight: '1kg',
    inStock: true,
    featured: false,
    organic: true,
  },
  {
    id: '12',
    name: 'Herbal Tea Blend',
    price: 16.99,
    image: '/placeholder.svg',
    category: 'powders',
    description: 'Soothing herbal tea blend with chamomile, tulsi, and ginger. Perfect for relaxation.',
    benefits: ['Stress relief', 'Improves digestion', 'Natural antioxidants', 'Caffeine-free'],
    weight: '100g',
    inStock: true,
    featured: false,
    organic: true,
  },
];

// Helper functions to categorize products
export const getTopSellingProducts = () => PRODUCTS.slice(0, 6);
export const getHotProducts = () => PRODUCTS.filter(p => p.originalPrice).slice(0, 4);
export const getBestPriceProducts = () => PRODUCTS.filter(p => p.price < 20).slice(0, 4);
export const getBestProducts = () => PRODUCTS.filter(p => p.organic && p.inStock).slice(0, 6);

export const CATEGORIES = [
  { id: 'honey', name: 'Honey & Sweeteners', icon: '🍯' },
  { id: 'oils', name: 'Organic Oils', icon: '🫒' },
  { id: 'ghee', name: 'Pure Ghee', icon: '🧈' },
  { id: 'nuts', name: 'Dry Fruits & Nuts', icon: '🥜' },
  { id: 'powders', name: 'Herbal Powders', icon: '🌿' },
  { id: 'spices', name: 'Organic Spices', icon: '🌶️' },
];