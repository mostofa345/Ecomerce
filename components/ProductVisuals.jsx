"use client";
import Image from "next/image";
import InnerImageZoom from "react-inner-image-zoom";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye } from "lucide-react";

const ProductVisuals = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col-reverse md:flex-row gap-6">
      <div className="flex md:flex-col gap-4 justify-center md:justify-start">
        {images.map((img, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedImage(img)}
            whileHover={{ scale: 1.05 }}
            className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all ${
              selectedImage === img ? "border-red-600 shadow-lg" : "border-slate-100 dark:border-zinc-800"
            }`}
          >
            <Image src={img} alt="Thumbnail" fill className="object-cover" />
          </motion.button>
        ))}
      </div>

      <div className="flex-grow aspect-square md:aspect-[4/5] bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-zinc-800 relative group">
        <AnimatePresence mode="wait">
          <motion.div key={selectedImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
            <InnerImageZoom src={selectedImage} zoomType="inner" zoomScale={2} className="w-full h-full object-contain" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <Eye className="text-red-600" size={20} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductVisuals;