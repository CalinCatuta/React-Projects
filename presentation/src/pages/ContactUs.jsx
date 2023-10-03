// Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyleContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <StyleTitle>
        <StyleHide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </StyleHide>
      </StyleTitle>
      <div>
        <StyleHide>
          <StyleSocial variants={titleAnimation}>
            <StyleCircle />
            <h2>Send Us A Message</h2>
          </StyleSocial>
        </StyleHide>
        <StyleHide>
          <StyleSocial variants={titleAnimation}>
            <StyleCircle />
            <h2>Send an email.</h2>
          </StyleSocial>
        </StyleHide>
        <StyleHide>
          <StyleSocial variants={titleAnimation}>
            <StyleCircle />
            <h2>Social Media</h2>
          </StyleSocial>
        </StyleHide>
      </div>
    </StyleContact>
  );
};

const StyleContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
    font-size: 0.745rem;
  }
`;
const StyleTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const StyleHide = styled.div`
  overflow: hidden;
`;
const StyleCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;
const StyleSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
