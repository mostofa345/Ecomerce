"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.3 } },
};

const CartPage = () => {
  // ডামি কার্ট ডেটা (বাস্তবে এটি Redux বা Context API থেকে আসবে)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Premium Handwoven Silk Panjabi",
      price: 3500,
      quantity: 1,
      size: "M",
      img: "/panjabi1.jpg", // আপনার আগের ফাইল থেকে
    },
    {
      id: 2,
      title: "Designer Cotton Panjabi",
      price: 2200,
      quantity: 2,
      size: "L",
      img: "/panjabi2.jpg", // আপনার আগের ফাইল থেকে
    },
  ]);

  // কোয়ান্টিটি পরিবর্তন করার ফাংশন
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // ১ এর নিচে নামবে না
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // কার্ট থেকে আইটেম রিমুভ করার ফাংশন
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // হিসাব নিকাশ
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 100 : 0; // ডামি শিপিং চার্জ
  const total = subtotal + shipping;

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300 py-10 md:py-16"
    >
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Page Header */}
        <motion.div variants={itemVariants} className="mb-10 flex items-center gap-4 border-l-4 border-red-600 pl-4">
          <ShoppingBag className="text-red-600" size={36} />
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighteritalic">
            Your Shopping <span className="text-red-600">Bag</span>
          </h1>
          <span className="text-sm font-bold text-slate-500 dark:text-zinc-500 mt-2">
            ({cartItems.length} {cartItems.length === 1 ? "Item" : "Items"})
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          {cartItems.length === 0 ? (
            // --- Empty Cart State ---
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-xl flex flex-col items-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
              >
                <ShoppingBag size={80} className="text-slate-300 dark:text-zinc-700 mb-6" />
              </motion.div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                Your cart is empty!
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 mt-2 max-w-md">
                Looks like you haven't added anything to your bag yet. Start
                shopping to fill it up.
              </p>
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-3 bg-red-600 text-white font-black rounded-xl uppercase tracking-tighter text-sm flex items-center gap-2"
                >
                  Go To Shop <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            // --- Cart Items & Summary ---
            <div key="items" className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-10 items-start">
              {/* Product List */}
              <motion.div variants={containerVariants} className="space-y-6">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      layout // কোয়ান্টিটি চেঞ্জ হলে স্মুথলি মুভ করবে
                      className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center gap-5 group hover:border-red-200 dark:hover:border-red-900 transition-all"
                    >
                      {/* Product Image */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-slate-100 dark:border-zinc-800 shrink-0">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Details & Actions */}
                      <div className="flex-grow grid grid-cols-1 sm:grid-cols-[1fr,auto] gap-4 items-center w-full">
                        <div>
                          <h3 className="font-black text-lg text-slate-800 dark:text-white uppercase tracking-tight line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase">
                            Size: {item.size} | Color: Classic White
                          </p>
                          <span className="text-2xl font-black text-red-600 tracking-tighter mt-2 block">
                            ৳{item.price.toLocaleString("en-BD")}
                          </span>
                        </div>

                        {/* Quantity & Remove */}
                        <div className="flex items-center justify-between sm:flex-col sm:items-end gap-3 w-full sm:w-auto">
                          {/* Quantity Selector */}
                          <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-zinc-800 rounded-lg">
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 flex items-center justify-center rounded-md text-slate-600 dark:text-zinc-300 hover:bg-red-600 hover:text-white transition-colors"
                            >
                              <Minus size={16} />
                            </motion.button>
                            <span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter w-8 text-center">
                              {item.quantity}
                            </span>
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 flex items-center justify-center rounded-md text-slate-600 dark:text-zinc-300 hover:bg-red-600 hover:text-white transition-colors"
                            >
                              <Plus size={16} />
                            </motion.button>
                          </div>

                          {/* Remove Button */}
                          <motion.button
                            onClick={() => removeItem(item.id)}
                            whileHover={{ scale: 1.1, color: "#dc2626" }}
                            whileTap={{ scale: 0.9 }}
                            className="text-slate-400 dark:text-zinc-600 p-1 rounded-md"
                          >
                            <Trash2 size={20} />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Order Summary */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-xl sticky top-24"
              >
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6 italic">
                  Order <span className="text-red-600">Summary</span>
                </h2>

                <div className="space-y-4 text-sm font-medium text-slate-700 dark:text-zinc-300 uppercase tracking-wide">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      ৳{subtotal.toLocaleString("en-BD")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      ৳{shipping.toLocaleString("en-BD")}
                    </span>
                  </div>
                  <div className="border-t border-slate-100 dark:border-zinc-800 pt-4 flex justify-between items-baseline">
                    <span className="font-black text-lg text-slate-900 dark:text-white tracking-tight">Total</span>
                    <motion.span
                      key={total} // টোটাল চেঞ্জ হলে এনিমেট করবে
                      initial={{ scale: 1.1, color: "#dc2626" }}
                      animate={{ scale: 1, color: "#dc2626" }}
                      className="text-3xl font-black tracking-tighter"
                    >
                      ৳{total.toLocaleString("en-BD")}
                    </motion.span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link href="/checkout" className="block mt-8">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl overflow-hidden font-black uppercase tracking-tighter flex items-center justify-center gap-2 text-sm shadow-lg"
                  >
                    Order Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-[-1]"></div>
                  </motion.button>
                </Link>
                
                <p className="text-[10px] text-slate-400 text-center mt-3 uppercase font-bold">Taxes and additional charges will be calculated at checkout.</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.main>
  );
};

export default CartPage;