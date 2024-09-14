import axios from "axios"
const instance = axios.create({
  baseURL: "https://clear-way.onrender.com/api",
})
instance.interceptors.request.use(
  function (config) {
    const data = window.localStorage.getItem("persist:clearway")
    const tokenObj = data && JSON.parse(data)
    if (tokenObj?.token?.length > 6)
      config.headers = {
        authorization: `Bearer ${JSON.parse(tokenObj.token)}`,
      }
    return config
  },
  function (error) {
    return error
  }
)

instance.interceptors.response.use(
  function (response) {
    return response?.data
  },
  function (error) {
    return error.response?.data
  }
)

export default instance
