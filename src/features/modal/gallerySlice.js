import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  isLoading: false,
  gallery:[],
}

const url = `https://course-api.com/react-store-products`;

export const getImages = createAsyncThunk('gallery/getImages', async (thunkAPI) => {
  try {
    const resp = await axios(url, {
      headers: {
        Accept: 'application/json',
      }
    });
    console.log(resp)
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
})

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  extraReducers: {
    [getImages.pending]: (state) => {
      state.isLoading = true;
    },
    [getImages.fulfilled]: (state,{payload}) => {
      state.isLoading = false;
      state.gallery = payload;
    },
    [getImages.rejected]: (state) => {
      state.isLoading = false;
    },
  }
});

export const { 
  gallery
} = gallerySlice.actions;

export default gallerySlice.reducer;