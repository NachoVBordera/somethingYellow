import React from "react";
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Scene1 from "./scenes/Scene1";
import HomeScene from "./scenes/Homescene";
import Scene2 from "./scenes/Scene2";
import Scene3 from "./scenes/Scene3";
import Scene4 from "./scenes/Scene4";
import Scene5 from "./scenes/Scene5";
import Scene6 from "./scenes/Scene6";
import Scene7 from "./scenes/Scene7";
import Scene8 from "./scenes/Scene8";
import Scene9 from "./scenes/Scene9";
import Scene10 from "./scenes/Scene10";
import ScrollToEndButton from "./components/ScrollToEndButton";

const ComicScenes = () => {
  const scrollY: MotionValue<number> = useMotionValue(0);
  const maxScroll = 10000;
  // Transformar el scroll en opacidad y escala para cada escena
  const scene1Opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scene2Opacity = useTransform(
    scrollY,
    [300, 700, 800, 900, 950, 1200],
    [0, 1, 1, 1, 0.8, 0]
  );
  const scene3Opacity = useTransform(scrollY, [1400, 1600, 1800], [0, 1, 0]);
  const scene4Opacity = useTransform(scrollY, [1800, 2000, 2200], [0, 1, 0]);
  const scene5Opacity = useTransform(scrollY, [2200, 2400, 2600], [0, 1, 0]);
  const scene6Opacity = useTransform(scrollY, [2600, 2800, 3000], [0, 1, 0]);
  const scene7Opacity = useTransform(scrollY, [3000, 3200, 3400], [0, 1, 0]);
  const scene8Opacity = useTransform(scrollY, [3400, 4800, 5000], [0, 1, 0]);
  const scene9Opacity = useTransform(
    scrollY,
    [5200, 5400, 9000, 9200],
    [0, 1, 1, 0]
  );
  const scene10Opacity = useTransform(scrollY, [9200, 9400, 9600], [0, 1, 0]);
  const scene11Opacity = useTransform(scrollY, [9800, 10000], [0, 1]);

  // Transformar el scroll en escala para cada escena
  const scene1Scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const scene2Scale = useTransform(
    scrollY,
    [300, 700, 800, 900, 1200],
    [0.2, 1, 1.3, 1.5, 4]
  );
  const scene3Scale = useTransform(scrollY, [1400, 1600], [1, 1]);
  const scene4Scale = useTransform(scrollY, [1800, 2000], [0.2, 1]);
  const scene5Scale = useTransform(scrollY, [2200, 2400], [0.2, 1]);
  const scene6Scale = useTransform(scrollY, [2600, 2800], [0.2, 1]);
  const scene7Scale = useTransform(scrollY, [3000, 3200], [0.2, 1]);
  const scene8Scale = useTransform(scrollY, [3400, 3600], [1, 1]);
  const scene9Scale = useTransform(scrollY, [3800, 4000], [0.2, 1]);
  const scene10Scale = useTransform(scrollY, [9200, 9400, 9600], [0.2, 1, 1.5]);
  const scene11Scale = useTransform(scrollY, [4400, 4600], [0.2, 1]);

  // TransformOrigin dinámico basado en la transición de la escena 1
  const scene1TransformOrigin = useTransform(
    scrollY,
    [0, 250, 400], // Puntos de transición
    ["center center", "center center", "center right"] // Valores de transform-origin
  );

  // TransformOrigin dinámico basado en la transición de la escena 2
  const scene2TransformOrigin = useTransform(
    scrollY,
    [300, 700, 800, 1200],
    ["center center", "center center", "center right", "center rightt"]
  );

  const scene10TransformOrigin = useTransform(
    scrollY,
    [300, 700, 800, 1200],
    ["center center", "center center", "center right", "center rightt"]
  );

  React.useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      scrollY.set(scrollY.get() + event.deltaY);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollY]);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene1Opacity,
          scale: scene1Scale,
          transformOrigin: scene1TransformOrigin, // Punto de fuga dinámico
        }}
      >
        <HomeScene />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene2Opacity,
          scale: scene2Scale,
          transformOrigin: scene2TransformOrigin, // Punto de fuga dinámico
        }}
      >
        <Scene1 />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene3Opacity,
          scale: scene3Scale,
        }}
      >
        <Scene2 />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene4Opacity,
          scale: scene4Scale,
        }}
      >
        <Scene3 scrollY={scrollY} />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene5Opacity,
          scale: scene5Scale,
          transformOrigin: "center right",
        }}
      >
        <Scene4 />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene6Opacity,
          scale: scene6Scale,
          transformOrigin: "center right",
        }}
      >
        <Scene5 />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene7Opacity,
          scale: scene7Scale,
          transformOrigin: "center right",
        }}
      >
        <Scene6 />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene8Opacity,
          scale: scene8Scale,
          transformOrigin: "center right",
        }}
      >
        <Scene7 scrollY={scrollY} />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene9Opacity,
          scale: scene9Scale,
          transformOrigin: "center right",
        }}
      >
        <Scene8 scrollY={scrollY} />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene10Opacity,
          scale: scene10Scale,
          transformOrigin: scene10TransformOrigin,
        }}
      >
        <Scene9 />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: scene11Opacity,
          scale: scene11Scale,
        }}
      >
        <Scene10 />
      </motion.div>
      <ScrollToEndButton scrollY={scrollY} maxScroll={maxScroll} />
    </div>
  );
};

export default ComicScenes;
