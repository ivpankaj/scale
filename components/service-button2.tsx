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
}) => {
  return (
    <div className="w-[90vw]">
      <button
        onClick={onClick}
        className={`flex items-center justify-between w-[90vw] p-4 bg-[#202020] rounded-lg transition-colors box-border border ${
          expanded ? "border-[#ff9800] border-b-transparent rounded-b-none" : "border-black"
        }`}
      >
        <span className="flex justify-start text-left flex-1 pr-4">
          {children}
        </span>
        <span className="text-[#ff9800] text-xl font-bold flex-shrink-0">
          {expanded ? "-" : "+"}
        </span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-[#202020] border border-[#ff9800] border-t-transparent rounded-b-lg overflow-hidden"
          >
            <div className="p-4 w-[90vw]">
              <span className="flex justify-start text-left">{staticData}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceButton2;