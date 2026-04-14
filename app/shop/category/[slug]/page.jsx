"use client";
import ProductList from "@/components/ProductList";
import React, { useState } from "react";
import ShopHeader from "@/components/ShopHeader";
import ShopSidebar from "@/components/ShopSidebar";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  // 1. URL parameter theke slug ber kora (e.g., 'panjabi' ba 't-shirt')
  const params = useParams();
  const slug = params.slug;

  // Layout state
  const [viewLayout, setViewLayout] = useState("grid4");

  // Slug-ke title-er moto dekhanor jonno formatting
  const formattedTitle = slug ? slug.replace(/-/g, ' ') : "Category";

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 py-8 md:py-12">
        
        {/* Dynamic Category Title */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Category: <span className="text-red-600">{formattedTitle}</span>
          </h1>
          <div className="h-1 w-20 bg-red-600 mt-2"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Aside Sidebar */}
          <aside className="w-full lg:w-1/4 shrink-0">
            <div className="sticky top-24">
              <ShopSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <section className="flex-grow w-full">
            
            <ShopHeader setViewLayout={setViewLayout} />

            {/* ProductList-e slug pass kora hoyeche jate shei category-r product filter hoy */}
            <motion.div
              key={slug} // Slug change hole animation abar hobe
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductList viewLayout={viewLayout} categorySlug={slug} />
            </motion.div>

            <div className="mt-16 flex justify-center">
              <button className="px-8 py-3 bg-white dark:bg-zinc-900 border-2 border-slate-100 dark:border-zinc-800 text-slate-800 dark:text-white font-black rounded-xl hover:border-red-600 hover:text-red-600 transition-all uppercase tracking-tighter text-sm">
                Load More {formattedTitle}
              </button>
            </div>

          </section>
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;