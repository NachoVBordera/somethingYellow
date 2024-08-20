import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  text: string;
}

const Notification: React.FC<Props> = ({ text }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Estado inicial
          animate={{ opacity: 1, y: 0 }} // Estado de animación
          exit={{ opacity: 0, y: -20 }} // Estado de salida
          transition={{ duration: 0.5 }} // Duración de la animación
          style={{
            display: "block",
            position: "fixed",
            top: 15,
            right: 15,
            border: "1px solid",
            padding: "1rem",
            fontFamily: "Spline Sans Mono, monospace",
            zIndex: 1,
          }}
        >
          {text}
          <button
            style={{
              position: "absolute",
              top: 2,
              right: 2,
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsVisible(false)} // Cambia el estado para activar la animación de salida
          >
            X
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
