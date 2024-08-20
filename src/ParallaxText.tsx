import { motion, useScroll, useTransform } from "framer-motion";

const data = [
  {
    id: 1,
    text:
      "Cuando llego a casa siempre hay una habitación a la que temo entrar.",
    image: "/assets/6.png",
  },
  {
    id: 2,
    text:
      "Cada vez que abro la puerta parece que el tiempo se haya esfumado, que me asome al precipicio del olvido y un viento frio me arroje a la nada",
    image: "/assets/9.png",
  },
  {
    id: 3,
    text:
      "Y como no, cada vez que mi mano toca el pomo, la misma puta pregunta en mi cabeza",
    image: "/assets/8.png",
  },
  {
    id: 4,
    text: "esta vez, al entrar, ¿Habré desaparecido yo?",
    image: "",
  },
  {
    id: 5,
    text:
      "Entro a la habitación, tu te levantas de la silla y das un paso hacia mi",
    image: "https://via.placeholder.com/1920x1080/FF00FF/FFFFFF/",
  },
  {
    id: 6,
    text:
      "Alargas tu mano llena de arrugas (una por cada derrota que te ha dado la vida), yo aprieto la mandibula e intento sonrreir",
    image: "/assets/5.png",
  },
  {
    id: 7,
    text: "Esta vez sere yo? Esta vez... sere yo? sere? yo?",
    image: "https://via.placeholder.com/1920x1080/000000/FFFFFF/",
  },
  {
    id: 8,
    text:
      "Cojes mi mano, te acercas para observar mi rostro, yo reuno fuerzas para dibujar una sonrrisa, suspiro, tu tomas aliento y me dices, - Muchacho tu conoces a mi nieto? Hade mucho que no viene a verme",
    image: "/assets/3.png",
  },
  {
    id: 9,
    text: "Por suerte en la mesa siempre hay algo amarillo",
    image: "./assets/2.png",
  },
  {
    id: 10,
    text: "",
    image: "./assets/1.png",
  },
];
const ImageScroller = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div style={{ height: "100vh" }}>
      <h1
        style={{ textAlign: "center", marginTop: "50vh", marginBottom: "50vh" }}
      >
        Por suerte siempre hay algo amarillo
      </h1>

      {data.map((obj, index) => {
        const effect = getScrollEffect(scrollYProgress, obj.id);

        return (
          <div
            key={index}
            style={{
              height: "100vh",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <motion.p
              style={{
                marginBottom: "20px",
                fontSize: "1.5rem",
                opacity: effect.textOpacity,
                zIndex: 1,
              }}
            >
              {obj.text}
            </motion.p>

            {obj.image && (
              <motion.img
                animate={{
                  scale: [2, 1, 2], // Escala de 1 a 2 y vuelve a 1 para el efecto de zoom infinito
                }}
                transition={{
                  duration: 100, // Duración del ciclo completo de animación
                  repeat: Infinity, // Repetir infinitamente
                  repeatType: "loop", // Tipo de repetición (loop o mirror)
                  ease: "linear", // Efecto de suavidad de la transición
                }}
                src={obj.image}
                alt={`Imagen ${index + 1}`}
                style={{
                  width: "50%",
                  height: "auto",
                  borderRadius: "10px",
                  transform: effect.imageTransform,
                  opacity: effect.imageOpacity,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const getScrollEffect = (scrollYProgress, index) => {
  const start = (index + 0.75) / data.length;
  const middle = (index + 0.5) / data.length;
  const end = (index + 0.25) / data.length;

  const customInterpolation = (progress) => {
    // Usar una función cuadrática para la aceleración progresiva
    return progress * progress;
  };

  const inputRange = [start, middle, end];

  let imageTransform;
  let imageOpacity;
  let textOpacity = useTransform(scrollYProgress, inputRange, [0, 1, 1]);

  switch (index) {
    case 0:
      imageTransform = useTransform(
        scrollYProgress,
        inputRange,
        ["scale(0.8)", "scale(1)", "scale(1.2)"].reverse()
      );
      break;
    case 1:
      imageTransform = useTransform(
        scrollYProgress,
        inputRange,
        ["scale(1)", "scale(1.5)", "scale(2)"].reverse()
      );
      break;
    // case 2:
    //   imageTransform = useTransform(scrollYProgress, inputRange, ['rotate(0deg)', 'rotate(180deg)', 'rotate(360deg)']);
    //   break;
    case 2:
      imageTransform = useTransform(
        scrollYProgress,
        inputRange,
        [
          "perspective(1000px) rotateX(60deg) translateZ(-500px)",
          "perspective(1000px) rotateX(30deg) translateZ(-150px)",
          "perspective(1000px) rotateX(0deg) translateZ(0px)",
        ],
        { ease: customInterpolation } // Aplica la interpolación personalizada
      );
      imageOpacity = useTransform(
        scrollYProgress,
        inputRange,
        [0, 1, 1] // La imagen comienza opaca y se desvanece al final
      );
      break;
    case 3:
      textOpacity = useTransform(scrollYProgress, inputRange, [1, 0.5, 0]); // Se desvanece mientras hace zoom
      break;
    case 4:
      imageTransform = useTransform(scrollYProgress, inputRange, [
        "scale(1)",
        "scale(2)",
        "scale(3)",
      ]);
      break;
    case 5:
      imageTransform = useTransform(scrollYProgress, inputRange, [
        "translateX(-100px)",
        "translateX(0)",
        "translateX(100px)",
      ]);
      break;
    case 9: // Imagen 7: zoom y desaparición
      imageTransform = useTransform(
        scrollYProgress,
        inputRange,
        ["scale(1.5)", "scale(1.7)", "scale(2)"].reverse()
      );
      textOpacity = useTransform(scrollYProgress, inputRange, [1, 0.5, 0]); // Se desvanece mientras hace zoom
      break;
    case 10: // Imagen 8: simple, se muestra al aparecer en pantalla
      imageTransform = useTransform(scrollYProgress, inputRange, [
        "scale(1)",
        "scale(1)",
        "scale(1)",
      ]);
      textOpacity = useTransform(scrollYProgress, inputRange, [1, 0.5, 0]); // Asegura que la opacidad esté siempre a 1
      break;
    default:
      imageTransform = useTransform(scrollYProgress, inputRange, [
        "scale(1)",
        "scale(1)",
        "scale(1)",
      ]);
  }

  return {
    imageTransform,
    imageOpacity,
    textOpacity,
  };
};

export default ImageScroller;
