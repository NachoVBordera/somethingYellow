import React from "react";
import { motion } from "framer-motion";

const Scene6 = () => {
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
          position: "absolute",
          top: "20%",
          fontSize: "5rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
        Alargas tu mano llena de arrugas
      </motion.p>
      <motion.p
        style={{
          position: "absolute",
          fontFamily: "Spline Sans Mono, monospace",
          fontSize: "2rem",
          top: "30%",
          right: "10%",
        }}
      >
        (una por cada derrota que te ha dado la vida)
      </motion.p>
      <motion.p
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          fontSize: "5rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
        yo aprieto la mandibula e intento sonrreir
      </motion.p>
      <motion.img
        src="/assets/5.png" // Asegúrate de que la ruta sea correcta
        alt={`Imagen 6`}
        style={{
          width: "70%",
          height: "auto",
          position: "absolute",
          bottom: "0",
          right: "0",
        }}
      />
    </motion.div>
  );
};

export default Scene6;
