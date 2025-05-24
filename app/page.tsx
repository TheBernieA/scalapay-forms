"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion"
import Header from "@/shared/components/Header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const handleLoading = async () => {
    setIsLoading(true)
    await delay(200)
    router.push('/form')
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="flex flex-1 justify-center ">
        <main className="w-full flex justify-center mt-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">
              Welcome to Scala Form Filler
            </motion.h1>

            <motion.button
              onClick={handleLoading}
              disabled={isLoading}
              className="inline-block bg-button-primary text-white px-8 py-4 md:px-12 md:py-6 
                     rounded-full text-xl md:text-2xl font-medium shadow-lg cursor-pointer"
              whileHover={isLoading ? {} : { scale: 1.05 }}
              whileTap={isLoading ? {} : { scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              START FILLING FORM
            </motion.button>

            <p className="mt-8 text-gray-600 text-xs md:text-base">
              Click the button above to begin your form submission
            </p>
            {isLoading && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
