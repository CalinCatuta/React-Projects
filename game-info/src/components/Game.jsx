import { useDispatch } from "react-redux";
import { loadDetail } from "../reducers/detailSlice";
// style
import { motion } from "framer-motion";
import styled from "styled-components";
import { resizeImage } from "../util";
import { popup } from "../animation";
// link
import { Link } from "react-router-dom";
const Game = ({ name, released, image, id }) => {
  // transform id to string to make the animation work bcs one was number and one was string allready
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  // make a function to go at detail and pass the id to let her know what detail we need to show
  const loadDetailHan = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHan}
    >
      {/* this link send us to the game/id of the game we click on and then the Route from App run  */}
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={resizeImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
