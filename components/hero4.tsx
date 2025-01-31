import { motion } from "framer-motion";
import { useState } from "react";
import { CheckBadge } from "./check-badge";
import { AnimatedSection } from "./Animated";
import ServiceButton2 from "./service-button2";
import { useGesture } from "react-use-gesture";
import { ArrowLeft } from "lucide-react";

export function Hero4({
  isAddOnsVisible,
  setIsAddOnsVisible,
}: {
  isAddOnsVisible: boolean;
  setIsAddOnsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const bindSwipe = useGesture({
    onDragEnd: ({ movement: [mx, my] }) => {
      if (my > 50 && isAddOnsVisible) {
        setIsAddOnsVisible(false);
        setExpandedIndex(null);
      }
    },
  });

  return (
    <AnimatedSection>
      {/* Back Button */}
      {isAddOnsVisible && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            setIsAddOnsVisible(false);
            setExpandedIndex(null);
          }}
          className="absolute top-24 left-4 text-[#ff9800] hover:text-[#ff9800] flex items-center gap-2 z-10"
        >
          <ArrowLeft size={24} />
          <span className="font-medium">Back</span>
        </motion.button>
      )}

      {/* Heading */}
      <div className="flex justify-center relative mt-8 gap-4">
        <CheckBadge />
        <motion.h1
          className="text-xl md:text-5xl sm:text-xl font-bold text-[#ff9800] mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {isAddOnsVisible ? "Complimentary Services" : "How we help!!"}
        </motion.h1>
      </div>

      {/* Services Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mt-8 space-y-4 min-h-[300px]"
      >
        <div className="space-y-4">
          {!isAddOnsVisible
            ? services.slice(0, 3).map((service, index) => (
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
              ))
            : services.slice(3, 5).map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <ServiceButton2
                    onClick={() => toggleExpand(index + 3)}
                    expanded={expandedIndex === index + 3}
                    staticData={<span>{staticData[index + 3]}</span>}
                    toggleButtonText={
                      expandedIndex === index + 3 ? "-" : "+"
                    }
                  >
                    {service}
                  </ServiceButton2>
                </motion.div>
              ))}
        </div>

        {/* Add-ons Button */}
        {!isAddOnsVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsAddOnsVisible(true);
                setExpandedIndex(null);
              }}
              className="border-2 border-[#ff9800] text-[#ff9800] border-dashed hover:bg-[#ff9800] hover:text-black px-4 py-3 rounded-lg md:text-2xl sm:text-lg font-bold transition-colors"
            >
              Add-ons
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </AnimatedSection>
  );
}

export default Hero4;