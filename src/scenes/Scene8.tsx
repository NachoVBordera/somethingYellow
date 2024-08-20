import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface Scene8Props {
  scrollY: MotionValue<number>;
}

const Scene8: React.FC<Scene8Props> = ({ scrollY }) => {
  const Opacity1 = useTransform(
    scrollY,
    [10400, 10600, 11600, 11700],
    [0, 1, 1, 0]
  );
  const Opacity2 = useTransform(
    scrollY,
    [10800, 11000, 11600, 11700],
    [0, 1, 1, 0]
  );
  const Opacity3 = useTransform(
    scrollY,
    [11200, 11400, 11600, 11700],
    [0, 1, 1, 0]
  );
  const Opacity4 = useTransform(
    scrollY,
    [11700, 12200, 12800, 13000],
    [0, 1, 1, 0]
  );

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
        Hace mucho que no viene a verme.
      </motion.p>
      <motion.img
        src="/assets/3.png"
        alt={`Imagen 6`}
        style={{
          width: "45%",
          height: "auto",
          position: "absolute",
          top: 0,
          left: "-6%",
          opacity: Opacity4,
        }}
      />
    </motion.div>
  );
};

export default Scene8;
