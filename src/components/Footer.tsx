import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-forest-green text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-sage-green">
                🌿 OrganicStore
              </span>
            </Link>
            <p className="text-cream/80 leading-relaxed">
              Your trusted source for 100% organic and natural products. From
              pure honey to traditional ghee, we bring nature's goodness
              directly to your table.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-cream hover:text-sage-green hover:bg-cream/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-cream hover:text-sage-green hover:bg-cream/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-cream hover:text-sage-green hover:bg-cream/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-cream hover:text-sage-green hover:bg-cream/10"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sage-green">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=honey"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  Honey & Sweeteners
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=oils"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  Organic Oils
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=ghee"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  Pure Ghee
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=nuts"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  Dry Fruits & Nuts
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=spices"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  Spices & Powders
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sage-green">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-cream/80 hover:text-sage-green transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sage-green">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-sage-green" />
                <span className="text-cream/80">+880 1850 273 117</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sage-green" />
                <span className="text-cream/80">info@organicstore.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-sage-green mt-0.5" />
                <span className="text-cream/80">
                  House-08, Road-05, Nikunja-02
                  <br />
                  Dhaka Bangladesh
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium text-sage-green mb-2">Newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 focus-visible:ring-sage-green"
                />
                <Button
                  size="sm"
                  className="bg-sage-green text-forest-green hover:bg-cream"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-cream/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-cream/80 text-sm text-center py-4">
            © {new Date().getFullYear()} OrganicStore. All rights reserved. Made
            with <Heart className="inline h-3 w-3 text-sage-green" /> for
            organic living. <br />
            Designed & Developed by{" "}
            <a
              href="https://www.digitalagencypark.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-green hover:underline font-medium"
            >
              Digital Agency Park
            </a>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-cream/80 hover:text-sage-green transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-cream/80 hover:text-sage-green transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-cream/80 hover:text-sage-green transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
