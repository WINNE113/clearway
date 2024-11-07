import React from 'react'
import { Bell, HelpCircle, LogOut, Search, User } from "lucide-react";
import { FaCalendarAlt, FaUserCog, FaUserAstronaut, FaUsers } from 'react-icons/fa'; // Thư viện icon
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import { MdAdminPanelSettings, MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const RightSidebar = () => {
  return (
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
  )
}

export default RightSidebar