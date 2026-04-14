"use client";
import ProductDetailsTabs from "@/components/ProductDetailsTabs";
import ProductInfo from "@/components/ProductInfo";
import ProductVisuals from "@/components/ProductVisuals";
import React from "react";
import ReviewSection from "@/components/ReviewSection";

const ProductDetailPage = () => {
  const productData = {
    title: "Premium Handwoven Silk Panjabi",
    price: 3500,
    oldPrice: 4800,
    images: ["/panjabi1.jpg", "/panjabi2.jpg", "/panjabi3.jpg", "/panjabi1.jpg"],
    description: "Indulge in the epitome of traditional luxury. This Panjabi is crafted from the finest mulberry silk, sourced responsibly and woven by master artisans in Bangladesh.",
    additionalInfo: [
      { key: "Material", value: "100% Mulberry Silk" },
      { key: "Fit", value: "Regular Tailored Fit" },
      { key: "Origin", value: "Bangladesh" },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ProductVisuals images={productData.images} />
          <ProductInfo data={productData} />
        </div>
        
        <ProductDetailsTabs 
          description={productData.description} 
          additionalInfo={productData.additionalInfo} 
        />
        
        <ReviewSection />
      </div>
    </main>
  );
};

export default ProductDetailPage;