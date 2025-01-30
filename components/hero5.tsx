"use client";
import { motion } from "framer-motion";
import { ServiceButton } from "./service-button";
import { CheckBadge } from "./check-badge";
import { AnimatedSection } from "./Animated";
import React, { useState } from "react";
import { Footer } from "./Footer";
import { Hero7 } from "./Hero7";
import { Hero6 } from "./Hero6";

interface Hero5Props {
  selectedExperience: string;
  selectedCountry: string;
}

const pricesInINR: Record<string, string> = {
  "0 - less than 1": "Price : Rs. 1099 /-",
  "1 - less than 2": "Price : Rs. 1499 /-",
  "2 - less than 4": "Price : Rs. 1799 /-",
  "4 - less than 7": "Price : Rs. 2399 /-",
  "7 - less than 10": "Price : Rs. 2999 /-",
  "10 - less than 15": "Price : Rs. 3499 /-",
  "15 plus": "Price : Rs. 4999 /-",
};

export const Hero5: React.FC<Hero5Props> = ({ selectedExperience, selectedCountry }) => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleQuickGuideClick = () => {
    setActiveComponent("Hero7");
  };

  const handleKnowMoreClick = () => {
    setActiveComponent("Hero6");
  };

  const handleGoBack = () => {
    console.log("Going back to Hero5"); // Debugging log
    setActiveComponent(null); // Reset to Hero5
  };

  const selectedPrice =
    selectedCountry === "India"
      ? pricesInINR[selectedExperience] || "Price : Rs. 999 - Rs. 4499/-"
      : "Price : $49 - $199 USD";

  const handleProceedToPay = () => {
    // Create the message first
    const message = `Hi, I'm interested in the Job Search Plan.\n\nDetails:\nCountry: ${selectedCountry}\nExperience: ${selectedExperience}\n${selectedPrice}`;

    // Basic URL encoding
    const encodedMessage = message.replace(/\n/g, '%0a');

    // Open WhatsApp with the encoded message
    window.open(`https://api.whatsapp.com/send?phone=917988656256&text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {!activeComponent && (
        <AnimatedSection>
          <div className="min-h-[100vh] flex flex-col items-center justify-center relative px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-4 mb-2">
                <CheckBadge />
                <motion.h1
                  className="text-2xl md:text-5xl sm:text-xl font-bold text-[#ff9800]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Job Search Plan Costs
                </motion.h1>
                <CheckBadge />
              </div>
              <motion.div
                className="space-y-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <ServiceButton>{selectedPrice}</ServiceButton>
                </motion.div>
              </motion.div>
              <motion.div
                className="space-y-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  onClick={handleProceedToPay}
                  className="md:w-[300px] sm:w-[100px] bg-[#ff9800] backdrop-blur-sm border border-gray-600 rounded-xl p-4 text-lg text-black font-semibold transition-colors hover:bg-[#f57c00]"
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
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            ></motion.div>
          </div>
        </AnimatedSection>
      )}
      {activeComponent === "Hero7" && <Hero7 onGoBack={handleGoBack} />}
      {activeComponent === "Hero6" && <Hero6 onGoBack={handleGoBack}/>}
      {!activeComponent && (
        <Footer
          handleQuickGuideClick={handleQuickGuideClick}
          handleKnowMoreClick={handleKnowMoreClick}
        />
      )}
    </>
  );
};