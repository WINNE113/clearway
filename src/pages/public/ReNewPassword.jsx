import WithBaseTopping from "@/hocs/withBaseTopping";
import React, { useState, useEffect, useCallback } from "react";
import { InputForm, Button } from "@/components";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { apiReNewPassword } from "@/apis/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import path from "@/ultils/path";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
const ReNewPassword = ({ navigate, dispatch }) => {
    const natigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (payload) => {
        try {
            const { password, confirmPassword } = payload;
            const response = await apiReNewPassword({
                id: id,
                new_password: password,
                re_new_password: confirmPassword
            })
            if (response?.message === "Password has been reset successfully") {
                toast.success(response?.message);
                natigate(`${path.LOGIN}`)
            } else {
                toast.error(response?.detail);
                reset();
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
                        <div className="relative">
                            <InputForm
                                label="Re-enter password"
                                textColor="#333333"
                                register={register}
                                errors={errors}
                                id="confirmPassword"
                                validate={{
                                    required: "Trường này không được bỏ trống.",
                                }}
                                type={showRePassword ? "text" : "password"}
                                fullWidth
                                placeholder="**************"
                            />
                            <button
                                type="button"
                                className="absolute -mt-5 inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowRePassword(!showRePassword)}
                            >
                                {showRePassword ? (
                                    <FaEyeSlash className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <FaEye className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                            <Button type="submit" fullWidth className="mt-3 rounded-full">
                               Re-set Password
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default WithBaseTopping(ReNewPassword)