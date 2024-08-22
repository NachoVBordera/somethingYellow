import { motion } from "framer-motion";

const Scene9 = () => {
  return (
    <motion.div
      style={{
        height: "100%",
        width: "100%",
        padding: "2rem",
      }}
    >
      <motion.p
        style={{
          fontSize: "4rem",
          width: "33%",
          zIndex: 1,
          position: "absolute",
          top: "32%",
          left: "10%",
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
        Por suerte, en la mesa siempre hay un pequeño  
        {" "}
        <span className="yellow-text">cuadro</span> amarillo
      </motion.p>
      <motion.img
        src="/assets/2.png"
        alt={`Imagen 6`}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "50%",
          height: "auto",
        }}
      />
    </motion.div>
  );
};

export default Scene9;
