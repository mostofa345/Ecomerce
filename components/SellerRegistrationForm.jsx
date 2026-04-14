"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building, Chrome, Lock, Mail, MapPin, Phone, User } from "lucide-react";

const SellerRegistrationForm = () => {
  const [formData, setFormData] = useState({ phone: '', otp: '', password: '', email: '' });

  return (
    <section className="py-20 bg-[#080b19]">
      <div className="max-w-[800px] mx-auto px-4">
        <div className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-[4rem] backdrop-blur-xl relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-600/50 rotate-12">
            <Building size={40} className="text-white -rotate-12" />
          </div>

          <h2 className="text-3xl font-black text-white text-center uppercase italic tracking-tighter mb-10 mt-4">
            Create Your <span className="text-red-600">Seller Account</span>
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] ml-2">Phone number</label>
                <div className="relative group">
                  <Phone size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-600" />
                  <input type="text" placeholder="Enter your phone number" className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white/5 border-2 border-transparent focus:border-red-600 outline-none text-white font-bold transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] ml-2">Email address</label>
                <div className="relative group">
                  <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-600" />
                  <input type="email" placeholder="Enter your email address" className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white/5 border-2 border-transparent focus:border-red-600 outline-none text-white font-bold transition-all" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] ml-2">Password</label>
               <div className="relative group">
                  <Lock size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-600" />
                  <input type="password" placeholder="Create a strong password" className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white/5 border-2 border-transparent focus:border-red-600 outline-none text-white font-bold transition-all" />
               </div>
            </div>

            <div className="p-6 bg-red-600/5 rounded-3xl border border-red-600/20 text-xs text-slate-400 font-medium leading-relaxed">
               By clicking "Sign Up", you agree to Aathali's <span className="text-red-600 underline font-black">Terms of Service</span> and <span className="text-red-600 underline font-black">Privacy Policy</span>. We will send a verification OTP to your number.
            </div>

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full h-16 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-tighter rounded-2xl shadow-xl shadow-red-600/20 text-lg">
              Sign up as a seller
            </motion.button>
          </form>

          <div className="relative my-10 flex items-center gap-4">
            <div className="flex-grow h-px bg-white/10"></div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Or connect with</span>
            <div className="flex-grow h-px bg-white/10"></div>
          </div>

          <button className="w-full h-16 border-2 border-white/10 rounded-2xl flex items-center justify-center gap-3 font-black text-white uppercase tracking-tight hover:bg-white/5 transition-all">
            <Chrome size={20} className="text-red-600" /> Continue with google
          </button>
        </div>
      </div>
    </section>
  );
};

export default SellerRegistrationForm;