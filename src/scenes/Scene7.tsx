import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface Scene7Props {
  scrollY: MotionValue<number>;
}

const Scene7: React.FC<Scene7Props> = ({ scrollY }) => {
  const p1Opacity = useTransform(scrollY, [8000, 9000, 10000], [0, 1, 0]);
  const p2Opacity = useTransform(scrollY, [8200, 9100, 10000], [0, 1, 0]);
  const p3Opacity = useTransform(scrollY, [8400, 9200, 10000], [0, 1, 0]);

  const randomParagraphs = Array.from({ length: 10 }).map((_, i) => {
    const start = 7600 + Math.random() * 2000;
    const end = start + 200;
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
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
        }}
      >
        ¿Seré yo?
      </motion.p>
    );
  });

  const useSmallRandomParagraphs = Array.from({ length: 10 }).map((_, i) => {
    const start = 7600 + Math.random() * 2000;
    const end = start + 200;
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
          opacity,
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
    const start = 7600 + Math.random() * 2000;
    const end = start + 200;
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
          opacity,
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
    const start = 8000 + Math.random() * 2000;
    const end = start + 2000;
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
          opacity,
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
          opacity: p1Opacity,
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
          opacity: p2Opacity,
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
          opacity: p3Opacity,
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
