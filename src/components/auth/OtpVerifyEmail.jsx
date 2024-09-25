import React, { useState } from "react"
import OtpInput from "react-otp-input"
import { Button } from ".."
import { GoDotFill } from "react-icons/go"
import { apiResetPasswordOTP } from "@/apis/user"
import withBaseTopping from "@/hocs/WithBaseTopping"
import { modal } from "@/redux/appSlice"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import path from "@/ultils/path"
const OtpVerifyEmail = ({ email, dispatch }) => {
    const navigate = useNavigate(); // Use navigate hook for programmatic navigation
    const [otp, setOtp] = useState("")
    const handleSendOTP = async () => {
        const response = await apiResetPasswordOTP({
            email,
            otp
        })
        if (response?.id) {
            Swal.fire({
                icon: "success",
                text: "Xác thực thành công. Vui lòng nhập mật khẩu mới",
                title: "Congrats!",
            }).then(() => {
                dispatch(modal({ isShowModal: false, modalContent: null }))
                navigate(`${path.RENEW_PASSWORD}?id=${response.id}`);
            })
        } else toast.error('Lỗi xác thực OTP')
    }
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-8 rounded-md flex flex-col items-center justify-center gap-8"
        >
            <h3>Chúng tôi đã gửi mã OTP tới email của bạn. Hãy nhập OTP:</h3>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
                inputStyle="h-16 border rounded-md outline-none inline-block otp-item border-emerald-500 text-lg mx-4"
                renderSeparator={
                    <span className="text-emerald-500">
                        <GoDotFill />
                    </span>
                }
            />
            <Button onClick={handleSendOTP}>Xác minh OTP</Button>
        </div>
    )
}

export default withBaseTopping(OtpVerifyEmail)
