"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const SellerFAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "What documents are required to sign up?", a: "You need a valid NID card, a trade license (for local businesses), and an active bank account for payments." },
    { q: "How long does the verification take?", a: "Our team usually reviews and verifies your seller profile within 1-2 business days." },
    { q: "Can I sell digital products?", a: "Yes, you can choose the 'Digital Seller' option to sell software, e-books, and digital services." }
  ];

  return (
    <section className="py-24 bg-[#080b19]">
      <div className="max-w-[800px] mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
           <HelpCircle className="text-red-600" size={32}/>
           <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">
             Frequently Asked <span className="text-red-600">Questions</span>
           </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
              <button onClick={() => setOpen(open === index ? null : index)} className="w-full p-6 text-left flex justify-between items-center group">
                <span className="font-black text-slate-200 uppercase italic tracking-tight group-hover:text-red-600 transition-colors">{faq.q}</span>
                {open === index ? <ChevronUp className="text-red-600"/> : <ChevronDown className="text-slate-500"/>}
              </button>
              {open === index && <div className="px-6 pb-6 text-slate-400 text-sm font-medium leading-relaxed">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerFAQ;