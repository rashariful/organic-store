import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Shield, Truck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PRODUCTS } from '@/lib/products';
import { useStore } from '@/contexts/StoreContext';
import { useGtmEvents } from '@/hooks/useGtmEvents';

const ProductDetail = () => {
  const { trackContentView } = useGtmEvents();
useEffect(() => {
  trackContentView({
    id: product.id,
    name: product.name,
    price: product.price,
  });
}, []);

  const { id } = useParams();
  const { addToCart, addToWishlist, state } = useStore();
  
  const product = PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const isInWishlist = state.wishlist.some(item => item.id === product.id);


  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => window.history.back()}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image.startsWith('/') ? product.image : `/src/assets/${product.image}`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {product.organic && (
                <Badge className="bg-forest-green text-natural-white">
                  Certified Organic
                </Badge>
              )}
              <Badge variant="outline">
                {product.category}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <span className="text-muted-foreground">
                {product.weight}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(4.8) · 124 reviews</span>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Health Benefits</h3>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-forest-green rounded-full" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="flex gap-4">
            <Button
              onClick={() => addToCart(product)}
              className="flex-1 bg-gradient-organic hover:shadow-organic"
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
            <Button
              variant="outline"
              onClick={() => addToWishlist(product)}
              className={isInWishlist ? 'text-red-500 border-red-200' : ''}
            >
              <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-red-500' : ''}`} />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-forest-green" />
                <p className="text-sm font-medium">Certified Organic</p>
                <p className="text-xs text-muted-foreground">100% Natural</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-forest-green" />
                <p className="text-sm font-medium">Free Delivery</p>
                <p className="text-xs text-muted-foreground">Orders over $25</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;