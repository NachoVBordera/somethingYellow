import { motion } from "framer-motion";

const Scene10 = () => {
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
          width: "50%",
          zIndex: 1,
          position: "absolute",
          top: "32%",
          left: "10%",
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
        }}
      >
      Y yo nunca me cansaré de recordarte quien <span className="yellow-text">soy</span>.
      </motion.p>
      <motion.img
        src="/assets/1.png"
        alt={`Imagen 6`}
        style={{
          width: "30%",
          height: "auto",
          position: "absolute",
          right:0 
        }}
      />
    </motion.div>
  );
};

export default Scene10;
