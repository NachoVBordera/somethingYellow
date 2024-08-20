import React, { useEffect } from "react";
import { motion, useAnimation, MotionValue, useTransform } from "framer-motion";

interface Scene3Props {
  scrollY: MotionValue<number>;
}

const Scene3: React.FC<Scene3Props> = ({ scrollY }) => {
  const controls = useAnimation();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest >= 3100) {
        controls.start({
          left: "-10%",
          transition: { duration: 50 },
        });
      }
    });

    return () => unsubscribe();
  }, [scrollY, controls]);

  // Opacidades para los textos
  const Opacity1 = useTransform(
    scrollY,
    [3000, 3200, 3800, 4000],
    [0, 1, 1, 0]
  );
  const Opacity2 = useTransform(
    scrollY,
    [4000, 4200, 4500, 4800],
    [0, 1, 1, 0]
  );
  const Opacity3 = useTransform(
    scrollY,
    [4800, 5000, 5400, 6000],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{
        height: "100%",
        width: "100%",
        padding: "2rem",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <motion.p
        style={{
          fontSize: "4rem",
          zIndex: 1,
          margin: "0 auto ",
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity: Opacity1,
          marginLeft: "3%",
        }}
      >
        Y como no, <span className="yellow-text">cada vez </span>que mi mano
        toca el pomo,
      </motion.p>
      <motion.p
        style={{
          fontSize: "4rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity: Opacity2,
          marginLeft: "12%",
        }}
      >
        la misma <span className="yellow-text crossed"> puta</span> pregunta en
        mi cabeza
      </motion.p>
      <motion.p
        style={{
          fontSize: "4rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity: Opacity3,
          marginLeft: "5%",
        }}
      >
        esta vez, al entrar, ¿Habré{" "}
        <span className="yellow-text"> desaparecido</span> yo?
      </motion.p>
      <motion.img
        src="/assets/8.png"
        alt={`Imagen 6`}
        animate={controls}
        initial={{ left: "-20%" }}
        style={{
          position: "absolute",
          bottom: 10,
          width: "50%",
          transform: "rotate(16deg)",
          height: "auto",
        }}
      />
      <motion.img
        src="/assets/10.png"
        alt={`Imagen 6`}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "15%",
          height: "auto",
        }}
      />
    </motion.div>
  );
};

export default Scene3;
