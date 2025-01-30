"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckBadge } from "./check-badge";
import { AnimatedSection } from "./Animated";
import ServiceButton2 from "./service-button2";

export function Hero4() {
  const services = [
    "Resume re-created with guaranteed 80% above score",
    "5 jobs daily till you get a job",
    "Customized resume for each job",
    "Job Description Keyword Finder",
    "Linkedin optimization Guide",
  ];
  const staticData = [
    "Our team of experts will create your resume with unlimited revisions and give you proof of ATS Score from 3 platforms including Naukri.com.",
    "We will give you access to software which gives you 5 jobs daily based on your resume and skills. Note, you will have to apply to these job yourself only",
    "We will provide you access to a Software that lets you download customised resumes based on JD.",
    "A software access to let you find all the keywords that you need to add in your resume based on JD. (Lifetime + Unlimited Access)",
    "Our guide will help you edit and optimize your LinkedIn profile based on the above resume created by our team",
  ];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAllServices, setShowAllServices] = useState(false);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleShowMore = () => {
    setShowAllServices(true);
  };
  const handleBack = () => {
    setShowAllServices(false);
    setExpandedIndex(null);
  };
  return (
    <>
    <AnimatedSection>
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative px-4 overflow-hidden">
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
              How we help!!
            </motion.h1>
          </div>
          
          {showAllServices && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleBack}
              className="mb-4 text-[#ff9800] hover:text-[#ffab2e] transition-colors"
            >
              ← Go Back
            </motion.button>
          )}
          
          <motion.div
            className="space-y-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {showAllServices
              ? services
                  .slice(3, 5)
                  .map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <ServiceButton2
                        onClick={() => toggleExpand(index + 2)}
                        expanded={expandedIndex === index + 2}
                        staticData={<span>{staticData[index + 2]}</span>}
                        toggleButtonText={expandedIndex === index + 2 ? "-" : "+"}
                      >
                        {service}
                      </ServiceButton2>
                    </motion.div>
                  ))
              : services.slice(0, 3).map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <ServiceButton2
                      onClick={() => toggleExpand(index)}
                      expanded={expandedIndex === index}
                      staticData={<span>{staticData[index]}</span>}
                      toggleButtonText={expandedIndex === index ? "-" : "+"}
                    >
                      {service}
                    </ServiceButton2>
                  </motion.div>
                ))}
          </motion.div>
          
          {!showAllServices && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShowMore}
                className="border-2 border-[#ff9800] text-[#ff9800] border-dashed hover:bg-[#ff9800] hover:text-black px-4 py-3 rounded-lg md:text-2xl sm:text-lg font-bold transition-colors"
              >
                Add on
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatedSection>
  </>
  );
}