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