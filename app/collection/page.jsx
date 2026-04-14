"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Filter, Grid, Heart, List, ShoppingCart, Star } from "lucide-react";

// অ্যানিমেশন ভ্যারিয়েন্ট
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const CollectionPage = () => {
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // ডামি প্রোডাক্ট ডেটা (আপনার আগের ইমেজগুলো ব্যবহার করা হয়েছে)
  const products = [
    { id: 1, title: "Premium Silk Panjabi", price: 3500, oldPrice: 4800, img: "/panjabi1.jpg", rating: 5, category: "Panjabi" },
    { id: 2, title: "Designer Cotton Panjabi", price: 2200, oldPrice: 2800, img: "/panjabi2.jpg", rating: 4, category: "Panjabi" },
    { id: 3, title: "Royal Party Panjabi", price: 4200, oldPrice: 5500, img: "/panjabi3.jpg", rating: 5, category: "Panjabi" },
    { id: 4, title: "Casual Comfort T-Shirt", price: 850, oldPrice: 1200, img: "/t-shart.jpg", rating: 4, category: "T-Shirt" },
    { id: 5, title: "Polo Fit T-Shirt", price: 1100, oldPrice: 1600, img: "/t-shart2.jpg", rating: 5, category: "Polo" },
    { id: 6, title: "Summer Special T-Shirt", price: 750, oldPrice: 990, img: "/t-shart1.jpg", rating: 3, category: "T-Shirt" },
    { id: 7, title: "Classic Gabardine Pant", price: 1800, oldPrice: 2400, img: "/gabardine.png", rating: 4, category: "Pant" },
    { id: 8, title: "Premium Silk Panjabi V2", price: 3800, oldPrice: 4900, img: "/panjabi1.jpg", rating: 5, category: "Panjabi" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-950 transition-colors duration-300">
      {/* --- Banner / Breadcrumb --- */}
      <div className="bg-slate-900 dark:bg-zinc-900 py-12 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic"
        >
          Our <span className="text-red-600">Collection</span>
        </motion.h1>
        <p className="text-slate-400 mt-2 font-bold uppercase tracking-widest text-xs">Home / All Products</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        
        {/* --- Sidebar Filter (Daraz Style) --- */}
        <aside className="w-full lg:w-72 shrink-0 space-y-8">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white">
              <Filter size={20} className="text-red-600" />
              <h2 className="font-black uppercase tracking-tight">Filters</h2>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Categories</h3>
              <div className="space-y-3">
                {["All Collection", "Panjabi", "T-Shirt", "Polo Shirt", "Gabardine"].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-red-600 rounded" />
                    <span className="text-sm font-bold text-slate-600 dark:text-zinc-400 group-hover:text-red-600 transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Price Range</h3>
              <div className="flex items-center gap-2">
                <input type="number" placeholder="Min" className="w-full h-10 px-3 rounded-lg bg-slate-50 dark:bg-zinc-800 text-sm border-none focus:ring-1 focus:ring-red-600" />
                <span className="text-slate-400">-</span>
                <input type="number" placeholder="Max" className="w-full h-10 px-3 rounded-lg bg-slate-50 dark:bg-zinc-800 text-sm border-none focus:ring-1 focus:ring-red-600" />
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <h3 className="text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Ratings</h3>
              {[5, 4, 3].map((star) => (
                <div key={star} className="flex items-center gap-2 mb-2 cursor-pointer hover:opacity-70">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < star ? "currentColor" : "none"} />)}
                  </div>
                  <span className="text-xs font-bold text-slate-500">& Up</span>
                </div>
              ))}
            </div>
          </motion.div>
        </aside>

        {/* --- Main Content --- */}
        <main className="flex-grow">
          {/* Top Bar (Sorting & View) */}
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm font-bold text-slate-500 uppercase">Showing <span className="text-slate-900 dark:text-white">{products.length} Items</span></p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-800 p-1 rounded-xl">
                <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white dark:bg-zinc-700 shadow-md text-red-600" : "text-slate-400"}`}><Grid size={18}/></button>
                <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white dark:bg-zinc-700 shadow-md text-red-600" : "text-slate-400"}`}><List size={18}/></button>
              </div>
              
              <div className="relative group">
                <button className="flex items-center gap-2 h-10 px-4 bg-slate-50 dark:bg-zinc-800 rounded-xl text-sm font-bold text-slate-700 dark:text-zinc-300">
                  Sort By: Newest <ChevronDown size={16}/>
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
          >
            <AnimatePresence>
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className={`group relative bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${viewMode === "grid" ? "rounded-[2rem] p-3" : "rounded-3xl p-5 flex flex-row gap-6"}`}
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-zinc-800 ${viewMode === "grid" ? "aspect-[3/4] w-full" : "w-48 h-48 shrink-0"}`}>
                    <Image src={product.img} alt={product.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-xl"><Heart size={18}/></motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-xl"><ShoppingCart size={18}/></motion.button>
                    </div>

                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest shadow-lg">
                      Save {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={`flex flex-col justify-center ${viewMode === "grid" ? "mt-4 px-2" : "flex-grow"}`}>
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-1">{product.category}</span>
                    <Link href={`/product-zoom/${product.id}`}>
                      <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-tight line-clamp-1 group-hover:text-red-600 transition-colors">
                        {product.title}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center gap-1 my-2">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} size={12} fill={i < product.rating ? "#f59e0b" : "none"} className={i < product.rating ? "text-yellow-500" : "text-slate-300"} />
                       ))}
                       <span className="text-[10px] font-bold text-slate-400">(24)</span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">৳{product.price}</span>
                      <span className="text-xs font-bold text-slate-400 line-through">৳{product.oldPrice}</span>
                    </div>

                    {viewMode === "list" && (
                      <p className="text-sm text-slate-500 mt-4 line-clamp-2 font-medium">
                        This is a premium quality {product.category} designed for comfort and style. Perfect for any traditional or casual occasion.
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-white dark:bg-zinc-900 border-2 border-slate-100 dark:border-zinc-800 text-slate-900 dark:text-white font-black uppercase tracking-tighter rounded-2xl hover:border-red-600 transition-all shadow-xl"
            >
              Load More Products
            </motion.button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CollectionPage;