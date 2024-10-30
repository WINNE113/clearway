import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiGetCurrentProfile } from "@/apis/user"

export const getCurrent = createAsyncThunk(
  "user/current",
  async (userID, { rejectWithValue }) => {
    var userID = localStorage.getItem("_id");
    const response = await apiGetCurrentProfile(userID)
    if (!response) return rejectWithValue(response)
    return response
  }
)