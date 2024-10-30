import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Input } from "antd";
import { IoMdNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import { Button } from "../../components";
import { Bell, HelpCircle, LogOut, Search, User } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/userSlice';
import { TbLogin } from "react-icons/tb";
import path from '@/ultils/path';
import { useNavigate } from 'react-router-dom';
const AdminHeader = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Quản lý trạng thái mở/đóng của user dropdown
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const { current } = useSelector((state) => state.user)
    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown); // Đảo trạng thái
    };

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("_id");
    }

    const handleLogin = () => {
        navigate(`/${path.LOGIN}`);
    }

    return (
        <header className="bg-white shadow-sm rounded-lg">
            <div className="flex items-center justify-between p-4">
                <div className="w-1/3"></div>
                <div className="w-1/3 flex justify-center">
                    <div className="relative w-full max-w-md">
                        <span className="absolute inset-y-0 left-3 flex items-center z-10">
                            <CiSearch size={22} className="text-gray-600" />
                        </span>
                        <Input
                            type="search"
                            placeholder="Nhập nội dung tìm kiếm"
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-500"
                        />
                    </div>
                </div>
                <div className="w-1/3 flex justify-end items-center space-x-2">
                    <div className="relative">
                        <Button variant="ghost" size="icon" className="bg-white text-black relative">
                            <IoMdNotificationsOutline size={25} className="relative" />
                            <span className="absolute top-4 right-5 translate-x-1/2 -translate-y-1/2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                        </Button>
                    </div>
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full border bg-slate-300 text-cyan-800 flex items-center"
                            onClick={toggleDropdown}
                        >
                            <img
                                src={current?.profile_picture || "/user.svg"}
                                className='w-5 h-5'
                            />
                            <IoMdArrowDropdown className="ml-2 h-5 w-5" />
                        </Button>
                        {current?._id && (
                            <>
                                {isOpenDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                                        <ul className="py-2">
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tùy chọn 1</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tùy chọn 2</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tùy chọn 3</li>
                                        </ul>
                                    </div>
                                )}
                            </>
                        )
                        }
                    </div>
                    {current?._id ? (
                        <>
                            <Button variant="ghost" size="icon" className=" bg-white text-cyan-800">
                                <LogOut className="h-5 w-5" />
                                <span onClick={handleLogout}>Đăng xuất</span>
                            </Button>
                        </>
                    ) : (
                        <><Button onClick={handleLogin} variant="ghost" size="icon" className=" bg-white text-cyan-800">
                            <TbLogin className="h-5 w-5" />
                            <span>Đăng nhập</span>
                        </Button></>
                    )
                    }
                </div>
            </div>
        </header>
    )
}

export default AdminHeader