import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "./operations";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technology: string[];
  link: string;
}

interface ErrorPayload {
  message: string;
  filters: string[];
}

interface InitialState {
  projects: Project[];
  filters: string[];
  isLoading: boolean;
  error: ErrorPayload | null;
}

const initialState: InitialState = {
  projects: [],
  filters: [],
  isLoading: false,
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as ErrorPayload;
        state.filters = (action.payload as ErrorPayload).filters;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.projects = action.payload.data;
        state.filters = action.payload.filters;
      });
  },
});

export default projectsSlice.reducer;
