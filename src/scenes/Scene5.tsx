import { motion } from "framer-motion";

const Scene5 = () => {
  return (
    <motion.div
      style={{
        height: "100%",
        width: "100%",
        padding: "2rem"
      }}
    >
      <motion.img
        src="/assets/12.png"
        alt={`Imagen 6`}
        style={{
          position: "absolute",
          top: 30,
          left: "25%",
          width: "50%",
          height: "auto",
        }}
      />
    </motion.div>
  );
};

export default Scene5;
