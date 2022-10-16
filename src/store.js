import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./features/modal/gallerySlice";
import imageSlice from './features/singlePage/imageSlice'

export const store = configureStore({
  reducer: {
    gallery: gallerySlice,
    image: imageSlice,
  }
});