import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gamesSlice";
import detailReducer from "./reducers/detailSlice";

const store = configureStore({
  reducer: {
    games: gameReducer,
    detail: detailReducer,
  },
});

export default store;
