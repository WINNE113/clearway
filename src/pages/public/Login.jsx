import React, { Fragment, useCallback, useEffect, useState } from "react"

// import component
import { Button, InputForm } from "../../components";

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
import { FaGoogle } from "react-icons/fa";

const Login = ({ navigate, dispatch, location }) => {

  const [variant, setVariant] = useState(() => location.state || "LOGIN")
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams] = useSearchParams()
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



  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="bg-emerald-700 h-[80px] flex items-center w-full">
        <Link
          to="/"
          className="mx-auto w-main text-white font-bold flex items-center justify-between text-3xl"
        >
          <img
            src="/logo.svg"
            alt="logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-sm font-light">❓ Help</span>
        </Link>
      </div>
      <div className="flex flex-row w-full justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://st3.depositphotos.com/12925738/17656/v/450/depositphotos_176563036-stock-illustration-illustration-rush-hour-traffic-jam.jpg"
            className="max-w-full h-auto object-cover"
            alt="logo image"
          />
        </div>
        <div className="w-1/2 flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-lg shadow-sm inset-0 p-8 flex flex-col gap-8 w-[500px] bg-emerald-500"
          >
            <h2 className="text-3xl text-white tracking-tight font-bold m-auto py-4">
              {variant === "LOGIN" ? "Đăng nhập thành viên" : "Tạo tài khoản"}
            </h2>
            <InputForm
              label="Email"
              register={register}
              errors={errors}
              id="email"
              validate={{ required: "Trường này không được bỏ trống." }}
              placeholder="Nhập email của bạn"
              fullWidth
            />
            <InputForm
              label="Mật khẩu"
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
              type="password"
              fullWidth
              placeholder="Mật khẩu tối thiểu 6 ký tự"
            />
            {variant === "REGISTER" && (
              <Fragment>
                <InputForm
                  label="Nhập lại mật khẩu"
                  register={register}
                  errors={errors}
                  id="rePassword"
                  validate={{
                    required: "Trường này không được bỏ trống.",
                  }}
                  type="password"
                  fullWidth
                  placeholder="Nhập lại mật khẩu của bạn"
                />
              </Fragment>
            )}

            <Button disabled={isLoading} type="submit" fullWidth className="mt-3">
              {variant === "LOGIN" ? "Đăng nhập" : "Đăng ký tài khoản"}
            </Button>

            {variant === "LOGIN" && (
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                <Button
                  className="w-full flex items-center justify-center"
                  variant="outline"
                  onClick={handleLoginWithGoogle}
                >
                  <FaGoogle className="mr-2 h-4 w-4" /> {/* Biểu tượng Google */}
                  Sign in with Google
                </Button>
              </div>
            )}


            <div className="flex gap-2">
              <span>
                {variant === "LOGIN"
                  ? "Bạn chưa có tài khoản?"
                  : "Đã có tài khoản?"}
              </span>
              <span
                className="text-emerald-950 cursor-pointer hover:underline"
                onClick={toggleVariant}
              >
                {variant === "LOGIN" ? "Tạo tài khoản" : "Đi tới đăng nhập"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withBaseTopping(Login)
