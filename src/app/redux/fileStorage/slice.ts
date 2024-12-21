import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAboutData } from "./operations";

interface AboutDataItem {
  id: string;
  category: string;
  file: string;
  folder: string;
  text: string;
}

interface FileManagerState {
  isLoading: boolean;
  error: string | null;
  current: AboutDataItem;
  data: AboutDataItem[];
}

const initialState: FileManagerState = {
  isLoading: false,
  error: null,
  current: { id: "", category: "", folder: "", file: "", text: "" },
  data: [],
};

const fileStorageSlice = createSlice({
  name: "fileStorage",
  initialState,
  reducers: {
    setCurrent(state, action: PayloadAction<AboutDataItem>) {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAboutData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
        state.current = action.payload;
      })
      .addCase(fetchAboutData.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          (action.payload as string) ||
          "Oops, something went wrong, try again later";
      });
  },
});

export const { setCurrent } = fileStorageSlice.actions;
export default fileStorageSlice.reducer;
