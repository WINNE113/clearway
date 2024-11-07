import React from 'react'
import AdminHeader from '@/components/header/AdminHeader'
import RightSidebar from '@/components/sidebar/RightSidebar'
import { IoMdAdd } from "react-icons/io";
import { Button } from '@/components';
import { FaRegEdit } from "react-icons/fa";

const TAManageTrafficStatus = () => {
    const routers = [
        {
            id: 1,
            streetName: "Đường A",
            startAddress: "A",
            endAddress: "C",
            district: "300",
            jamTime: "7h30 - 9:00",
            level: "Cập nhật",
            vehicle: "Xe máy",
            estimateTime: "20",
            trafficStatue: "Bình thường",
            airyTime: "50", 
           
        },
        {
            id: 2,
            streetName: "Đường A",
            startAddress: "A",
            endAddress: "C",
            district: "300",
            vehicle: "Xe máy",
            estimateTime: "20",
            trafficStatue: "Tắt đường",
            jamTime: "7h30 - 9:00",
            level: "Cao",
            airyTime: "30", 
        },
        {
            id: 3,
            streetName: "Đường A",
            startAddress: "A",
            endAddress: "C",
            district: "300",
            vehicle: "Xe máy",
            estimateTime: "20",
            trafficStatue: "Ngập nước",
            jamTime: "7h30 - 9:00",
            level: "Cao",
            airyTime: "10", 
        },
        {
            id: 4,
            streetName: "Đường A",
            startAddress: "A",
            endAddress: "C",
            district: "300",
            vehicle: "Xe máy",
            estimateTime: "20",
            trafficStatue: "Tai nạn giao thông",
            jamTime: "4h30 - 10:00",
            level: "Bình thường",
            airyTime: "50", 
        }
    ]
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            <div className=" bg-white rounded-lg shadow-md p-6">
                                <div className="flex justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold mb-4">Thống kê tình trạng các tuyến đường</h2>
                                    </div>
                                    <div className="flex items-center h-10">
                                        <Button>
                                            <IoMdAdd size={20} className="text-white" />Add New
                                        </Button>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                <th className="py-3 px-6 text-left">RoadID</th>
                                                <th className="py-3 px-6 text-left">Tên Đường</th>
                                                <th className="py-3 px-6 text-left">Địa điểm bắt đầu</th>
                                                <th className="py-3 px-6 text-left">Địa điểm kết thúc</th>
                                                <th className="py-3 px-6 text-left">Khoảng cách</th>
                                                <th className="py-3 px-6 text-left">Khung giờ tắc đường</th>
                                                <th className="py-3 px-6 text-left">Tình trạng tuyến đường</th>
                                                <th className="py-3 px-6 text-left">Mức độ</th>
                                                <th className="py-3 px-6 text-left">Thông thoáng</th>
                                                <th className="py-3 px-6 text-left">Cập nhật</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-950 text-sm font-light">
                                            {routers.map((router) => (
                                                <tr key={router.id} className="border-b border-gray-200 hover:bg-gray-100">
                                                    <td className="py-3 px-6 text-left whitespace-nowrap">{router.id}</td>
                                                    <td className="py-3 px-6 text-left">{router.streetName}</td>
                                                    <td className="py-3 px-6 text-left">{router.startAddress}</td>
                                                    <td className="py-3 px-6 text-left">{router.endAddress}</td>
                                                    <td className="py-3 px-6 text-left">{router.district}km</td>
                                                    <td className="py-3 px-6 text-left">{router.jamTime}</td>
                                                    <td className="py-3 px-6 text-left">{router.trafficStatue}</td>
                                                    <td className={`py-3 px-6 text-left ${router.level == "Cao" ? "text-red-700" : ""}`}>{router.level}</td>
                                                    <td className="py-3 px-6 text-left">{router.airyTime}p</td>
                                                    <td className="py-3 px-6 text-left"><FaRegEdit size={20} /></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <RightSidebar />
                    </div>
                </main>
            </div>
        </div>
    )
}
export default TAManageTrafficStatus