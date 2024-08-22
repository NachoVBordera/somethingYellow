import { motion } from "framer-motion";

const Scene6 = () => {
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
          position: "absolute",
          top: "30%",
          right: "17%",
          fontSize: "4rem",
          width: "max-content",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
        Alargas tu mano llena de arrugas
      </motion.p>
      <motion.p
       className="yellow-text"
        style={{
          position: "absolute",
          top: "39%",
          right: "18%",
          fontSize: "0.9rem",
          zIndex: 1,
          width: "max-content",
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
        (una por cada derrota que te ha dado la vida)
      </motion.p>
      <motion.img
        src="/assets/5.png"
        alt={`Imagen 6`}
        style={{
          width: "30%",
          height: "auto",
          position: "absolute",
          bottom: "-10%",
          right: "0",
        }}
      />
      <motion.img
        src="/assets/13.png"
        alt={`Imagen 6`}
        style={{
          width: "30%",
          height: "auto",
          position: "absolute",
          bottom: "-15%",
          left: "0",
        }}
      />
    </motion.div>
  );
};

export default Scene6;
