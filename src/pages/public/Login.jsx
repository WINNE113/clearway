import React, { Fragment, useCallback, useEffect, useState } from "react"

// import component
import { Button, InputForm } from "../../components";

import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import { useSelector } from "react-redux"
import withBaseTopping from "@/hocs/WithBaseTopping"
import { Link, useSearchParams } from "react-router-dom"
import { modal } from "@/redux/appSlice"
import { apiLogin, apiRegister, apiVerifyEmail } from "@/apis/user";
import { OtpVerify } from "../../components";

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
          Swal.fire('Success', 'Đăng nhập thành công!', 'success');
          return navigate("/");
        } else {
          // Handle login error
          Swal.fire('Oops...', 'Sai email hoặc mật khẩu. Vui lòng thử lại.', 'error');
        }
      } else if (variant === "REGISTER") {
        // Handle register logic here
        const { username, email, password } = payload;
        setIsLoading(true)
        const verifyEmailResponse = await apiVerifyEmail({ username, email, password });
        setIsLoading(false)
        if (verifyEmailResponse?.message === "Send OTP Success") {
          console.log("come here")
          dispatch(
            modal({
              isShowModal: true,
              modalContent: <OtpVerify username={username} email={email} password={password} setVariant={setVariant} />,
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
                  label="Tên của bạn"
                  register={register}
                  errors={errors}
                  id="username"
                  validate={{ required: "Trường này không được bỏ trống." }}
                  fullWidth
                  placeholder={"Họ và tên của bạn"}
                />
              </Fragment>
            )}

            <Button disabled={isLoading} type="submit" fullWidth className="mt-3">
              {variant === "LOGIN" ? "Đăng nhập" : "Đăng ký tài khoản"}
            </Button>
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