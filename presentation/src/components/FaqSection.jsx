import styled from "styled-components";
import { StyleAbout } from "../styles";
import FaqToggle from "./FaqToggle";
import { LayoutGroup } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyleFaq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        {/* create a reusable component for toogle */}
        <FaqToggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              nulla.
            </p>
          </div>
        </FaqToggle>
        <FaqToggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              nulla.
            </p>
          </div>
        </FaqToggle>
        <FaqToggle title="Diferrent Payment Metods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              nulla.
            </p>
          </div>
        </FaqToggle>
        <FaqToggle title="What Products do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              nulla.
            </p>
          </div>
        </FaqToggle>
      </LayoutGroup>
    </StyleFaq>
  );
};
const StyleFaq = styled(StyleAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  h4 {
    cursor: pointer;
  }
  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
