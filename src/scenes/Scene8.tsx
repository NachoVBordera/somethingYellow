import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface Scene8Props {
  scrollY: MotionValue<number>;
}

const Scene8: React.FC<Scene8Props> = ({ scrollY }) => {
  //rengo 5200, 5400, 9200
  const Opacity1 = useTransform(
    scrollY,
    [5400, 5600, 6600, 6700],
    [0, 1, 1, 0]
  );
  const Opacity2 = useTransform(
    scrollY,
    [5800, 6000, 6600, 6700],
    [0, 1, 1, 0]
  );
  const Opacity3 = useTransform(
    scrollY,
    [6200, 6400, 6600, 6700],
    [0, 1, 1, 0]
  );
  const Opacity4 = useTransform(scrollY, [7000, 7600, 7700], [0, 1, 0]);
  const Opacity5 = useTransform(scrollY, [7500, 7900, 9200], [0, 1, 1]);
  const Opacity6 = useTransform(scrollY, [7600, 7900, 9200], [0, 1, 0]);
  const scene5 = useTransform(scrollY, [7800, 8000, 9200], [1, 1, 4]);
  return (
    <motion.div
      style={{
        height: "100%",
        padding: "1rem",
      }}
    >
      <motion.p
        style={{
          position: "absolute",
          top: "10%",
          fontSize: "4rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity: Opacity1,
        }}
      >
        Cojes mi mano,
      </motion.p>
      <motion.p
        style={{
          position: "absolute",
          top: "20%",
          fontSize: "4rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity: Opacity2,
        }}
      >
        te acercas para observar mi rostro, yo reuno fuerzas para dibujar una
        sonrrisa,
      </motion.p>
      <motion.p
        style={{
          position: "absolute",
          top: "40%",
          fontSize: "4rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity: Opacity3,
        }}
      >
        tu tomas aliento y me dices:
      </motion.p>
      <motion.p
        style={{
          position: "absolute",
          top: "35%",
          right: "20%",
          width: "60%",
          fontSize: "5rem",
          textAlign: "center",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity: Opacity4,
        }}
      >
        Muchacho, <br />
        ¿Tu conoces a mi nieto? <br />
        Hace mucho que no viene a verme
      </motion.p>
      <motion.img
        src="/assets/3.png"
        alt={`Imagen 6`}
        style={{
          width: "40%",
          height: "auto",
          position: "absolute",
          top: 0,
          right: 0,
          opacity: Opacity5,
          scale: scene5,
          zIndex: 1,
        }}
      />
      <motion.div
        style={{
          opacity: Opacity6,
          backgroundColor: "#2F2D32",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default Scene8;
