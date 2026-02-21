import { useEffect, useRef } from 'react';

/**
 * Custom hook for managing game loop with requestAnimationFrame
 * @param {Function} update - Function to call each frame for game logic
 * @param {boolean} isRunning - Whether the game loop should be active
 */
const useGameLoop = (update, isRunning = true) => {
  const requestRef = useRef();

  useEffect(() => {
    const gameLoop = () => {
      if (isRunning) {
        update();
      }
      requestRef.current = requestAnimationFrame(gameLoop);
    };

    requestRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [update, isRunning]);
};

export default useGameLoop;
