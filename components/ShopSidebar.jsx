"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Rating, Slider } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronRight, Filter } from "lucide-react";

const ShopSidebar = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const categories = [
    { name: "Panjabi", count: 12, slug: "panjabi" },
    { name: "Polo Shirt", count: 8, slug: "polo-shirt" },
    { name: "T-Shirt", count: 25, slug: "t-shirt" },
    { name: "Formal Shirt", count: 10, slug: "formal-shirt" },
    { name: "Denim Jeans", count: 15, slug: "denim-jeans" },
    { name: "Footwear", count: 20, slug: "sneakers" },
  ];

  return (
    <div className="flex flex-col gap-8 p-1">
      {/* ১. Category Filtering */}
      <section>
        <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight mb-4 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-red-600 rounded-full"></span>
          Categories
        </h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={`/category/${cat.slug}`}
              className="flex items-center justify-between group hover:text-red-600 transition-colors py-1"
            >
              <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <ChevronRight size={14} /> {cat.name}
              </span>
              <span className="text-xs bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full text-slate-500 font-bold">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ২. Price Filtering */}
      <section>
        <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight mb-4 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-red-600 rounded-full"></span>
          Price Filter
        </h3>
        <div className="px-2">
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={100}
            max={10000}
            sx={{
              color: '#dc2626', // red-600
              '& .MuiSlider-thumb': {
                backgroundColor: '#fff',
                border: '2px solid currentColor',
              },
            }}
          />
          <div className="flex justify-between items-center mt-2 text-sm font-bold text-slate-600 dark:text-slate-400">
            <span>৳{priceRange[0]}</span>
            <span>৳{priceRange[1]}</span>
          </div>
        </div>
      </section>

      {/* ৩. Rating Filtering */}
      <section>
        <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight mb-4 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-red-600 rounded-full"></span>
          Ratings
        </h3>
        <div className="flex flex-col gap-3">
          {[5, 4, 3, 2, 1].map((star) => (
            <label key={star} className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 accent-red-600 cursor-pointer" />
              <Rating value={star} readOnly size="small" />
              {star < 5 && <span className="text-xs text-slate-400 font-bold group-hover:text-red-600 transition-colors">& Up</span>}
            </label>
          ))}
        </div>
      </section>

      {/* ৪. Ads Banner Component */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl bg-zinc-900 h-64 flex flex-col justify-end p-6 border border-zinc-800 group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        {/* আপনি আপনার অ্যাড ইমেজ এখানে দিতে পারেন */}
        <img 
          src="/panjabi1.jpg" 
          alt="Ad" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="relative z-20 text-center">
          <h4 className="text-white font-black text-xl leading-tight">আঁঠালি ঈদ অফার!</h4>
          <p className="text-red-500 font-bold text-sm mb-3">৫০% পর্যন্ত ডিসকাউন্ট</p>
          <button className="w-full py-2 bg-red-600 text-white text-xs font-black rounded-lg uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
            Shop Now
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default ShopSidebar;