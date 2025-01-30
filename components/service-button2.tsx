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
        className="flex justify-between w-[90vw] p-4 bg-[#202020] rounded-lg transition-colors"
      >
        <span className="text-white flex  ">{children}</span>
        <span className='text-[#ff9800] text-xl flex items-end'>{toggleButtonText}</span>
      </button>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="p-4 bg-[#393737] border border-[#ff9800] rounded-lg"
        >
         <span className='flex justify-start'> {staticData}</span>
        </motion.div>
      )}
    </div>
  );
};

export default ServiceButton2;