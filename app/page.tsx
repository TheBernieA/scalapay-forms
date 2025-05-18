"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion"

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
    <div className="items-center justify-items-center min-h-screen">
      <main className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Welcome to Form Filler
          </h1>

          <motion.button
            onClick={handleLoading}
            disabled={isLoading}
            className="inline-block bg-blue-600 text-white px-8 py-4 md:px-12 md:py-6 
                     rounded-lg text-xl md:text-2xl font-medium shadow-lg cursor-pointer"
            whileHover={isLoading ? {} : { scale: 1.05, backgroundColor: '#2563EB' }}
            whileTap={isLoading ? {} : { scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            START FILLING FORM
          </motion.button>

          <p className="mt-8 text-gray-600 text-sm md:text-base">
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
  );
}
