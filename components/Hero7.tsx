"use client";
import { motion } from "framer-motion";
import { ServiceButton } from "./service-button";
import { CheckBadge } from "./check-badge";
import { useCallback, useEffect, useState } from "react";

interface Hero7Props {
  onGoBack: () => void;
  handleProceedToPay: () => void;
}

export function Hero7({ onGoBack, handleProceedToPay }: Hero7Props) {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touchStartPosition = e.changedTouches[0];
    setTouchStart({
      x: touchStartPosition.clientX,
      y: touchStartPosition.clientY,
    });
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!touchStart) return;
      const touchEnd = e.changedTouches[0];
      const deltaY = touchEnd.clientY - touchStart.y;
      if (Math.abs(deltaY) > 50) {
        onGoBack();
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
    "Consultant would be assigned to you over chat",
    "Consultant would create & optimize your resume with a guaranteed 80% ATS Score",
    "Access to all the software would be provided for jobs, customized resumes and JD Keyword Tool",
  ];

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <button
        onClick={onGoBack}
        className="absolute left-4 top-24 rounded-lg font-semibold text-[#ff9800] mt-3"
      >
        ← Go Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center mt-12"
      >
        <div className=" flex items-center justify-center gap-4 mt-14">
          <CheckBadge />
          <motion.h1
            className="text-lg font-bold text-[#ff9800] sm:text-base md:text-xl "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            As soon as you subscribe
          </motion.h1>
        </div>
        <motion.div
          className="mt-10 space-y-4"
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
          className="mt-10 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={handleProceedToPay}
            className="md:w-[300px] sm:w-[100px] px-4 py-2 border mt-4 bg-[#ff9800] hover:bg-[#ff9710c9] text-white hover:text-gray-200 rounded-[10px] shadow-md focus:outline-none focus:ring-2 font-bold"
          >
           I am interested
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}