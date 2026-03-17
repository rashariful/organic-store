import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, Phone, Mail, MapPin, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useStore } from '@/contexts/StoreContext';
import { Badge } from '@/components/ui/badge';

export function Header() {
  const { state, getTotalItems } = useStore();
  console.log(state, getTotalItems)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+880 18502 73117</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>info@organicstore.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Truck className="h-3 w-3" />
                <span>Free shipping on orders over $50</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold bg-gradient-organic bg-clip-text text-transparent">
                🌿 OrganicStore
              </span>
            </Link>

            {/* Search */}
            <div className="hidden md:flex items-center space-x-2 flex-1 max-w-2xl mx-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search for organic honey, ghee, oils, nuts..." 
                  className="pl-10 h-12 bg-muted/50 border ring-primary-foreground focus-visible:ring-2 focus-visible:ring-primary"
                />
                <Button size="sm" className="absolute right-2 top-1/2 -translate-y-1/2">
                  Search
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {state.isAuthenticated ? (
                <div className="hidden md:flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">Hi, {state.user?.name}</span>
                </div>
              ) : (
                <Link to="/auth/login">
                  <Button variant="ghost" size="sm" className="hidden md:flex">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                </Link>
              )}

              <Link to="/wishlist" className="relative">
                <Button variant="ghost" size="icon" className="h-12 w-12">
                  <Heart className="h-5 w-5" />
                  {state.wishlist.length > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                    >
                      {state.wishlist.length}
                    </Badge>
                  )}
                </Button>
              </Link>

              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon" className="h-12 w-12">
                  <ShoppingCart className="h-5 w-5" />
                    {state.cart.length > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                    >
                      {state.cart.length}
                    </Badge>
                  )}
                  {/* {getTotalItems() > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                    >
                      {getTotalItems()}
                    </Badge>
                  )} */}
                </Button>
              </Link>

              <Button variant="ghost" size="icon" className="md:hidden h-12 w-12">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-sage-green border-b">
        <div className="container mx-auto px-4">
          <nav className="flex h-12 items-center justify-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-forest-green ${
                  isActive ? 'text-forest-green font-semibold' : 'text-warm-brown'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-forest-green ${
                  isActive ? 'text-forest-green font-semibold' : 'text-warm-brown'
                }`
              }
            >
              All Products
            </NavLink>
            <NavLink 
              to="/products?category=honey" 
              className="text-sm font-medium text-warm-brown transition-colors hover:text-forest-green"
            >
              Honey & Sweeteners
            </NavLink>
            <NavLink 
              to="/products?category=oils" 
              className="text-sm font-medium text-warm-brown transition-colors hover:text-forest-green"
            >
              Organic Oils
            </NavLink>
            <NavLink 
              to="/products?category=ghee" 
              className="text-sm font-medium text-warm-brown transition-colors hover:text-forest-green"
            >
              Pure Ghee
            </NavLink>
            <NavLink 
              to="/products?category=nuts" 
              className="text-sm font-medium text-warm-brown transition-colors hover:text-forest-green"
            >
              Dry Fruits & Nuts
            </NavLink>
            <NavLink 
              to="/products?category=spices" 
              className="text-sm font-medium text-warm-brown transition-colors hover:text-forest-green"
            >
              Spices & Powders
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}