import { motion } from "framer-motion";

const Scene2 = () => {
  //range 2000 3000
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
      <motion.img
        style={{
          width: "90%",
          height: "auto",
          position: "absolute",
          bottom: -80,
          left: 150,
        }}
        src="/assets/11.png"
        alt={`Imagen 6`}
      />
      <motion.p
        style={{
          fontSize: "3.5rem",
          zIndex: 1,
          width: "37%",
          marginLeft: "70%",
          fontFamily: "Spline Sans Mono, monospace",
          textOverflow: "ellipsis",
        }}
      >
        Cada vez que abro <span style={{ fontWeight: "initial", color: "#F3D222" }}>la puerta</span>, parece que el tiempo se haya esfumado, que
        me asome al precipicio del olvido y un viento frío me arroje a la nada
      </motion.p>
    </motion.div>
  );
};

export default Scene2;
