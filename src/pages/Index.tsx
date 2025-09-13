import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES, getTopSellingProducts, getHotProducts, getBestPriceProducts, getBestProducts } from '@/lib/products';
import heroImage from '@/assets/organic-farm-hero.jpg';

const Index = () => {
  const featuredProducts = PRODUCTS.filter(product => product.featured);
  const topSellingProducts = getTopSellingProducts();
  const hotProducts = getHotProducts();
  const bestPriceProducts = getBestPriceProducts();
  const bestProducts = getBestProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-sage-green text-forest-green">
            100% Organic & Natural
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pure Nature,
            <br />
            <span className="text-sage-green">Pure Health</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream">
            Discover the finest organic products sourced directly from trusted farmers. 
            From pure honey to traditional ghee, experience nature's goodness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-organic hover:shadow-organic text-lg px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-forest-green hover:bg-white hover:text-forest-green/90">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked organic essentials that bring nature's purity to your table
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="px-8">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">Top Selling</Badge>
            <h2 className="text-4xl font-bold mb-4">Customer Favorites</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Most loved organic products by our happy customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Hot Products - Limited Time Offers */}
      <section className="py-16 bg-gradient-organic">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sage-green text-forest-green">🔥 Hot Deals</Badge>
            <h2 className="text-4xl font-bold text-natural-white mb-4">Limited Time Offers</h2>
            <p className="text-xl text-cream max-w-2xl mx-auto">
              Grab these amazing deals before they're gone!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Price Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">💰 Best Value</Badge>
            <h2 className="text-4xl font-bold mb-4">Unbeatable Prices</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium quality at prices that won't break the bank
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestPriceProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-sage-green">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-green mb-4">Shop by Category</h2>
            <p className="text-xl text-warm-brown max-w-2xl mx-auto">
              Explore our carefully curated categories of premium organic products
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map((category) => (
              <Link key={category.id} to={`/products?category=${category.id}`}>
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-organic hover:-translate-y-2 bg-natural-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-forest-green">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Products - Premium Selection */}
      <section className="py-16 bg-natural-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-forest-green text-natural-white">⭐ Premium Selection</Badge>
            <h2 className="text-4xl font-bold mb-4">Best Organic Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked premium organic products that represent the finest quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Organic?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that pure, organic products make in your daily life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-organic rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-organic transition-all duration-300">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
              <p className="text-muted-foreground">
                No chemicals, pesticides, or artificial additives. Pure nature at its finest.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-organic rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-organic transition-all duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
              <p className="text-muted-foreground">
                All products are certified organic and meet the highest quality standards.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-organic rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-organic transition-all duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Delivery</h3>
              <p className="text-muted-foreground">
                Farm-fresh products delivered directly to your doorstep with care.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-organic rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-organic transition-all duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Hand-selected products from trusted farmers who care about quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of happy customers who trust our organic products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-natural-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The honey is absolutely divine! You can taste the purity in every spoonful. 
                  My family loves it and we've made it our go-to sweetener."
                </p>
                <div className="font-semibold">- Sarah Johnson</div>
              </CardContent>
            </Card>
            
            <Card className="bg-natural-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Best ghee I've ever tasted! The traditional preparation method really makes 
                  a difference. Perfect for all my Indian cooking."
                </p>
                <div className="font-semibold">- Rajesh Patel</div>
              </CardContent>
            </Card>
            
            <Card className="bg-natural-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Fast delivery and excellent packaging. Everything arrived fresh and 
                  the quality exceeded my expectations. Highly recommended!"
                </p>
                <div className="font-semibold">- Emily Chen</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-organic">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated with Organic Goodness
          </h2>
          <p className="text-xl text-cream mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for organic tips, new product launches, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-sage-green"
            />
            <Button size="lg" className="bg-sage-green text-forest-green hover:bg-cream">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;