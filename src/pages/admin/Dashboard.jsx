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

import { Input } from "antd";
import { Button } from "../../components";
import { Bell, HelpCircle, LogOut, Search, User } from "lucide-react";
import { IoMdNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt, FaUserCog, FaUserAstronaut, FaUsers } from 'react-icons/fa'; // Thư viện icon
import { PiTrafficSignalLight } from "react-icons/pi";
import { MdAdminPanelSettings, MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import AdminHeader from "@/components/header/AdminHeader";
import AdminLeftSidebar from "@/components/sidebar/AdminLeftSidebar";
const Dashboard = () => {

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
              {/*Thông tin hệ thống*/}
              <div className=" bg-white rounded-lg shadow-sm p-3">
                <div className="grid grid-cols-5 gap-2">
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md col-span-1">
                    <h2 className="text-xs font-bold">Thông tin hệ thống</h2>
                    <div className="flex items-center mt-3 mb-3">
                      <Input
                        type="text"
                        value={date.toLocaleDateString()}
                        readOnly
                        className="border rounded-lg p-2 w-28"
                      />
                      <FaCalendarAlt size={15} className="ml-3 cursor-pointer" onClick={handleToggleCalendar} />
                    </div>
                    {showCalendar && (
                      <div className="absolute mt-2 z-10">
                        <Calendar onChange={setDate} value={date} />
                      </div>
                    )}
                    <span className="text-xs font-bold">Tổng: 9 người dùng</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md grid-cols-1">
                    <h2 className="text-xs font-bold flex items-center justify-center">
                      <FaUserCog className="mr-2" />General User
                    </h2>
                    <h2 className="text-sm text-green-400 mt-3">1200 Hoạt động</h2>
                    <div className="w-full border-t border-gray-300 my-3" />
                    <h2 className="text-sm text-orange-500 mt-3">1200 Không Hoạt động</h2>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md grid-cols-1">
                    <h2 className="text-xs font-bold flex items-center justify-center">
                      <FaUserAstronaut className="mr-2" />Corporate User
                    </h2>
                    <h2 className="text-sm text-green-400 mt-3">1200 Hoạt động</h2>
                    <div className="w-full border-t border-gray-300 my-3" />
                    <h2 className="text-sm text-orange-500 mt-3">1200 Không Hoạt động</h2>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md grid-cols-1">
                    <h2 className="text-xs font-bold flex items-center justify-center">
                      <PiTrafficSignalLight className="mr-2" />Traffic Authority
                    </h2>
                    <h2 className="text-sm text-green-400 mt-3">1200 Hoạt động</h2>
                    <div className="w-full border-t border-gray-300 my-3" />
                    <h2 className="text-sm text-orange-500 mt-3">1200 Không Hoạt động</h2>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md grid-cols-1">
                    <h2 className="text-xs font-bold flex items-center justify-center">
                      <MdAdminPanelSettings className="mr-2" />Admin
                    </h2>
                    <h2 className="text-sm text-green-400 mt-3">1200 Hoạt động</h2>
                    <div className="w-full border-t border-gray-300 my-3" />
                    <h2 className="text-sm text-orange-500 mt-3">1200 Không Hoạt động</h2>
                  </div>
                </div>
              </div>

              {/* Thông tin người dùng*/}
              <div className=" bg-white rounded-lg shadow-md p-6 mt-10">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-4">Thông tin người dùng</h2>
                  </div>
                  <div className="flex items-center">
                    <h2 className="text-xl font-bold mr-9 text-blue-600">Gửi thông báo</h2>
                    <Button>
                      <IoMdDownload size={15} className="text-white" />Tải danh sách
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
                          <td className="py-3 px-6 text-left">{user.activity}</td>
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
export default Dashboard
