import React from "react";
import { motion } from "framer-motion";

const Scene4 = () => {
  return (
    <motion.div
      style={{
        height: "100%",
        display: "flex",
        gap: "1rem",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
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
        esta vez, al entrar, ¿Habré desaparecido yo?
      </motion.p>
    </motion.div>
  );
};

export default Scene4;
