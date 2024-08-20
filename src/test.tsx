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
import Scene5 from "./scenes/Scene5";
import Scene6 from "./scenes/Scene6";
import Scene7 from "./scenes/Scene7";
import Scene8 from "./scenes/Scene8";
import ScrollToEndButton from "./components/ScrollToEndButton";

const ComicScenes = () => {
  const scrollY: MotionValue<number> = useMotionValue(0);
  const maxScroll = 1000000;
  // Transformar el scroll en opacidad y escala para cada escena
  const sceneInitialOpacity = useTransform(scrollY, [0, 1000], [1, 0]);
  const scene1Opacity = useTransform(
    scrollY,
    [1000, 1200, 1400, 1800, 2000],
    [0, 1, 1, 0.8, 0]
  );
  const scene2Opacity = useTransform(
    scrollY,
    [2000, 2200, 2800, 3000],
    [0, 1, 1, 0]
  );
  const scene3Opacity = useTransform(
    scrollY,
    [3000, 3200, 4800, 6000],
    [0, 1, 1, 0]
  );
  const scene5Opacity = useTransform(
    scrollY,
    [6000, 6200, 6800, 7000],
    [0, 1, 1, 0]
  );
  const scene6Opacity = useTransform(
    scrollY,
    [7000, 7200, 7800, 8000],
    [0, 1, 1, 0]
  );
  const scene7Opacity = useTransform(
    scrollY,
    [7200, 7400, 9800, 10000],
    [0, 1, 1, 0]
  );
  const scene8Opacity = useTransform(
    scrollY,
    [10000, 10200, 13800, 14000],
    [0, 1, 1, 0]
  );
  //  const scene10Opacity = useTransform(scrollY, [9200, 9400, 9600], [0, 1, 0]);
  //  const scene11Opacity = useTransform(scrollY, [9800, 10000], [0, 1]);

  // Transformar el scroll en escala para cada escena
  const sceneInitialScale = useTransform(scrollY, [0, 1000], [1, 1.5]);
  const scene1Scale = useTransform(
    scrollY,
    [1000, 1200, 1400, 1800, 2000],
    [0.2, 1, 1, 1.5, 4]
  );
  const scene2Scale = useTransform(
    scrollY,
    [2000, 2200, 2800, 3000],
    [1, 1, 1, 1.3]
  );
  const scene5Scale = useTransform(scrollY, [6000, 6800, 7000], [1, 1, 1.5]);

  // const scene10Scale = useTransform(scrollY, [9200, 9400, 9600], [0.2, 1, 1.5]);
  // const scene11Scale = useTransform(scrollY, [4400, 4600], [0.2, 1]);

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

  // const scene10TransformOrigin = useTransform(
  //   scrollY,
  //   [300, 700, 800, 1200],
  //   ["center center", "center center", "center right", "center rightt"]
  // );

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
        height: "99.8vh",
        overflow: "hidden",
        position: "relative",
        border: "10px solid black",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: sceneInitialOpacity,
          scale: sceneInitialScale,
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
          opacity: scene1Opacity,
          scale: scene1Scale,
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
          opacity: scene2Opacity,
          scale: scene2Scale,
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
          opacity: scene3Opacity,
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
          opacity: scene6Opacity,
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
          opacity: scene7Opacity,
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
          opacity: scene8Opacity,
        }}
      >
        <Scene8 scrollY={scrollY} />
      </motion.div>
      {/*  <motion.div
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
      </motion.div> */}
      <ScrollToEndButton scrollY={scrollY} maxScroll={maxScroll} />
    </div>
  );
};

export default ComicScenes;
