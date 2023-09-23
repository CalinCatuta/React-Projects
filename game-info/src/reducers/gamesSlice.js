import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import the API url
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";
import axios from "axios";

const initialState = {
  isLoading: false,
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

export const getGameItemsUrl = createAsyncThunk(
  "game/getItemStatus",
  async (game_name, thunkAPI) => {
    try {
      // Fetch the data from URL only if a game_name is provided
      // i do this bcs searched:[] get some random data from API when page load
      if (game_name) {
        const popularGamesData = await axios.get(popularGamesURL());
        const newGamesData = await axios.get(newGamesURL());
        const upcomingGamesData = await axios.get(upcomingGamesURL());
        const searchGameData = await axios.get(searchGameURL(game_name));
        // return only the result from the Fetch const
        return {
          popular: popularGamesData.data.results,
          new: newGamesData.data.results,
          upcoming: upcomingGamesData.data.results,
          searched: searchGameData.data.results,
        };
      } else {
        // If no game_name is provided, return an empty object for searched
        const popularGamesData = await axios.get(popularGamesURL());
        const newGamesData = await axios.get(newGamesURL());
        const upcomingGamesData = await axios.get(upcomingGamesURL());

        return {
          popular: popularGamesData.data.results,
          new: newGamesData.data.results,
          upcoming: upcomingGamesData.data.results,
          searched: [],
        };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  },
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    fetchGames: (state) => {
      return { ...state };
    },
    clearSearch: (state) => {
      return { ...state, searched: [] };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGameItemsUrl.pending, (state) => {
        state.isLoading = true;
      })
      // pass the value from return in asyncThunk to the state array
      .addCase(getGameItemsUrl.fulfilled, (state, action) => {
        state.popularGames = action.payload.popular;
        state.newGames = action.payload.new;
        state.upcomingGames = action.payload.upcoming;
        state.searched = action.payload.searched;
        state.isLoading = false;
      })
      .addCase(getGameItemsUrl.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { clearSearch } = gameSlice.actions;
export default gameSlice.reducer;
