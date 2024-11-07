import { Title } from "../../components";
import { Fragment, useState, useEffect } from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

import { Button } from "../../components";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import AdminHeader from "@/components/header/AdminHeader";
import RightSidebar from "@/components/sidebar/RightSidebar";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const ManageUser = () => {

    // Sample data
    const userDataTabs = [
        {
            value: "allUsers",
            label: "Danh sách Tất Cả",
            data: [
                { id: 1, image: "/user.svg", fullName: "BabaYaga (WIN)", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "Admin", dob: "18/09/2001", sex: "Nam", status: "Ban", activity: "Cập nhật" },
                { id: 2, image: "/user.svg", fullName: "Ngyễn Công Vinh", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "Traffic Authority", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" },
                { id: 3, image: "/user.svg", fullName: "Nguyễn Văn A", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "User", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" }
            ]
        },
        {
            value: "generalDaUser",
            label: "Danh Sách General User",
            data: [
                { id: 1, image: "/user.svg", fullName: "BabaYaga (WIN)", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "Admin", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" },
                { id: 2, image: "/user.svg", fullName: "Ngyễn Công Vinh", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "Traffic Authority", dob: "18/09/2001", sex: "Nam", status: "Ban", activity: "Cập nhật" },
                { id: 3, image: "/user.svg", fullName: "Nguyễn Văn A", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "User", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" }
            ]
        },
        {
            value: "corporateUser",
            label: "Danh Sách Corporate User",
            data: [
                { id: 1, image: "/user.svg", fullName: "BabaYaga (WIN)", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "Admin", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" },
                { id: 2, image: "/user.svg", fullName: "Ngyễn Công Vinh", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "Traffic Authority", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" },
                { id: 3, image: "/user.svg", fullName: "Nguyễn Văn A", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "User", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" }
            ]
        },
        {
            value: "trafficAuthoriry",
            label: "Danh Sách Traffic Authority",
            data: [
                { id: 2, image: "/user.svg", fullName: "Ngyễn Công Vinh", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "Traffic Authority", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" },
                { id: 2, image: "/user.svg", fullName: "Ngyễn Công Vinh", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "Traffic Authority", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" }

            ]
        },
        {
            value: "adminUser",
            label: "Danh Sách Admin",
            data: [
                { id: 1, image: "/user.svg", fullName: "BabaYaga (WIN)", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "Admin", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" },
                { id: 1, image: "/user.svg", fullName: "BabaYaga (WIN)", email: "babayaga@gmail.com", phoneNumber: "033201024", role: "Admin", dob: "18/09/2001", sex: "Nam", status: "Unban", activity: "Cập nhật" }
            ]
        }
    ]

    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false); // State để hiển thị lịch
    const [activeTab, setActiveTab] = useState("allUsers")

    const handleTabChange = (tabValue) => {
        setActiveTab(tabValue)
    }
    const handleToggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navigation */}
                <AdminHeader />
                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            {/* Thông tin người dùng*/}
                            <div className=" bg-white rounded-lg shadow-md p-6">
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold mb-4">Thông tin người dùng</h2>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Button className="text-blue-600 bg-whit border border-blue-600">
                                            <IoMdAdd size={15} /> Tạo tài khoản Traffic Authority
                                        </Button>
                                        <Button>
                                            <IoMdDownload size={15} className="text-white" />Tải danh sách
                                        </Button>
                                    </div>
                                </div>
                                <div className="mb-4 mt-5">
                                    {userDataTabs.map((tab) => (
                                        <button
                                            key={tab.value}
                                            className={`mr-2 px-2 mb-5 py-3 text-sm rounded ${activeTab === tab.value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                            onClick={() => handleTabChange(tab.value)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                <th className="py-3 px-6 text-left">Ngày tạo</th>
                                                <th className="py-3 px-6 text-left">Hình ảnh</th>
                                                <th className="py-3 px-6 text-left">Họ và Tên</th>
                                                <th className="py-3 px-6 text-left">Email</th>
                                                <th className="py-3 px-6 text-left">Số điện thoại</th>
                                                <th className="py-3 px-6 text-left">Vai trò</th>
                                                <th className="py-3 px-6 text-left">Ngày sinh</th>
                                                <th className="py-3 px-6 text-left">Giới tính</th>
                                                <th className="py-3 px-6 text-left">Tình trạng</th>
                                                <th className="py-3 px-6 text-left">Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-950 text-sm font-light">
                                            {userDataTabs.find(tab => tab.value === activeTab).data?.map((user) => (
                                                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                                                    <td className="py-3 px-6 text-left whitespace-nowrap">{user.dob}</td>
                                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                                        <img src={user.image} className="w-16 h-16" />
                                                    </td>
                                                    <td className="py-3 px-6 text-left whitespace-nowrap">{user.fullName}</td>
                                                    <td className="py-3 px-6 text-left">{user.email}</td>
                                                    <td className="py-3 px-6 text-left">{user.phoneNumber}</td>
                                                    <td className="py-3 px-6 text-left">{user.role}</td>
                                                    <td className="py-3 px-6 text-left">{user.dob}</td>
                                                    <td className="py-3 px-6 text-left">{user.sex}</td>
                                                    <td className="py-3 px-6 text-left">{user.status}</td>
                                                    <td className="py-3 px-6 flex space-x-4 justify-center items-center mt-5">
                                                        <Button onClick="#" className="w-6 h-6 text-black"><FaRegEdit /></Button>
                                                        <Button onClick="#" className="w-6 h-6 text-red-600"><MdDelete /></Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* Notifications Panel */}
                        <RightSidebar />
                    </div>
                </main>
            </div>
        </div>
    )
}
export default ManageUser
