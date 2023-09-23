import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
// images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  scrollReveal,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyleWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <StyleFrame1 variants={slider}></StyleFrame1>
        <StyleFrame2 variants={slider}></StyleFrame2>
        <StyleFrame3 variants={slider}></StyleFrame3>
        <StyleFrame4 variants={slider}></StyleFrame4>
      </motion.div>
      <StyleMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/OurWork/the-athlete">
          <StyleHide>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </StyleHide>
        </Link>
      </StyleMovie>
      <StyleMovie
        ref={element}
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
      >
        <motion.h2 variants={fade}>The Reacer</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/OurWork/the-racer">
          <motion.img variants={photoAnimation} src={theracer} alt="theracer" />
        </Link>
      </StyleMovie>
      <StyleMovie
        ref={element2}
        variants={scrollReveal}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/OurWork/good-times">
          <motion.img
            variants={photoAnimation}
            src={goodtimes}
            alt="Good Times"
          />
        </Link>
      </StyleMovie>
      <ScrollTop />
    </StyleWork>
  );
};

const StyleWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;
const StyleMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyleHide = styled.div`
  overflow: hidden;
`;
// Frame Animation
const StyleFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const StyleFrame2 = styled(StyleFrame1)`
  background: #ff8efb;
`;
const StyleFrame3 = styled(StyleFrame1)`
  background: #8ed2ff;
`;
const StyleFrame4 = styled(StyleFrame1)`
  background: #8effa0;
`;

export default OurWork;
