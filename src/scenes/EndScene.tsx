import { motion } from "framer-motion";

const EndScene = () => {
  return (
    <motion.div
      style={{
        height: "100%",
        width: "100%",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
      }}
    >
       <motion.p
       className="yellow-text"
        style={{
          fontSize: "6rem",
          width: "min-content",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
        FIN
      </motion.p>
    </motion.div>
  );
};

export default EndScene;
