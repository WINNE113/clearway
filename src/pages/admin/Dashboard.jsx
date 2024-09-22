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
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt, FaUserCog, FaUserAstronaut, FaUsers } from 'react-icons/fa'; // Thư viện icon
import { PiTrafficSignalLight } from "react-icons/pi";
import { MdAdminPanelSettings, MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";

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

  // Quản lý trạng thái mở/đóng của user dropdown
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false); // State để hiển thị lịch
  const [activeTab, setActiveTab] = useState("generalUser")

  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue)
  }

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown); // Đảo trạng thái
  };

  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
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
                  <User className="h-5 w-5" />
                  <IoMdArrowDropdown className="ml-2 h-5 w-5" />
                </Button>

                {isOpenDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tùy chọn 1</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tùy chọn 2</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tùy chọn 3</li>
                    </ul>
                  </div>
                )}
              </div>
              <Button variant="ghost" size="icon" className=" bg-white text-cyan-800">
                <LogOut className="h-5 w-5" />
                <span>Đăng xuất</span>
              </Button>
            </div>
          </div>
        </header>
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
                    <tbody className="text-gray-600 text-sm font-light">
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
            <div className="bg-gray-100 rounded-lg shadow-md p-6 col-span-1">
              <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-5">
                <h2 className="text-2xl font-bold mb-4 flex items-center bord">
                  Gửi thông báo
                  <Bell size={25} className="ml-2 text-gray-500 text-red-400" />
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center p-2 bg-white text-blue-900 font-bold rounded shadow-md"><FaUsers className="mr-3" /> General User</li>
                  <li className="flex items-center p-2 bg-white text-blue-900 font-bold rounded shadow-md"><FaUserCog className="mr-3" /> Corporate User</li>
                  <li className="flex items-center p-2 bg-white text-blue-900 font-bold rounded shadow-md"><FaUserCog className="mr-3" />Traffic Authority</li>
                </ul>
              </div >
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  Cần sự trợ giúp
                  <HelpCircle className="ml-2 h-5 w-5 text-red-500" />
                </h2>
                <div className="flex items-center bg-white justify-center border p-4 shadow-md">
                  <div className="mr-3">
                    <img className="w-16 h-16" src="/introduction.svg"></img>
                  </div>
                  <div>
                    <h1 className="text-blue-900">Bắt đầu với ClearWay</h1>
                    <h1>Nhấn vào để tải về máy</h1>
                    <Link>Hướng dẫn sử dụng</Link>
                  </div>
                </div>
                <div className="flex items-center mt-5 bg-white justify-center border p-4 shadow-md">
                  <div className="mr-3">
                    <img className="w-16 h-16" src="/introduction.svg"></img>
                  </div>
                  <div>
                    <h1 className="text-blue-900">Lưu ý sử dụng hệ thống</h1>
                    <Link>Nhấn vào để xem</Link>
                  </div>
                </div>
                <div className="flex items-center mt-5 bg-white justify-center border p-4 shadow-md">
                  <div>
                    <h1 className="text-xl font-bold text-blue-800">Liên hệ hỗ trợ kỹ thuật: </h1>
                    <h1 className="text-blue-900 flex items-center mt-3"><MdEmail className="mr-3 text-blue-700" />clearwaytms@gmail.com</h1>
                    <h1 className="text-blue-900 flex items-center mt-3"><IoCallSharp className="mr-3 text-blue-600" />+84 332101033</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
export default Dashboard
