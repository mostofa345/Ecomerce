"use client";
import CategorySection from "@/components/CategorySection";
import Features from "@/components/features";
import FlashSale from "@/components/FlashSale";
import Hero from "@/components/hero";
import JustForYou from "@/components/JustForYou";
import Newsletter from "@/components/Newsletter";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  // স্ক্রল অ্যানিমেশন ভ্যারিয়েন্ট
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <main>
        {/* ১. হিরো সেকশন (ব্যানার স্লাইডার) */}
        <section>
          <Hero />
        </section>

        {/* ২. ফিচার সেকশন (Free Shipping, Support ইত্যাদি) */}
        <motion.section 
          {...fadeInUp}
          className="container mx-auto"
        >
          <Features />
        </motion.section>

        {/* ৩. ক্যাটাগরি ব্যানার গ্রিড (Men's Style, Watch, Backpack) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto py-10"
        >
          <FlashSale />
        </motion.section>
         <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto py-10"
        >
          <CategorySection />
        </motion.section>
                 <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto py-10"
        >
          <JustForYou />
        </motion.section>

  
                 <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto py-10"
        >
          <Newsletter />
        </motion.section>

        {/* আরও কম্পোনেন্ট এখানে যোগ করা যাবে (যেমন: Trending Products) */}
        <section className="py-20 text-center">
          <motion.div
            {...fadeInUp}
            className="max-w-2xl mx-auto px-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Premium Panjabi Collection Coming Soon
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We are working on the best fashion experience for you. Stay tuned for our exclusive multi-vendor launch.
            </p>
          </motion.div>
        </section>

      </main>
    </div>
  );
}