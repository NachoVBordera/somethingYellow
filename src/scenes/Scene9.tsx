import { motion } from "framer-motion";

const Scene9 = () => {
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
          width: "50%",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
        Por suerte, en la mesa siempre hay algo amarillo
      </motion.p>
      <motion.img
        src="/assets/2.png"
        alt={`Imagen 6`}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "40%",
          height: "auto",
        }}
      />
    </motion.div>
  );
};

export default Scene9;
