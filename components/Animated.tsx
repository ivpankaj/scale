import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AnimatedSection({ children }: { children: React.ReactNode }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, scale: 0.8 }, // Start invisible and scaled down
          visible: {
            opacity: 1,
            scale: 1, // Scale back to normal size
            transition: { duration: 0.8 }, // Smooth animation
          },
        }}
      >
        {children}
      </motion.div>
    );
  }