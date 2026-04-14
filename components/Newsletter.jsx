"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] bg-zinc-900 dark:bg-zinc-900/50 border border-zinc-800 p-8 md:p-16 overflow-hidden shadow-2xl"
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Animated Branding Text */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-red-600 font-black text-xl md:text-2xl mb-2 tracking-widest uppercase">
                আঁঠালি Exclusive
              </h3>
            </motion.div>

            {/* Main Heading with Motion */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
            >
              Get <span className="text-red-600">20% Off</span> Your <br /> First Purchase
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-base md:text-lg max-w-xl mb-10"
            >
              আঁঠালি-র নতুন কালেকশন এবং স্পেশাল অফার সবার আগে পেতে আপনার ইমেইল দিয়ে সাবস্ক্রাইব করুন।
            </motion.p>

            {/* Newsletter Form */}
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
              className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  placeholder="আপনার ইমেইল দিন..."
                  className="w-full px-6 py-4 rounded-full bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-zinc-500"
                  required
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all"
              >
                সাবস্ক্রাইব <Send size={18} />
              </motion.button>
            </motion.form>

            {/* Animated Bottom Text */}
            <motion.p 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-6 text-xs text-zinc-500 font-medium"
            >
              No spam, we promise only quality fashion updates.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;