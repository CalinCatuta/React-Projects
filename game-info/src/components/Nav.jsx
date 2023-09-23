import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animation";
// state
import { useState } from "react";
import { clearSearch } from "../reducers/gamesSlice";
// Redux and Routes
import { getGameItemsUrl } from "../reducers/gamesSlice";
import { useDispatch } from "react-redux";
const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHan = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (textInput) {
      dispatch(getGameItemsUrl(textInput));
      setTextInput("");
    } else {
      dispatch(clearSearch());
    }
  };
  const clearSeatched = () => {
    dispatch(clearSearch());
  };
  return (
    <StyleNav variants={fadeIn} initial="hidden" animate="show">
      <StyleLogo onClick={clearSeatched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </StyleLogo>
      <form onSubmit={submitSearch} className="search">
        <input
          placeholder="Search Games"
          value={textInput}
          onChange={inputHan}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    </StyleNav>
  );
};
const StyleNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.6rem;
    margin-top: 1rem;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    margin: 0px 5px;
  }
  button {
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.6rem;
    background-color: #ff7676;
    border-radius: 5px;
    color: white;
    border: none;
  }
`;
const StyleLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
export default Nav;
