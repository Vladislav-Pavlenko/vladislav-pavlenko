import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Filters {
  filters?: { [key: string]: boolean };
}

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (filters: Filters, { rejectWithValue }) => {
    try {
      const response = await axios.get("api/projects", { params: filters });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || "Connection error");
      }
      return rejectWithValue("Unknown error");
    }
  }
);
