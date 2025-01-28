import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

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
    <div className="relative group w-full max-w-lg mx-auto">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-4 bg-[#202020] rounded-lg transition-colors"
      >
        <span>{children}</span>
        <span>{toggleButtonText}</span>
      </button>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="p-4 bg-[#202020] border border-gray-200 rounded-lg"
        >
          {staticData}
        </motion.div>
      )}
    </div>
  );
};

export default ServiceButton2;
