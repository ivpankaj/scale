import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceButton2Props {
  children: ReactNode;
  onClick: () => void;
  expanded: boolean;
  staticData: ReactNode;
  toggleButtonText: string;
}

const ServiceButton2: React.FC<ServiceButton2Props> = ({
  children,
  onClick,
  expanded,
  staticData,
  toggleButtonText,
}) => {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
      {/* Wrapper to maintain width stability */}
      <div className="w-full">
        <button
          onClick={onClick}
          className="flex items-center justify-between w-[90vw] p-4 bg-[#202020] rounded-lg transition-colors box-border border border-transparent"
        >
          {/* Left-aligned content */}
          <span className="text-white">{children}</span>
          {/* Right-aligned toggle button */}
          <span className="text-[#ff9800] text-xl font-bold">
            {expanded ? "-" : "+"}
          </span>
        </button>
        {/* AnimatePresence ensures smooth mount/unmount animation */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-[#393737] border border-[#ff9800] rounded-lg overflow-hidden box-border mt-2"
            >
              <div className="p-4 w-full">
                <span className="flex justify-start">{staticData}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceButton2;