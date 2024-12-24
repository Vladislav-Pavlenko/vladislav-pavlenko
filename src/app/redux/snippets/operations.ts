import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSnippets = createAsyncThunk(
  "snippets/fetchSnippets",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("api/snippets/get-snippets");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || "Connection error");
      }
      return rejectWithValue("Unknown error");
    }
  }
);

export const updateSnippetStars = createAsyncThunk(
  "snippets/updateSnippetStars",
  async ({ id, stars }: { id: string; stars: number }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `api/snippets/update-snippet?file=${id}`,
        { stars }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || "Connection error");
      }
      return rejectWithValue("Unknown error");
    }
  }
);
