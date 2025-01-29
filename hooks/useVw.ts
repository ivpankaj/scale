import { useEffect } from 'react';

// Custom Hook to update the --vw variable dynamically
const useVw = () => {
  useEffect(() => {
    const updateVw = () => {
      const vw = window.innerWidth * 0.01; // Calculate 1% of the viewport width
      document.documentElement.style.setProperty('--vw', `${vw}px`);
    };

    // Initialize on mount
    updateVw();

    // Update when the window is resized
    window.addEventListener('resize', updateVw);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', updateVw);
  }, []);
};

export default useVw;
