import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styles
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { StyleAbout, StyleDescription, StyleImage } from "../styles";
import { useScroll } from "./useScroll";

const ServiceSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyleServices
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyleDescription>
        <h2>
          Hi <span>quality</span> services
        </h2>
        <StyleCards>
          <StyleCard>
            <div className="icon">
              <img src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
        </StyleCards>
      </StyleDescription>
      <StyleImage>
        <img src={home2} alt="Camera" />
      </StyleImage>
    </StyleServices>
  );
};
const StyleServices = styled(StyleAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const StyleCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const StyleCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background-color: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServiceSection;
