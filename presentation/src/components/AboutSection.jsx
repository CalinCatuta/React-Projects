import home1 from "../img/home1.png";
// styled
import styled from "styled-components";
import { motion } from "framer-motion";
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from "../styles";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyleAbout>
      <StyleDescription>
        <motion.div className="title">
          <StyleHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyleHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us fro any photography or vidography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyleDescription>
      <StyleImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Photograph person"
        />
      </StyleImage>
      <Wave />
    </StyleAbout>
  );
};

export default AboutSection;
