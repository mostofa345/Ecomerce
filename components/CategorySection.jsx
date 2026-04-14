"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const CategorySection = () => {
  const categories = [
    { name: "Panjabi", slug: "panjabi", img: "/panjabi-cat.jpg" },
    { name: "Polo Shirt", slug: "polo-shirt", img: "/polo-shirt.cat.jpg" },
    { name: "T-Shirt", slug: "t-shirt", img: "/tshirt-cat.jpg" },
    { name: "Formal Shirt", slug: "formal-shirt", img: "/formal-shirt-cat.jpg" },
    { name: "Denim Jeans", slug: "denim-jeans", img: "/denim-cat.jpg" },
    { name: "Sneakers", slug: "sneakers", img: "/shoes-cat.jpg" },
    { name: "Watch", slug: "watch", img: "/watch-cat.jpg" },
    { name: "Gabardine", slug: "gabardine", img: "/pant-cat.jpg" },
    { name: "Perfume", slug: "perfume", img: "/perfume-cat.jpg" },
    { name: "Wallets", slug: "wallets", img: "/leather-cat.jpg" }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter"
        >
          Browse <span className="text-red-600">Categories</span>
        </motion.h2>
        <p className="text-slate-500 dark:text-zinc-400 font-medium mt-2 border-l-4 border-red-600 pl-3">
          Explore our premium collection by category
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="relative"
          >
            <Link href={`/shop/category/${cat.slug}`}>
              <div className="group relative bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] hover:border-red-500/50 overflow-hidden">
                
                {/* Background Glow Effect */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-colors"></div>

                {/* Image Wrapper */}
                <div className="relative w-28 h-28 mb-6 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Label */}
                <div className="relative z-10 text-center">
                  <h3 className="text-sm md:text-base font-black text-slate-800 dark:text-zinc-200 group-hover:text-red-600 transition-colors uppercase tracking-tight">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
                    View Items
                  </span>
                </div>

                {/* Bottom Animated Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;