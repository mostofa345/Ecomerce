"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const JustForYou = () => {
  // আপনার পাবলিক ফোল্ডারের ইমেজগুলো দিয়ে ১৫টি প্রোডাক্টের ডেটা
  const products = [
    { id: 1, title: "Premium Silk Panjabi", price: 1800, oldPrice: 2500, img: "/panjabi1.jpg" },
    { id: 2, title: "Casual White T-Shirt", price: 450, oldPrice: 800, img: "/t-shart.jpg" },
    { id: 3, title: "Designer Panjabi Collection", price: 2200, oldPrice: 3000, img: "/panjabi2.jpg" },
    { id: 4, title: "Black Comfort T-Shirt", price: 550, oldPrice: 900, img: "/t-shart1.jpg" },
    { id: 5, title: "Royal Blue Panjabi", price: 2800, oldPrice: 3500, img: "/panjabi3.jpg" },
    { id: 6, title: "Graphic Print T-Shirt", price: 600, oldPrice: 1100, img: "/t-shart2.jpg" },
    { id: 7, title: "Cotton Slim Fit Panjabi", price: 1500, oldPrice: 2000, img: "/panjabi-cat.jpg" },
    { id: 8, title: "Sporty Summer T-Shirt", price: 399, oldPrice: 750, img: "/t-shart3.jpg" },
    { id: 9, title: "Traditional Festive Panjabi", price: 2100, oldPrice: 2900, img: "/panjabi1.jpg" },
    { id: 10, title: "Vintage Style T-Shirt", price: 480, oldPrice: 850, img: "/t-shart1.jpg" },
    { id: 11, title: "Luxury Embroidered Panjabi", price: 3200, oldPrice: 4500, img: "/panjabi2.jpg" },
    { id: 12, title: "Daily Wear T-Shirt", price: 350, oldPrice: 600, img: "/t-shart2.jpg" },
    { id: 13, title: "Modern Cut Panjabi", price: 1950, oldPrice: 2600, img: "/panjabi3.jpg" },
    { id: 14, title: "Premium Polo T-Shirt", price: 850, oldPrice: 1400, img: "/t-shart3.jpg" },
    { id: 15, title: "Party Wear Panjabi", price: 2400, oldPrice: 3200, img: "/panjabi-cat.jpg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight flex items-center gap-2">
            <span className="w-2 h-8 bg-red-600 rounded-full inline-block"></span>
            Just For You
          </h2>
        </div>

        {/* Product Grid - 5 columns on large screen for 3 rows total 15 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-zinc-800 group"
            >
              <Link href={`/product-zoom/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 line-clamp-2 min-h-[40px] group-hover:text-red-600 transition-colors">
                    {product.title}
                  </h3>
                  
                  <div className="mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black text-red-600">
                        ৳{product.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 line-through">
                      ৳{product.oldPrice}
                    </div>
                  </div>

                  {/* Rating Stars (Static Visual) */}
                  <div className="flex items-center gap-1 mt-2 text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-[10px]">★</span>
                    ))}
                    <span className="text-[10px] text-slate-400 ml-1">(45)</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button Style */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all uppercase text-sm tracking-widest"
          >
            Load More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default JustForYou;