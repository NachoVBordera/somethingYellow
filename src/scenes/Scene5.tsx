import React from "react";
import { motion } from "framer-motion";

const Scene5 = () => {
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
        Entro a la habitación, tu te levantas de la silla y das un paso hacia mi
      </motion.p>
    </motion.div>
  );
};

export default Scene5;
