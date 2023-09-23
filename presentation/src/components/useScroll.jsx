import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export const useScroll = () => {
  const controls = useAnimationControls();
  const [element, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return [element, controls];
};
