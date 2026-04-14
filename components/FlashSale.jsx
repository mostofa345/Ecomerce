"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const FlashSale = () => {
  // প্রোডাক্ট ডেটা - এখানে slug এবং id দুটোই রাখা হয়েছে ডাইনামিক ইউআরএল এর জন্য
  const products = [
    { id: 1, title: "Premium Silk Panjabi", slug: "panjabi", oldPrice: 2500, newPrice: 1800, img: "/panjabi1.jpg" },
    { id: 2, title: "Designer Cotton Panjabi", slug: "panjabi", oldPrice: 2200, newPrice: 1550, img: "/panjabi2.jpg" },
    { id: 3, title: "Casual Comfort T-Shirt", slug: "t-shirt", oldPrice: 850, newPrice: 450, img: "/t-shart.jpg" },
    { id: 4, title: "Polo Fit T-Shirt", slug: "polo-shirt", oldPrice: 950, newPrice: 600, img: "/t-shart2.jpg" },
    { id: 5, title: "Royal Party Panjabi", slug: "panjabi", oldPrice: 3500, newPrice: 2800, img: "/panjabi3.jpg" },
    { id: 6, title: "Summer Special T-Shirt", slug: "t-shirt", oldPrice: 700, newPrice: 399, img: "/t-shart1.jpg" },
  ];

  return (
    <section className="py-10 bg-[#f5f5f5] dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Header Part */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-black text-red-600 uppercase tracking-tighter italic">
              Flash Sale
            </h2>
            <div className="hidden sm:flex gap-2 items-center">
              <span className="text-sm font-bold text-slate-500">Ending In:</span>
              <div className="flex gap-1">
                <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">12</span>
                <span className="text-red-600 font-bold">:</span>
                <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">45</span>
                <span className="text-red-600 font-bold">:</span>
                <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">09</span>
              </div>
            </div>
          </div>
          
          <Link href="/shop/category/all">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 text-sm font-bold text-red-600 border-2 border-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all uppercase"
            >
              Shop All Products <ChevronRight size={18} />
            </motion.button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => {
            // আপনার রিকোয়েস্ট অনুযায়ী ইউআরএল ফরম্যাট: /shop/category/[slug]/product-details
            // এখানে স্লাগ হিসেবে ক্যাটাগরি এবং শেষে product-details পেজ লোড হবে
            const detailUrl = `/shop/category/${product.slug}/product-details`;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-red-200 dark:hover:border-red-900 group"
              >
                {/* ইমেজ ক্লিক করলে ডিটেইলস পেজে যাবে */}
                <Link href={detailUrl} className="block relative h-48 md:h-56 overflow-hidden">
                  <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-md">
                    -{Math.round(((product.oldPrice - product.newPrice) / product.oldPrice) * 100)}%
                  </div>
                  
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>

                <div className="p-3">
                  {/* টাইটেল ক্লিক করলে ডিটেইলস পেজে যাবে */}
                  <Link href={detailUrl}>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 line-clamp-1 hover:text-red-600 transition-colors">
                      {product.title}
                    </h3>
                  </Link>
                  
                  <div className="mt-2">
                    <span className="text-lg font-black text-red-600">
                      ৳{product.newPrice}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 line-through">
                        ৳{product.oldPrice}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-red-600"
                      />
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase">8 items left</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;