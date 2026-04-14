"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Grid3X3, LayoutGrid, List } from "lucide-react";

const ShopHeader = ({ setViewLayout }) => {
  const [activeLayout, setActiveLayout] = useState("grid4");

  const layouts = [
    { id: "grid4", icon: <Grid3X3 size={20} />, label: "4 Columns" },
    { id: "grid3", icon: <LayoutGrid size={20} />, label: "3 Columns" },
    { id: "list", icon: <List size={20} />, label: "List View" },
  ];

  const handleLayoutChange = (id) => {
    setActiveLayout(id);
    setViewLayout(id); // Parent component-এ ডেটা পাঠানোর জন্য
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-4 mb-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
      
      {/* বাম পাশ: রেজাল্ট কাউন্ট */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-slate-500 dark:text-zinc-400">
          Showing: <span className="text-slate-800 dark:text-white">12 Products Found</span>
        </span>
      </div>

      {/* ডান পাশ: লেআউট কন্ট্রোল এবং সর্টিং */}
      <div className="flex items-center gap-6">
        
        {/* লেআউট টোগল (Grid/List) */}
        <div className="hidden sm:flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 p-1 rounded-xl">
          {layouts.map((layout) => (
            <motion.button
              key={layout.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLayoutChange(layout.id)}
              className={`p-2 rounded-lg transition-all flex items-center gap-2 ${
                activeLayout === layout.id
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                  : "text-slate-400 hover:text-red-600"
              }`}
              title={layout.label}
            >
              {layout.icon}
            </motion.button>
          ))}
        </div>

        {/* সর্টিং ড্রপডাউন */}
        <div className="relative group">
          <button className="flex items-center gap-3 px-4 py-2 bg-slate-50 dark:bg-zinc-800 border border-transparent hover:border-red-600 rounded-xl text-sm font-bold text-slate-700 dark:text-zinc-300 transition-all">
            Sort by: Newest Items
            <ChevronDown size={16} className="text-red-600" />
          </button>
          
          {/* ডামি ড্রপডাউন মেনু */}
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
            {["Price: Low to High", "Price: High to Low", "Best Rating", "New Arrivals"].map((item) => (
              <button key={item} className="w-full text-left px-4 py-3 text-xs font-bold text-slate-600 dark:text-zinc-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopHeader;