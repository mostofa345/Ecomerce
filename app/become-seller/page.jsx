"use client";
import React from "react";
import SellerFAQ from "@/components/SellerFAQ";
import SellerHero from "@/components/SellerHero";
import SellerProcessSteps from "@/components/SellerProcessSteps";
import SellerRegistrationForm from "@/components/SellerRegistrationForm";
import SellerTypeCard from "@/components/SellerTypeCard";

const BecomeSellerRegistration = () => {
  return (
    <main className="min-h-screen bg-[#080b19] selection:bg-red-600 selection:text-white">
      <SellerHero />
      <SellerTypeCard onSelect={(id) => console.log(id)} />
      <SellerRegistrationForm />
      <SellerProcessSteps />
      <SellerFAQ />
      
      {/* Footer Branding */}
      <footer className="py-10 text-center border-t border-white/5">
        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">
          Powered by Aathali E-commerce Infrastructure • 2026
        </p>
      </footer>
    </main>
  );
};

export default BecomeSellerRegistration;