import React from "react";
import { motion } from "framer-motion";

const Scene1 = () => {
  return (
    <motion.div
      style={{
        height: "100%",
        marginTop: "15%",
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

          width: "70%",
        }}
      >
        Cuando llego a{" "}
        <span style={{ fontWeight: "initial", color: "#F3D222" }}>casa</span>{" "}
        siempre hay una habitación a la que{" "}
        <span style={{ fontWeight: "initial" }}>temo</span> entrar.
      </motion.p>
      <motion.img
        src="/assets/6.png" // Asegúrate de que la ruta sea correcta
        alt={`Imagen 6`}
        style={{
          width: "30%",
          height: "auto",
          position: "absolute",
          right: 30,
          top: 5,
        }}
      />
    </motion.div>
  );
};

export default Scene1;
