import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/products';
import { useStore } from '@/contexts/StoreContext';
import { useGtmEvents } from '@/hooks/useGtmEvents';



interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { trackAddToCart,trackAddToWishlist } = useGtmEvents(); // ✅ add this
  const { addToCart, addToWishlist, state } = useStore();
  const isInWishlist = state.wishlist.some(item => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
     // ✅ GTM EVENT FIRE
    trackAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
  category: product.category,   
 });
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    addToWishlist(product);
    trackAddToWishlist({
  id: product.id,
  name: product.name,
  price: product.price,
  category: product.category,
});
  };

  return (
    <Link to={`/products/${product.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-1 bg-gradient-card">
        <div className="relative overflow-hidden">
          <img 
            src={product.image.startsWith('/') ? product.image : `/src/assets/${product.image}`}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {product.organic && (
            <Badge 
              className="absolute top-2 left-2 bg-forest-green text-natural-white"
            >
              Organic
            </Badge>
          )}

          {product.originalPrice && (
            <Badge 
              variant="destructive" 
              className="absolute top-2 right-2"
            >
              Sale
            </Badge>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={handleAddToWishlist}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background"
          >
            <Heart 
              className={`h-4 w-4 ${isInWishlist ? 'fill-red-500 text-red-500' : ''}`} 
            />
          </Button>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-primary">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.weight}
            </span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
          </div>

          <Button 
            onClick={handleAddToCart}
            className="w-full bg-gradient-organic hover:shadow-organic transition-all duration-300"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}