"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { name: "All Panjabis", href: "/category/panjabi" },
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Pajamas", href: "/category/pajama" },
      { name: "Accessories", href: "/category/accessories" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Become a Seller", href: "/become-seller" },
      { name: "Affiliate Program", href: "/affiliate" },
      { name: "Contact Us", href: "/contact" },
    ],
    support: [
      { name: "Order Tracking", href: "/track-order" },
      { name: "Returns & Exchanges", href: "/returns" },
      { name: "Shipping Policy", href: "/shipping" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  }

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* ১. লোগো এবং ব্র্যান্ড ডেসক্রিপশন */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-serif">
                আঁঠা<span className="text-orange-600">লি</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Discover the essence of Bengali tradition with আঁঠালি. We bring you the finest collection of men's fashion, blending heritage with modern elegance.
            </p>
            
            {/* সোশ্যাল আইকনস */}
            <div className="flex space-x-4 mt-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, color: "#ea580c" }}
                  className="p-2 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 text-slate-600 dark:text-slate-400 shadow-sm"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ২. লিঙ্ক কলামসমূহ */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-6">Shop</h3>
            <ul className="space-y-4">
              {footerLinks.shop.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-orange-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-orange-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ৩. কন্টাক্ট ইনফো */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Subscribe to get updates on new arrivals.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
              />
              <button className="absolute right-2 top-2 p-1.5 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

        <hr className="border-gray-200 dark:border-gray-800 mb-8" />

        {/* ৪. কপিরাইট এবং ফুটনোট */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500 dark:text-slate-500 font-medium">
          <p>© {currentYear} আঁঠালি (Anthali) Fashion. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <p className="flex items-center">
              Developed by <span className="ml-1 text-slate-900 dark:text-white font-bold">Your Company</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer