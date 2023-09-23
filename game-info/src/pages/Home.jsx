import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameItemsUrl } from "../reducers/gamesSlice";
// style
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animation";

const Home = () => {
  // location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // Dispatch
  const dispatch = useDispatch();
  // destructering the array from the state
  const { popularGames, newGames, upcomingGames, searched } = useSelector(
    (state) => state.games,
  );
  // this run when the Home is render
  useEffect(() => {
    dispatch(getGameItemsUrl());
  }, [dispatch]);

  return (
    <StyleGameList variants={fadeIn} initial="hidden" animate="show">
      <LayoutGroup type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {/* we need to searched.length ? bcs can have a empty [] and we need to render when there is content in [] */}
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <StyleGames>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </StyleGames>
          </div>
        ) : (
          ""
        )}

        <h2>Upcoming Games</h2>
        <StyleGames>
          {upcomingGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </StyleGames>
        <h2>Popular Games</h2>
        <StyleGames>
          {popularGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </StyleGames>
        <h2>New Games</h2>
        <StyleGames>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </StyleGames>
      </LayoutGroup>
    </StyleGameList>
  );
};

const StyleGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const StyleGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
