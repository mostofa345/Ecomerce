"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Chrome, Github, Lock, Mail, User } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Animation Variants
  const formVariants = {
    hidden: { opacity: 0, x: isLogin ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: isLogin ? 50 : -50, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-zinc-900 rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 dark:border-zinc-800">
        
        {/* --- Left Side: Branding/Visual --- */}
        <div className="hidden lg:flex flex-col justify-between bg-red-600 p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-black tracking-tighter uppercase italic">
              আঁঠালি
            </h1>
            <p className="mt-4 text-red-100 text-lg font-medium max-w-xs">
              Experience the premium collection of traditional and modern fashion.
            </p>
          </div>
          
          <div className="relative z-10">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-red-600 bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-red-600 bg-red-500 flex items-center justify-center text-xs font-bold">
                10k+
              </div>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-200">
              Joined our community
            </p>
          </div>

          {/* Decorative Circles */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-700 rounded-full opacity-50 blur-3xl"></div>
        </div>

        {/* --- Right Side: Forms --- */}
        <div className="p-8 md:p-16 relative bg-white dark:bg-zinc-900">
          <AnimatePresence mode="wait">
            {isLogin ? (
              // Sign In Form
              <motion.div
                key="login"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col h-full"
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
                    Welcome <span className="text-red-600">Back</span>
                  </h2>
                  <p className="text-slate-500 dark:text-zinc-400 font-medium mt-2">
                    Sign in to continue your shopping journey.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Gmail</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={20} />
                      <input 
                        type="email" 
                        placeholder="Enter your gmail"
                        className="w-full h-14 pl-12 pr-4 rounded-2xl bg-slate-50 dark:bg-zinc-800 border-2 border-transparent focus:border-red-600 focus:bg-white dark:focus:bg-zinc-900 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Password</label>
                      <button type="button" className="text-[10px] font-black uppercase text-red-600 hover:underline">Forgot password?</button>
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={20} />
                      <input 
                        type="password" 
                        placeholder="Enter your password"
                        className="w-full h-14 pl-12 pr-4 rounded-2xl bg-slate-50 dark:bg-zinc-800 border-2 border-transparent focus:border-red-600 focus:bg-white dark:focus:bg-zinc-900 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-14 bg-red-600 text-white rounded-2xl font-black uppercase tracking-tight shadow-lg shadow-red-200 dark:shadow-red-950/30 flex items-center justify-center gap-2"
                  >
                    Sign in <ArrowRight size={20}/>
                  </motion.button>
                </form>

                <div className="relative my-8 text-center">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100 dark:border-zinc-800"></div></div>
                  <span className="relative px-4 bg-white dark:bg-zinc-900 text-[10px] font-black uppercase text-slate-400">Or continue with</span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <motion.button 
                    whileHover={{ y: -2 }}
                    className="h-14 border-2 border-slate-100 dark:border-zinc-800 rounded-2xl flex items-center justify-center gap-3 font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <Chrome size={20} className="text-red-600"/> Continue with google
                  </motion.button>
                </div>

                <p className="mt-auto pt-8 text-center text-sm font-medium text-slate-500">
                  Don't have an account? 
                  <button onClick={() => setIsLogin(false)} className="ml-2 font-black text-red-600 uppercase hover:underline">Sign up</button>
                </p>
              </motion.div>
            ) : (
              // Sign Up Form
              <motion.div
                key="signup"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col h-full"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
                    Create <span className="text-red-600">Account</span>
                  </h2>
                  <p className="text-slate-500 dark:text-zinc-400 font-medium mt-2">
                    Join us and start your collection today.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={20} />
                      <input 
                        type="text" 
                        placeholder="Enter your name"
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-slate-50 dark:bg-zinc-800 border-2 border-transparent focus:border-red-600 focus:bg-white dark:focus:bg-zinc-900 outline-none transition-all font-medium text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Gmail</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={20} />
                      <input 
                        type="email" 
                        placeholder="Enter your gmail"
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-slate-50 dark:bg-zinc-800 border-2 border-transparent focus:border-red-600 focus:bg-white dark:focus:bg-zinc-900 outline-none transition-all font-medium text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={20} />
                      <input 
                        type="password" 
                        placeholder="Create a password"
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-slate-50 dark:bg-zinc-800 border-2 border-transparent focus:border-red-600 focus:bg-white dark:focus:bg-zinc-900 outline-none transition-all font-medium text-sm"
                      />
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-14 bg-red-600 text-white rounded-2xl font-black uppercase tracking-tight shadow-lg shadow-red-200 mt-2"
                  >
                    Create account
                  </motion.button>
                </form>

                <div className="relative my-6 text-center">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100 dark:border-zinc-800"></div></div>
                  <span className="relative px-4 bg-white dark:bg-zinc-900 text-[10px] font-black uppercase text-slate-400">Or continue with</span>
                </div>

                <motion.button 
                  whileHover={{ y: -2 }}
                  className="h-12 border-2 border-slate-100 dark:border-zinc-800 rounded-xl flex items-center justify-center gap-3 font-bold text-slate-700 dark:text-zinc-300 text-sm"
                >
                  <Chrome size={18} className="text-red-600"/> Continue with google
                </motion.button>

                <p className="mt-8 text-center text-sm font-medium text-slate-500">
                  Already have an account? 
                  <button onClick={() => setIsLogin(true)} className="ml-2 font-black text-red-600 uppercase hover:underline">Sign in</button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;