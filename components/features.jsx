"use client";
import React from "react";
import { motion } from "framer-motion";
import { Headphones, RefreshCcw, ShieldCheck, Truck } from "lucide-react";

const featureData = [
  {
    id: 1,
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: "Free Shipping",
    desc: "On All Orders Over $99",
  },
  {
    id: 2,
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Secure Payment",
    desc: "We ensure secure payment",
  },
  {
    id: 3,
    icon: <RefreshCcw className="w-8 h-8 text-blue-600" />,
    title: "100% Money Back",
    desc: "30 Days Return Policy",
  },
  {
    id: 4,
    icon: <Headphones className="w-8 h-8 text-blue-600" />,
    title: "Online Support",
    desc: "24/7 Dedicated Support",
  },
]

const Features = () => {
  return (
    <section className="py-12 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all cursor-default group"
            >
              {/* আইকন কন্টেইনার */}
              <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>

              {/* টেক্সট কন্টেন্ট */}
              <div>
                <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features