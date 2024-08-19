import React from "react";
import { motion } from "framer-motion";

const Scene2 = () => {
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
      <motion.img
        style={{
          width: "30%",
          height: "auto",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
        src="/assets/9.png"
        alt={`Imagen 6`}
      />
      <motion.p
        style={{
          fontSize: "5rem",
          zIndex: 1,
          width: "70%",
          marginLeft: "30%",
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
        Cada vez que abro la puerta, parece que el tiempo se haya esfumado, que
        me asome al precipicio del olvido y un viento frio me arroje a la nada
      </motion.p>
    </motion.div>
  );
};

export default Scene2;
