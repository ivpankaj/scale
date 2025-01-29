"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <nav className="fixed bottom-0 z-50 ">
          <motion.div
            className="space-y-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="md:w-[300px] sm:w-[100px] bg-[#ff9800] backdrop-blur-sm border border-gray-600 rounded-xl p-4 text-lg text-black font-semibold transition-colors">
              Proceed To Pay
            </button>
          </motion.div>
        </nav>
      </div>
    </>
  );
}
