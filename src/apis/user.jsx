import axios from "@/axios"

export const apiLogin = (data) =>
    axios({
        url: "/auth/signin",
        method: "post",
        data
    })
export const apiLoginGoogle = (data) =>
    axios({
        url: "/auth/google",
        method: "post",
        data,
    })
export const apiRegister = (data) =>
    axios({
        url: "/auth/signup",
        method: "post",
        data
    })
export const apiVerifyEmail = (data) =>
    axios({
        url: "/auth/verify_email",
        method: "post",
        data
    })
export const apiGetCurrentProfile = (id) =>
    axios({
        url: "/user/" + id,
        method: "get",
    })
export const apiForgetPassword = (data) =>
    axios({
        url: "/auth/forgot_password",
        method: "post",
        data
    })
export const apiResetPasswordOTP = (data) =>
    axios({
        url: "/auth/reset_password_otp",
        method: "post",
        data
    })
export const apiReNewPassword = (data) =>
    axios({
        url: "/auth/reset_password",
        method: "post",
        data
    })

