"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, ShieldCheck, Zap } from "lucide-react";

const SellerHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#080b19] border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
              Sell On <span className="text-red-600">Aathali</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium mb-10 max-w-lg leading-relaxed">
              Join the largest e-commerce ecosystem in Bangladesh. Reach millions of customers and grow your business with our advanced seller tools.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Zap size={24}/>, title: "Fast Setup", desc: "Start selling in minutes" },
                { icon: <ShieldCheck size={24}/>, title: "Secure Pay", desc: "Weekly automated payments" },
                { icon: <Globe size={24}/>, title: "Wide Reach", desc: "Nationwide delivery support" },
                { icon: <Award size={24}/>, title: "Top Support", desc: "24/7 dedicated assistance" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-red-600 shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase italic">{item.title}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
            <div className="w-full aspect-square bg-gradient-to-tr from-red-600/20 to-blue-600/10 rounded-[4rem] border border-white/10 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               <div className="text-center p-10 bg-[#080b19] rounded-[3rem] border border-red-600/30 shadow-2xl">
                  <h2 className="text-8xl font-black text-red-600 italic">15%</h2>
                  <p className="text-xl font-bold text-white uppercase tracking-widest mt-2">Commission Rate</p>
                  <p className="text-xs text-slate-500 mt-4 uppercase font-black italic">Industry's lowest platform fee</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SellerHero;