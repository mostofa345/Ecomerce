"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductDetailsTabs = ({ description, additionalInfo }) => {
  const [activeTab, setActiveTab] = useState("desc");

  return (
    <div className="mt-16 border-t border-slate-100 dark:border-zinc-800 pt-10">
      <div className="flex justify-center gap-8 mb-10">
        {["desc", "info"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-black uppercase tracking-tight pb-2 border-b-4 transition-all ${
              activeTab === tab ? "border-red-600 text-red-600" : "border-transparent text-slate-400"
            }`}
          >
            {tab === "desc" ? "Description" : "Additional Info"}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 md:p-10 rounded-3xl border border-slate-100 dark:border-zinc-800">
        {activeTab === "desc" ? (
          <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-lg">{description}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalInfo.map((item, i) => (
              <div key={i} className="flex justify-between p-3 border-b border-slate-50 dark:border-zinc-800">
                <span className="font-bold text-slate-500 uppercase text-sm">{item.key}</span>
                <span className="font-medium dark:text-zinc-200">{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;