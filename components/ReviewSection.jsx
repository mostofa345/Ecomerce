"use client";
import React, { useState } from "react";
import { Send, Star, User } from "lucide-react";

const ReviewSection = () => {
  return (
    <div className="mt-16 bg-slate-50 dark:bg-zinc-950 p-6 md:p-10 rounded-3xl">
      <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 italic">Customer <span className="text-red-600">Reviews</span></h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Review Form */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800">
          <h3 className="font-black uppercase mb-4">Write a Review</h3>
          <form className="space-y-4">
            <div className="flex gap-1 mb-4 text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="cursor-pointer hover:fill-current" />)}
            </div>
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600" />
            <textarea placeholder="Share your experience..." rows="4" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600"></textarea>
            <button className="w-full py-4 bg-red-600 text-white font-black uppercase rounded-xl flex items-center justify-center gap-2">
              Submit Review <Send size={18}/>
            </button>
          </form>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {[1, 2].map((r) => (
            <div key={r} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600"><User/></div>
                  <div>
                    <h4 className="font-black text-slate-800 dark:text-white uppercase text-sm">Sazzadur Rahman</h4>
                    <p className="text-xs text-slate-400 font-bold">2 days ago</p>
                  </div>
                </div>
                <div className="flex text-yellow-500"><Star size={14} fill="currentColor"/> <span className="text-sm ml-1 font-bold">5.0</span></div>
              </div>
              <p className="text-slate-600 dark:text-zinc-400 italic">"The quality of the silk is amazing. Worth every taka!"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;