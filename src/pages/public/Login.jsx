import React, { Fragment, useCallback, useEffect, useState } from "react"

// import component
import { Button, InputForm } from "../../components";
import Checkbox from "antd/es/checkbox/Checkbox";

import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import { useSelector } from "react-redux"
import withBaseTopping from "@/hocs/WithBaseTopping"
import { Link, useSearchParams } from "react-router-dom"
import { modal } from "@/redux/appSlice"
import { apiLogin, apiRegister, apiLoginGoogle, apiVerifyEmail, apiGetCurrentProfile } from "@/apis/user";
import { OtpVerify } from "../../components";
import { auth, provider } from "@/components/googleSignin/config";
import { signInWithPopup } from "firebase/auth";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ navigate, dispatch, location }) => {

  const [variant, setVariant] = useState(() => location.state || "LOGIN")
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [searchParams] = useSearchParams()
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm()
  useEffect(() => {
    reset()
  }, [variant])
  const onSubmit = async (payload) => {
    setIsLoading(true);
    try {
      if (variant === "LOGIN") {
        const { email, password } = payload;
        setIsLoading(true)
        const response = await apiLogin({ email, password });
        setIsLoading(false)
        if (response?.is_ban === false) {
          // If login is successful, navigate to the home page
          // const profileResponse = await apiGetCurrentProfile(response?._id) ;
          // if(profileResponse){

          // }
          Swal.fire('Success', 'Đăng nhập thành công!', 'success');
          return navigate("/");
        } else {
          // Handle login error
          Swal.fire('Oops...', 'Sai email hoặc mật khẩu. Vui lòng thử lại.', 'error');
        }
      } else if (variant === "REGISTER") {
        // Handle register logic here
        const { rePassword, email, password } = payload;
        setIsLoading(true)
        const verifyEmailResponse = await apiVerifyEmail({
          email: email,
          password: password,
          re_password: rePassword
        });
        setIsLoading(false)
        if (verifyEmailResponse?.message === "Email has been sent OTP successfully") {
          console.log("come here")
          dispatch(
            modal({
              isShowModal: true,
              modalContent: <OtpVerify rePassword={rePassword} email={email} password={password} setVariant={setVariant} />,
            })
          );
        } else {
          Swal.fire('Oops...', verifyEmailResponse?.detail, 'error');
        }
      }
    } catch (error) {
      // Handle any unexpected errors
      Swal.fire('Oops...', error.response?.data?.message || 'Đã xảy ra lỗi, vui lòng thử lại sau.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") setVariant("REGISTER")
    else setVariant("LOGIN")
  }, [variant])

  const handleLoginWithGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      // Make an API call to login the user
      const response = await apiLoginGoogle({
        name: data.user.displayName,
        email: data.user.email,
        googlePhotoUrl: data.user.photoURL,
      });

      if (response?.is_ban === false) {
        // If login is successful, navigate to the home page
        Swal.fire('Success', 'Đăng nhập thành công!', 'success');
        navigate("/");
      } else {
        // Handle if the user is banned or other issues
        Swal.fire('Oops...', 'Tài khoản của bạn bị khóa. Vui lòng liên hệ với hỗ trợ.', 'error');
      }

      console.log("Account google: " + data.user.email);
    } catch (error) {
      // Handle errors
      Swal.fire('Oops...', 'Đăng nhập thất bại. Vui lòng thử lại.', 'error');
      console.error("Error during Google login:", error);
    }
  };

  const handleCheckboxChange = () => {
    setRememberMe((prev) => !prev); // Toggle the state
  };



  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="flex flex-row w-full justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="logo.svg"
            className="w-72 max-h-80 object-cover"
            alt="logo image"
          />
        </div>
        <div className="w-1/2 flex justify-center items-center">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-lg shadow-sm inset-0 p-8 flex flex-col gap-8 w-[500px]"
          >
            <img
              src="logo.svg"
              className="object-cover w-14 h-14 flex justify-center items-center mx-auto"
              alt="logo"
            />
            <h2 className="text-3xl text-gray-700 tracking-tight font-bold m-auto">
              {variant === "LOGIN" ? "Login to your Account" : "Create an account"}
            </h2>
            {variant === "LOGIN" && (
              <div className="flex flex-col items-center">
                <Button
                  className="w-full flex items-center bg-while text-gray-500 justify-center border "
                  variant="outline"
                  onClick={handleLoginWithGoogle}>
                  <FaGoogle className="mr-2 h-4 w-4 text-red-600" />
                  Sign in with Google
                </Button>
                <div className="relative mt-7">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-500"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-black">Or Sign in with Email</span>
                  </div>
                </div>

              </div>
            )}
            {variant === "REGISTER" && (
              <div className="flex flex-col items-center">
                <Button
                  className="w-full flex items-center bg-while text-gray-500 justify-center border "
                  variant="outline"
                  onClick={handleLoginWithGoogle}
                >
                  Create account with Google
                  <FaGoogle className="mr-2 h-4 w-4 text-red-600" />
                </Button>
                <div className="relative mt-7">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-500"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-black">Or</span>
                  </div>
                </div>
              </div>
            )}
            <InputForm
              label="Email"
              textColor="#333333"
              register={register}
              errors={errors}
              id="email"
              validate={{ required: "Trường này không được bỏ trống." }}
              placeholder="mail@abc.com"
              fullWidth
            />
            <div className="relative">
              <InputForm
                label="Password"
                textColor="#333333"
                register={register}
                errors={errors}
                id="password"
                validate={{
                  required: "Trường này không được bỏ trống.",
                  minLength: {
                    value: 1,
                    message: "Mật khẩu bắt buộc tối thiểu 6 ký tự.",
                  },
                }}
                type={showPassword ? "text" : "password"}
                fullWidth
                placeholder="**************"
              />
              <button
                type="button"
                className="absolute inset-y-0 mt-8 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-400" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {variant === "LOGIN" && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    name="remember-me"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-500 hover:text-indigo-500">
                    Forgot Password?
                  </a>
                </div>
              </div>
            )}
            {variant === "REGISTER" && (
              <Fragment>
                <div className="relative">
                  <InputForm
                    label="Re-enter password"
                    textColor="#333333"
                    register={register}
                    errors={errors}
                    id="rePassword"
                    validate={{
                      required: "Trường này không được bỏ trống.",
                    }}
                    type={showRePassword ? "password" : "text"}
                    fullWidth
                    placeholder="**************"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 mt-8 right-0 pr-3 flex items-center"
                    onClick={() => setShowRePassword(!showRePassword)}
                  >
                    {showRePassword ? (
                      <FaEyeSlash className="h-5 w-5 text-gray-400" />
                    ) : (
                      <FaEye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </Fragment>
            )}

            <Button disabled={isLoading} type="submit" fullWidth className="mt-3 rounded-full">
              {variant === "LOGIN" ? "Login" : "Create an account"}
            </Button>
            <div className="flex gap-2">
              <span>
                {variant === "LOGIN"
                  ? "Not Registered Yet?"
                  : "Already have an account?"}
              </span>
              <span
                className="text-red-700 cursor-pointer hover:underline"
                onClick={toggleVariant}
              >
                {variant === "LOGIN" ? "Create an account" : "Login"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default withBaseTopping(Login)
