import { createSlice } from "@reduxjs/toolkit";
import { fetchSnippets, updateSnippetStars } from "./operations";
interface snippet {
  id: string;
  snippet: string;
  stars: number;
  details: string;
}

interface initialState {
  snippets: snippet[];
  isLoading: boolean;
  error: unknown | null;
}

const initialState: initialState = {
  snippets: [],
  isLoading: false,
  error: null,
};

const snippetsSlice = createSlice({
  name: "snippets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSnippets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSnippets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchSnippets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.snippets = action.payload.data;
      })
      .addCase(updateSnippetStars.pending, (state) => {
        state.error = null;
      })
      .addCase(updateSnippetStars.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateSnippetStars.fulfilled, (state, action) => {
        state.error = null;
        const updatedSnippet = action.payload.data;
        const index = state.snippets.findIndex(
          (snippet) => snippet.id === updatedSnippet.id
        );
        if (index !== -1) {
          state.snippets[index] = updatedSnippet;
        }
      });
  },
});

export default snippetsSlice.reducer;
