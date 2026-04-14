"use client";
import React, { useState } from "react";
import ShopSidebar from "@/components/ShopSidebar"; // আপনার ফাইল পাথ অনুযায়ী ঠিক করে নিন
import ShopHeader from "@/components/ShopHeader";   // আপনার ফাইল পাথ অনুযায়ী ঠিক করে নিন
import ProductList from "@/components/ProductList"; // আপনার ফাইল পাথ অনুযায়ী ঠিক করে নিন
import { motion } from "framer-motion";

const ShopPage = () => {
  // লেআউট স্টেট (grid4, grid3, বা list) যা Header থেকে কন্ট্রোল হবে
  const [viewLayout, setViewLayout] = useState("grid4");

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 py-8 md:py-12">
        
        {/* শপ পেজ কন্টেনার */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* ১. বাম পাশের সাইডবার (২৫% জায়গা নিবে) */}
          <aside className="w-full lg:w-1/4 shrink-0">
            <div className="sticky top-24">
              <ShopSidebar />
            </div>
          </aside>

          {/* ২. ডান পাশের মেইন কন্টেন্ট (৭৫% জায়গা নিবে) */}
          <section className="flex-grow w-full">
            
            {/* উপরের হেডার: রেজাল্ট কাউন্ট এবং লেআউট টোগলার */}
            <ShopHeader setViewLayout={setViewLayout} />

            {/* প্রোডাক্ট লিস্ট: হেডার থেকে পাওয়া viewLayout অনুযায়ী রেন্ডার হবে */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductList viewLayout={viewLayout} />
            </motion.div>

            {/* প্যাগিনেশন বা লোড মোর বাটন (অপশনাল) */}
            <div className="mt-16 flex justify-center">
              <button className="px-8 py-3 bg-white dark:bg-zinc-900 border-2 border-slate-100 dark:border-zinc-800 text-slate-800 dark:text-white font-black rounded-xl hover:border-red-600 hover:text-red-600 transition-all uppercase tracking-tighter text-sm">
                Load More Products
              </button>
            </div>

          </section>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;