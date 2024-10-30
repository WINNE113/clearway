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
import AdminLeftSidebar from "@/components/sidebar/AdminLeftSidebar";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ManageUser = () => {

    // Sample data
    const userDataTabs = [
        {
            value: "generalUser",
            label: "Danh Sách General User",
            data: [
                { id: 1, fullName: "BabaYaga (WIN)", email: "babayaga@gmail.com", role: "Admin", status: "Đang hoạt động", activity: "Cập nhật" },
                { id: 2, fullName: "Nguyễn Văn A", email: "nguyenvana@gmail.com", role: "General User", status: "Đang bị khóa", activity: "Cập nhật" },
                { id: 3, fullName: "Nguyễn Văn B", email: "nguyenvanb@example.com", role: "Corporate User", status: "Đang hoạt động", activity: "Cập nhật" },
            ]
        },
        {
            value: "corporateUser",
            label: "Danh Sách Corporate User",
            data: [
                { id: 1, fullName: "BabaYaga (WIN)", email: "babayaga@gmail.com", role: "Admin", status: "Đang hoạt động", activity: "Cập nhật" },
                { id: 2, fullName: "Nguyễn Văn A", email: "nguyenvana@gmail.com", role: "General User", status: "Đang bị khóa", activity: "Cập nhật" },
                { id: 3, fullName: "Nguyễn Văn B", email: "nguyenvanb@example.com", role: "Corporate User", status: "Đang hoạt động", activity: "Cập nhật" },
            ]
        },
        {
            value: "trafficAuthoriry",
            label: "Danh Sách Traffic Authority",
            data: [
                { id: 1, fullName: "BabaYaga (WIN)", email: "babayaga@gmail.com", role: "Admin", status: "Đang hoạt động", activity: "Cập nhật" },
                { id: 2, fullName: "Nguyễn Văn A", email: "nguyenvana@gmail.com", role: "General User", status: "Đang bị khóa", activity: "Cập nhật" },
                { id: 3, fullName: "Nguyễn Văn B", email: "nguyenvanb@example.com", role: "Corporate User", status: "Đang hoạt động", activity: "Cập nhật" },
            ]
        },
        {
            value: "adminUser",
            label: "Danh Sách Admin",
            data: [
                { id: 1, fullName: "BabaYaga (WIN)", email: "babayaga@gmail.com", role: "Admin", status: "Đang hoạt động", activity: "Cập nhật" },
                { id: 2, fullName: "Nguyễn Văn A", email: "nguyenvana@gmail.com", role: "General User", status: "Đang bị khóa", activity: "Cập nhật" },
                { id: 3, fullName: "Nguyễn Văn B", email: "nguyenvanb@example.com", role: "Corporate User", status: "Đang hoạt động", activity: "Cập nhật" },
            ]
        },
    ]

    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false); // State để hiển thị lịch
    const [activeTab, setActiveTab] = useState("generalUser")

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
                                    <div className="flex items-center">
                                        <Button>
                                            <IoMdAdd size={15} className="text-white" /> Add New
                                        </Button>
                                    </div>
                                </div>
                                <div className="mb-4 mt-5">
                                    {userDataTabs.map((tab) => (
                                        <button
                                            key={tab.value}
                                            className={`mr-2 px-2 py-3 text-sm rounded ${activeTab === tab.value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
                                                <th className="py-3 px-6 text-left">Họ và Tên</th>
                                                <th className="py-3 px-6 text-left">Email</th>
                                                <th className="py-3 px-6 text-left">Role</th>
                                                <th className="py-3 px-6 text-left">Tình trạng</th>
                                                <th className="py-3 px-6 text-left">Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-950 text-sm font-light">
                                            {userDataTabs.find(tab => tab.value === activeTab).data.map((user) => (
                                                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                                                    <td className="py-3 px-6 text-left whitespace-nowrap">{user.fullName}</td>
                                                    <td className="py-3 px-6 text-left">{user.email}</td>
                                                    <td className="py-3 px-6 text-left">{user.role}</td>
                                                    <td className="py-3 px-6 text-left">{user.status}</td>
                                                    <td className="py-3 px-6 flex space-x-4 justify-center items-center">
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
                        <AdminLeftSidebar />
                    </div>
                </main>
            </div>
        </div>
    )
}
export default ManageUser
