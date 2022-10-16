import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = `https://course-api.com/react-store-single-product?id=`;

const initialState = {
  isLoading: false,
  items: [],
  error: false,
}

export const fetchImage = createAsyncThunk('image/getImage', async (tossie, thunkAPI) => {
  try {
    const resp = await axios.get(`${url}${tossie}`, {
      headers: {
        Accept: 'application/json',
      }
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong')
  }
})

const imageSlice = createSlice({
  name: 'image',
  initialState,
  extraReducers: {
    [fetchImage.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchImage.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = false;
      state.items = payload;
    },
    [fetchImage.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  }
})

export const {
  items,
  error,
  isLoading,
} = imageSlice.actions;

export default imageSlice.reducer;