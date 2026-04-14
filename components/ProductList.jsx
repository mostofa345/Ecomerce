"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Maximize2, Star } from "lucide-react";

const ProductCard = ({ product, viewLayout }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Layout অনুযায়ী কন্ডিশনাল ক্লাস
  const isList = viewLayout === "list";

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl overflow-hidden group transition-all hover:shadow-xl ${
        isList ? "flex flex-row gap-6 p-4" : "flex flex-col"
      }`}
    >
      {/* ইমেজ সেকশন */}
      <div className={`relative overflow-hidden bg-slate-50 ${isList ? "w-48 h-48 shrink-0 rounded-lg" : "aspect-[3/4] w-full"}`}>
        <Link href={`/product/${product.id}`}>
          {/* প্রথম ইমেজ (ডিফল্ট) */}
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className={`object-cover transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
          />
          {/* দ্বিতীয় ইমেজ (হোভার করলে আসবে) */}
          <Image
            src={product.images[1]}
            alt={product.title}
            fill
            className={`object-cover transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
          />
        </Link>

        {/* ইন-স্টক ব্যাজ */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-md border border-emerald-500/20">
            In Stock
          </span>
        </div>

        {/* হোভার আইকনস (Love & Maximize) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute top-3 right-3 flex flex-col gap-2 z-20"
            >
              <button className="p-2 bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-red-600 hover:text-white rounded-full shadow-lg transition-all">
                <Heart size={18} />
              </button>
              <button className="p-2 bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-red-600 hover:text-white rounded-full shadow-lg transition-all">
                <Maximize2 size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* প্রোডাক্ট ডিটেইলস */}
      <div className={`p-4 flex flex-col flex-grow ${isList ? "justify-center" : ""}`}>
        {/* রেটিং */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"} />
          ))}
          <span className="text-[10px] text-slate-400 font-bold ml-1">(4.5)</span>
        </div>

        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-bold text-slate-800 dark:text-zinc-200 line-clamp-2 hover:text-red-600 transition-colors mb-2 leading-tight">
            {product.title}
          </h3>
        </Link>

        <div className="mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-red-600">৳{product.price}</span>
            <span className="text-xs text-slate-400 line-through font-medium">৳{product.oldPrice}</span>
          </div>
        </div>
        
        {isList && (
          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-3 line-clamp-2">
            আঁঠালি-র এই প্রিমিয়াম কালেকশনটি তৈরি করা হয়েছে ১০০% কটন ফেব্রিক দিয়ে, যা আপনাকে দিবে আরাম এবং স্টাইলিশ লুক।
          </p>
        )}
      </div>
    </motion.div>
  );
};

const ProductList = ({ viewLayout }) => {
  // আপনার পাবলিক ফোল্ডারের ইমেজগুলো ব্যবহার করে ডামি ডেটা
  const products = [
    { id: 1, title: "Premium Embroidered Panjabi", price: 2450, oldPrice: 3200, rating: 5, images: ["/panjabi1.jpg", "/panjabi2.jpg"] },
    { id: 2, title: "Slim Fit Cotton T-Shirt", price: 650, oldPrice: 950, rating: 4, images: ["/t-shart1.jpg", "/t-shart2.jpg"] },
    { id: 3, title: "Festive Collection Panjabi", price: 1850, oldPrice: 2500, rating: 5, images: ["/panjabi3.jpg", "/panjabi1.jpg"] },
    { id: 4, title: "Casual Summer T-Shirt", price: 499, oldPrice: 799, rating: 4, images: ["/t-shart2.jpg", "/t-shart3.jpg"] },
    { id: 5, title: "Royal Black Panjabi", price: 2900, oldPrice: 3800, rating: 5, images: ["/panjabi2.jpg", "/panjabi3.jpg"] },
    { id: 6, title: "Urban Wear Polo Shirt", price: 850, oldPrice: 1200, rating: 4, images: ["/polo-shirt.cat.jpg", "/t-shart1.jpg"] },
    { id: 7, title: "Classic White T-Shirt", price: 550, oldPrice: 850, rating: 3, images: ["/t-shart.jpg", "/t-shart2.jpg"] },
    { id: 8, title: "Denim Blue Jeans Pant", price: 1450, oldPrice: 2100, rating: 4, images: ["/denim-cat.jpg", "/pant-cat.jpg"] },
  ];

  const gridClass = {
    grid4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    grid3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    list: "grid-cols-1",
  };

  return (
    <div className={`grid gap-6 ${gridClass[viewLayout] || gridClass.grid4}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} viewLayout={viewLayout} />
      ))}
    </div>
  );
};

export default ProductList;