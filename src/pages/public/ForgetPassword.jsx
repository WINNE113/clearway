import WithBaseTopping from "@/hocs/withBaseTopping";
import React, { useState, useEffect, useCallback } from "react";
import { InputForm } from "@/components";
import { useForm } from "react-hook-form";
import { Button } from "@/components";
import { apiForgetPassword } from "@/apis/user";
import { OtpVerifyEmail } from "@/components";
import Swal from "sweetalert2";
import { modal } from "@/redux/appSlice"

const ForgetPassword = ({ navigate, dispatch }) => {
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (payload) => {
        try {
            const { email } = payload;
            setIsLoading(true)
            const response = await apiForgetPassword({ email })
            setIsLoading(false)
            if (response?.message === "OTP has been sent to your email successfully") {
                console.log("Come heee")
                dispatch(
                    modal({
                        isShowModal: true,
                        modalContent: <OtpVerifyEmail email={email} />,
                    })
                );
            } else {
                Swal.fire('Oops...', response?.detail, 'error');
                reset()
            }

        } catch (error) {
            // Handle any unexpected errors
            Swal.fire('Oops...', '' || 'Đã xảy ra lỗi, vui lòng thử lại sau.', 'error');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full flex flex-col items-center gap-8 mt-28">
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
                        className="rounded-lg shadow-sm inset-0 p-8 flex flex-col gap-8 w-[500px]">
                        <img
                            src="logo.svg"
                            className="object-cover mt-6 w-14 h-14 flex justify-center items-center mx-auto"
                            alt="logo"
                        />
                        <h2 className="text-3xl text-gray-700 tracking-tight font-bold m-auto">
                            Forget Password
                        </h2>
                        <InputForm
                            label="Enter your email"
                            textColor="#333333"
                            register={register}
                            errors={errors}
                            id="email"
                            validate={{ required: "Trường này không được bỏ trống." }}
                            placeholder="mail@abc.com"
                            fullWidth
                        />
                        <Button type="submit" fullWidth className="mt-3 rounded-full">
                            Get OTP
                        </Button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default WithBaseTopping(ForgetPassword)