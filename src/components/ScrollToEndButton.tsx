import { MotionValue } from "framer-motion";
import React from "react";

interface ScrollToEndButtonProps {
  scrollY: MotionValue<number>;
  maxScroll: number;
}

const ScrollToEndButton: React.FC<ScrollToEndButtonProps> = ({
  scrollY,
  maxScroll,
}) => {
  const handleClick = () => {
    const scrollInterval = setInterval(() => {
      const currentScroll = scrollY.get();

      if (currentScroll >= maxScroll) {
        clearInterval(scrollInterval); // Detener el intervalo cuando se alcanza el máximo
      } else {
        scrollY.set(currentScroll + 1); // Incrementar el valor de scrollY
      }
    }, 6); // Aproximadamente 60 fps
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Auto-scroll
    </button>
  );
};

export default ScrollToEndButton;
