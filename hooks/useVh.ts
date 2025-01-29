import { useEffect } from 'react';


const useVh = () => {
  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01; // Calculate 1% of the viewport height
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initialize on mount
    updateVh();

    // Update when the window is resized
    window.addEventListener('resize', updateVh);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', updateVh);
  }, []);
};




export default useVh;
