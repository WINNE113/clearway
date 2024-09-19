import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiGetCurrentProfile } from "@/apis/user"

export const getCurrent = createAsyncThunk(
    "user/current",
    async (data, { rejectWithValue }) => {
    //   const response = await apiGetCurrentProfile()
    //   if (!response) return rejectWithValue(response)
    //   return response
    }
  )