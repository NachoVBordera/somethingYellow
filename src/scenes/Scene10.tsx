import { motion } from "framer-motion";

const Scene10 = () => {
  return (
    <motion.div
      style={{
        padding: "2rem",
        position: "absolute",
        right: 0,
        top: "12%",
      }}
    >
      <motion.img
        src="/assets/1.png"
        alt={`Imagen 6`}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </motion.div>
  );
};

export default Scene10;
