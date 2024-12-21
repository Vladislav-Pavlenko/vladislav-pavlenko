import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AboutDataItem {
  id: string;
  category: string;
  file: string;
  folder: string;
  text: string;
}

export const fetchAboutData = createAsyncThunk<
  AboutDataItem,
  string,
  { rejectValue: string }
>("about/fetchAboutData", async (fileName, { rejectWithValue }) => {
  try {
    const response = await axios.get<{ data: AboutDataItem }>(
      `/api/about?file=${fileName}`
    );

    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data || "Connection error");
    }
    return rejectWithValue("Unknown error");
  }
});
