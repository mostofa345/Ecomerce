"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // লোগো বাদে বাকি সব মেনু ইংলিশে
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Panjabi", href: "/category/panjabi" },
    { name: "Collection", href: "/collection" },
    { name: "Become a Seller", href: "/become-seller" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* ১. লোগো সেকশন - বাংলা ক্যারেক্টারে "আঁঠালি" */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="bg-orange-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-serif">
                আঁঠা<span className="text-orange-600">লি</span>
              </span>
            </Link>
          </div>

          {/* ২. ডেস্কটপ মেনু (English) */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* ৩. রাইট সাইড কন্ট্রোলস (English) */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="text-slate-600 dark:text-slate-300 hover:text-orange-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            <ThemeToggle />
            
            <Link href="/cart" className="relative p-2 text-slate-700 dark:text-slate-200">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-slate-900 dark:bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-slate-950">
                0
              </span>
            </Link>

            <Link href="/signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-sm font-bold transition-all"
              >
                Sign In
              </motion.button>
            </Link>
          </div>

          {/* ৪. মোবাইল মেনু বাটন */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-900 dark:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ৫. মোবাইল ড্রপডাউন মেনু */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-semibold text-slate-800 dark:text-slate-200"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Link
                  href="/signin"
                  className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-center font-bold"
                >
                  Sign In
                </Link>
                <Link
                  href="/cart"
                  className="w-full py-3 rounded-xl bg-orange-600 text-white text-center font-bold"
                >
                  View Cart (0)
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar