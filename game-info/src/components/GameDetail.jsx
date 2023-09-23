import { useSelector } from "react-redux";
// images
import playstation from "../img/playstation.svg";
import apple from "../img/apple.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
// style
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { resizeImage } from "../util";
const GameDetail = ({ pathId }) => {
  // exist detail
  const navigate = useNavigate();
  // make  function to exit detail when we click outside the detail content
  const exitDetailHan = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  // get platform img
  const getPlatform = (platform) => {
    if (platform.includes("PlayStation")) {
      return playstation;
    } else if (platform.includes("Xbox")) {
      return xbox;
    } else if (platform === "PC") {
      return steam;
    } else if (platform === "Nintendo Switch") {
      return nintendo;
    } else if (platform.includes("OS")) {
      return apple;
    } else {
      return gamepad;
    }
  };
  // get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt="star" key={i} />);
      } else {
        stars.push(<img src={starEmpty} alt="star" key={i} />);
      }
    }
    return stars;
  };
  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <StyleCardShadow className="shadow" onClick={exitDetailHan}>
          <StyleDetail layoutId={pathId}>
            <StyleStats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating : {game.rating}</p>
                {getStars()}
              </div>
              <StyleInfo>
                <h3>Platforms</h3>
                <StylePlatforms>
                  {game.platforms?.map((data) => (
                    <img
                      src={getPlatform(data.platform.name)}
                      key={data.platform.id}
                      alt={data.platform.name}
                      title={data.platform.name}
                    ></img>
                  ))}
                </StylePlatforms>
              </StyleInfo>
            </StyleStats>
            <StyleMedia>
              <motion.img
                layoutId={`image ${pathId}`}
                src={resizeImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </StyleMedia>
            <StyleDescription>
              <p>{game.description_raw}</p>
            </StyleDescription>
            <StyleGallery>
              {screen.results?.map((screen) => (
                <img
                  src={resizeImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </StyleGallery>
          </StyleDetail>
        </StyleCardShadow>
      )}
    </>
  );
};

const StyleCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;
const StyleDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;
const StyleStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const StyleInfo = styled(motion.div)`
  text-align: center;
`;
const StylePlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const StyleMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const StyleDescription = styled(motion.div)`
  margin: 5rem 0rem;
`;
const StyleGallery = styled.div`
  img {
    margin: 10px 0px;
  }
`;

export default GameDetail;
