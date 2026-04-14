"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";

const ProductInfo = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
          {data.title}
        </h1>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4.8 ? "currentColor" : "none"} />)}
          </div>
          <span className="text-sm font-bold text-slate-500">(124 Reviews)</span>
        </div>
      </div>

      <div className="flex items-baseline gap-4">
        <span className="text-4xl font-black text-red-600">৳{data.price}</span>
        <span className="text-xl text-slate-400 line-through font-bold">৳{data.oldPrice}</span>
      </div>

      <div className="py-4 border-y border-slate-100 dark:border-zinc-800">
        <span className="text-xs font-black uppercase text-slate-500">Select Size</span>
        <div className="flex gap-2 mt-3">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 rounded-xl font-bold border-2 transition-all ${
                selectedSize === size ? "border-red-600 bg-red-50 text-red-600" : "border-slate-100 dark:border-zinc-800"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center bg-slate-100 dark:bg-zinc-900 rounded-xl p-1">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 hover:text-red-600"><Minus size={20}/></button>
          <span className="w-10 text-center font-black text-xl">{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)} className="p-2 hover:text-red-600"><Plus size={20}/></button>
        </div>

        <button className="flex-grow h-14 bg-red-600 text-white rounded-xl font-black uppercase flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg shadow-red-200">
          <ShoppingCart size={20}/> Add To Cart
        </button>

        <button className="w-14 h-14 border-2 border-slate-100 dark:border-zinc-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-red-600 hover:border-red-600 transition-all">
          <Heart size={24}/>
        </button>
      </div>
      
      <div className="text-xs font-bold text-slate-400 uppercase">
        <p>Category: <span className="text-slate-800 dark:text-zinc-200">Panjabi</span></p>
        <p className="mt-1">Tags: <span className="text-slate-800 dark:text-zinc-200">Silk, Traditional, Eid</span></p>
      </div>
    </div>
  );
};

export default ProductInfo;