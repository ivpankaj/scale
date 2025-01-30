"use client";
import { motion } from "framer-motion";
import { ServiceButton } from "./service-button";
import { CheckBadge } from "./check-badge";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

interface Hero7Props {
  onGoBack: () => void; // Callback to notify parent to navigate back
  handleProceedToPay: () => void; // Pass the proceed to pay functionality
}

export function Hero7({ onGoBack,handleProceedToPay }: Hero7Props) {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  // Disable scrolling on mount and enable it on unmount
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = ""; // Re-enable scrolling
    };
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touchStartPosition = e.changedTouches[0];
    setTouchStart({ x: touchStartPosition.clientX, y: touchStartPosition.clientY });
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!touchStart) return;
      const touchEnd = e.changedTouches[0];
      const deltaY = touchEnd.clientY - touchStart.y;
      if (Math.abs(deltaY) > 50) {
        onGoBack(); // Trigger go back on swipe down
      }
    },
    [touchStart, onGoBack]
  );

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleTouchStart, handleTouchMove]);

  const services = [
    "1. Consultant would be assigned to you over chat",
    "2. Consultant would create & optimize your resume with a guaranteed 80% ATS Score",
    "3. Access to all the software would be provided for jobs, customized resumes and JD Keyword Tool",
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative px-4">
      {/* Back Button */}
      <button
        onClick={onGoBack}
        className="absolute top-4 left-4 bg-[#ff9800] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#f57c00]"
      >
        <ArrowLeft/>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center gap-1 mb-2">
          <CheckBadge />
          <motion.h1
            className="text-2xl md:text-xl sm:text-lg font-bold text-[#ff9800]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            As soon as you subscribe
          </motion.h1>
        </div>
        <motion.div
          className="space-y-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <ServiceButton>{service}</ServiceButton>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="space-y-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={handleProceedToPay}
            className="md:w-[300px] sm:w-[100px] bg-[#ff9800] backdrop-blur-sm border border-gray-600 rounded-xl p-4 text-lg text-white font-semibold transition-colors hover:bg-[#f57c00]"
          >
            Proceed to Pay
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      ></motion.div>
    </div>
  );
}