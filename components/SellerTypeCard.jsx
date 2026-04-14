"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Globe2, Store } from "lucide-react";

const SellerTypeCard = ({ onSelect }) => {
  const [active, setActive] = useState(null);

  const types = [
    { id: 'local', title: "Local Seller", icon: <Store size={40}/>, desc: "Based in Bangladesh with local warehouse" },
    { id: 'global', title: "Global Seller", icon: <Globe2 size={40}/>, desc: "Selling from abroad to Bangladesh" },
    { id: 'digital', title: "Digital Seller", icon: <Cpu size={40}/>, desc: "Softwares, courses or digital keys" }
  ];

  return (
    <section className="py-20 bg-[#080b19]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-black text-white text-center uppercase italic tracking-tighter mb-12">
          Choose Your <span className="text-red-600">Seller Type</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((type) => (
            <motion.div
              key={type.id}
              whileHover={{ y: -10 }}
              onClick={() => {setActive(type.id); onSelect(type.id)}}
              className={`cursor-pointer p-8 rounded-[3rem] border-2 transition-all relative overflow-hidden ${
                active === type.id ? "border-red-600 bg-red-600/5 shadow-[0_0_50px_rgba(220,38,38,0.2)]" : "border-white/5 bg-white/5 hover:border-white/20"
              }`}
            >
              <div className={`mb-6 ${active === type.id ? "text-red-600" : "text-slate-500"}`}>{type.icon}</div>
              <h3 className="text-xl font-black text-white uppercase italic mb-3">{type.title}</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">{type.desc}</p>
              
              {active === type.id && (
                <div className="absolute top-6 right-6 text-red-600">
                  <CheckCircle2 size={32} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerTypeCard;