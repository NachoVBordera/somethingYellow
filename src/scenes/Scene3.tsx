import React from "react";
import { motion, MotionValue } from "framer-motion";

interface Scene3Props {
  scrollY: MotionValue<number>;
}

const Scene3: React.FC<Scene3Props> = () => {
  return (
    <motion.div
      style={{
        height: "100%",
        width: "100%",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <motion.p
        style={{
          fontSize: "5rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
        Y como no, cada vez que mi mano toca el pomo,
      </motion.p>
      <motion.p
        style={{
          fontSize: "5rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
        la misma puta pregunta en mi cabeza
      </motion.p>
      <motion.img
        src="/assets/8.png"
        alt={`Imagen 6`}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "60%",
          height: "auto",
        }}
      />
    </motion.div>
  );
};

export default Scene3;
