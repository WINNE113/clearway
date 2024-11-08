import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiGetCurrentProfile, apiLogin } from "@/apis/user"
import { login } from "./userSlice";

// Thunk để xử lý logic login không đồng bộ
export const loginThunk = createAsyncThunk(
  "user/login",
  async (payload, { dispatch }) => {
    const { email, password } = payload;
    const response = await apiLogin({ email, password });

    // Nếu login thành công và người dùng không bị cấm
    if (response?.is_ban === false) {
      // Lưu token vào Redux
      dispatch(login({ token: response.access_token }));
      localStorage.setItem("_id", response._id);
      // Trả về thông tin user để sử dụng trong extraReducers nếu cần
      return response;
    } else {
      return rejectWithValue("Sai email hoặc mật khẩu. Vui lòng thử lại.");
    } 
  });

export const getCurrent = createAsyncThunk(
  "user/current",
  async (_, { rejectWithValue }) => {
    var userID = localStorage.getItem("_id");
    const response = await apiGetCurrentProfile(userID)
    console.log("Current in action: " + JSON.stringify(response))
    if (!response) return rejectWithValue(response)
    return response
  }
)