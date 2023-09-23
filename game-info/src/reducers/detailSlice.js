import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { gameDetailsURL, gameScreenshotURL } from "../api"; // Import API URLs
import axios from "axios";

const initialState = {
  game: {}, // Store game details
  screen: {}, // Store game screenshots
  isLoading: true,
};

// Create an async thunk to load game details and screenshots
export const loadDetail = createAsyncThunk(
  "game/loadDetail",
  async (game_id, thunkAPI) => {
    try {
      // Fetch the game details from the API using the provided game_id
      const detailData = await axios.get(gameDetailsURL(game_id));

      // Fetch game screenshots from the API using the same game_id
      const screenData = await axios.get(gameScreenshotURL(game_id));

      // Return data from both API requests as the payload
      return {
        game: detailData.data, // Store game details in payload
        screen: screenData.data, // Store game screenshots in payload
      };
    } catch (error) {
      // If an error occurs during the async operation, reject with an error message
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const detailSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    getDetail: (state) => {
      return { ...state };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDetail.pending, (state) => {
        state.isLoading = true;
      })
      // Handle the fulfilled action of the async thunk
      .addCase(loadDetail.fulfilled, (state, action) => {
        // Update the state with the data received from the async thunk
        state.game = action.payload.game; // Update game details
        state.screen = action.payload.screen; // Update game screenshots
        state.isLoading = false;
      });
  },
});

export default detailSlice.reducer;
