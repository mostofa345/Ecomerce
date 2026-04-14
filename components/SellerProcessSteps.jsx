"use client";
import React from "react";
import { Check, ClipboardList, CreditCard, Package } from "lucide-react";

const SellerProcessSteps = () => {
  const steps = [
    { icon: <ClipboardList />, title: "Registration", desc: "Submit your personal & business information" },
    { icon: <Check />, title: "Verification", desc: "Account verified within 24-48 working hours" },
    { icon: <Package />, title: "List Products", desc: "Upload your products to our premium catalog" },
    { icon: <CreditCard />, title: "Start Selling", desc: "Receive orders and get paid directly to bank" }
  ];

  return (
    <section className="py-24 bg-[#080b19] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-black text-white text-center uppercase italic tracking-tighter mb-16">
          Simple Steps To <span className="text-red-600">Get Started</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-white/5 -z-10"></div>
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-[#0d122b] border-2 border-white/10 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-xl">
                {step.icon}
              </div>
              <h4 className="text-lg font-black text-white uppercase italic mb-2">Step {index + 1}</h4>
              <h5 className="text-sm font-bold text-slate-300 uppercase mb-3">{step.title}</h5>
              <p className="text-xs text-slate-500 font-medium leading-relaxed uppercase">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerProcessSteps;