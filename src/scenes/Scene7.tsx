import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface Scene7Props {
  scrollY: MotionValue<number>;
}

const Scene7: React.FC<Scene7Props> = ({ scrollY }) => {
  // Control de opacidad para los párrafos principales
  const p1Opacity = useTransform(scrollY, [3400, 4400, 5000], [0, 1, 0]);
  const p2Opacity = useTransform(scrollY, [3800, 4600, 5000], [0, 1, 0]);
  const p3Opacity = useTransform(scrollY, [4200, 4800, 5000], [0, 1, 0]);

  // Generar los párrafos con posiciones y rangos aleatorios
  const randomParagraphs = Array.from({ length: 10 }).map((_, i) => {
    const start = 3400 + Math.random() * 1600; // Generar un valor de scrollY entre 3400 y 5000
    const end = start + 200; // Duración de 200 de scrollY para la aparición/desaparición
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(scrollY, [start, start + 100, end], [0, 1, 0]);

    return (
      <motion.p
        key={`p-random-${i}`}
        style={{
          fontSize: "2rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity, // Opacidad controlada individualmente
          position: "absolute",
          top: `${Math.random() * 90}%`, // Evitar top 100% para que no se salga del viewport
          left: `${Math.random() * 90}%`, // Evitar left 100% para que no se salga del viewport
        }}
      >
        ¿Seré yo?
      </motion.p>
    );
  });

  const useSmallRandomParagraphs = Array.from({ length: 10 }).map((_, i) => {
    const start = 3400 + Math.random() * 1600; // Generar un valor de scrollY entre 3400 y 5000
    const end = start + 200; // Duración de 200 de scrollY para la aparición/desaparición
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(scrollY, [start, start + 100, end], [0, 1, 0]);

    return (
      <motion.p
        key={`p-small-random-${i}`}
        style={{
          fontSize: "1rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity, // Opacidad controlada individualmente
          position: "absolute",
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
        }}
      >
        ¿yo?
      </motion.p>
    );
  });
  const useRandomParagraphs = Array.from({ length: 10 }).map((_, i) => {
    const start = 3400 + Math.random() * 1600; // Generar un valor de scrollY entre 3400 y 5000
    const end = start + 200; // Duración de 200 de scrollY para la aparición/desaparición
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(scrollY, [start, start + 100, end], [0, 1, 0]);

    return (
      <motion.p
        key={`p-small-random-${i}`}
        style={{
          fontSize: "1rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity, // Opacidad controlada individualmente
          position: "absolute",
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
        }}
      >
        ¿Desapareceré?
      </motion.p>
    );
  });
  const randomParagraphs2 = Array.from({ length: 10 }).map((_, i) => {
    const start = 3400 + Math.random() * 1600; // Generar un valor de scrollY entre 3400 y 5000
    const end = start + 200; // Duración de 200 de scrollY para la aparición/desaparición
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(scrollY, [start, start + 100, end], [0, 1, 0]);

    return (
      <motion.p
        key={`p-small-random-${i}`}
        style={{
          fontSize: "1rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity, // Opacidad controlada individualmente
          position: "absolute",
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
        }}
      >
        No quiero que me olvide
      </motion.p>
    );
  });

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
        position: "relative",
      }}
    >
      <motion.p
        style={{
          fontSize: "5rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity: p1Opacity, // Opacidad del párrafo 1 controlada por el scroll
          position: "absolute",
          top: "10%",
          left: "10%",
        }}
      >
        Esta vez seré yo?
      </motion.p>
      <motion.p
        style={{
          fontSize: "5rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          position: "absolute",
          top: "40%",
          right: "10%",
          opacity: p2Opacity, // Opacidad del párrafo 2 controlada por el scroll
        }}
      >
        Esta vez... seré yo?
      </motion.p>
      <motion.p
        style={{
          fontSize: "5rem",
          zIndex: 1,
          fontFamily: "Spline Sans Mono, monospace",
          textWrap: "balance",
          opacity: p3Opacity, // Opacidad del párrafo 3 controlada por el scroll
          position: "absolute",
          bottom: "20%",
          left: "10%",
        }}
      >
        ¿Seré yo?
      </motion.p>

      {/* Renderizar los párrafos aleatorios */}
      {randomParagraphs}
      {useSmallRandomParagraphs}
      {useRandomParagraphs}
      {randomParagraphs2}
    </motion.div>
  );
};

export default Scene7;
