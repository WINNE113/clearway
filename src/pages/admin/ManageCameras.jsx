import React from 'react'
import AdminHeader from '@/components/header/AdminHeader'
import AdminLeftSidebar from '@/components/sidebar/AdminLeftSidebar'
import { IoMdAdd } from "react-icons/io";
import { Button } from '@/components';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ManageCameras = () => {
    const routers = [
        {
            id: "Cam - 1",
            streetName: "Đường A",
            coordinates: "1234",
            status: "Hoạt động",
            linkConnected: "https://wwww.example.cam1.com"
        },
        {
            id: "Cam - 2",
            streetName: "Đường B",
            coordinates: "1234",
            status: "Không hoạt động",
            linkConnected: "https://wwww.example.cam2.com"
        },
        {
            id: "Cam - 3",
            streetName: "Đường C",
            coordinates: "1234",
            status: "Hoạt động",
            linkConnected: "https://wwww.example.cam3.com"
        },
        {
            id: "Cam - 4",
            streetName: "Đường D",
            coordinates: "1234",
            status: "Không hoạt động",
            linkConnected: "https://wwww.example.cam4.com"
        },
    ]
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            <div className=" bg-white rounded-lg shadow-sm p-3">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md col-span-1">
                                        <h2 className="text-lg font-bold">Tổng số Camera</h2>
                                        <span className="text-lg font-bold">222</span>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md col-span-1 text-green-700">
                                        <h2 className="text-lg font-bold">Hoạt động</h2>
                                        <span className="text-lg font-bold">2</span>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md col-span-1 text-red-700">
                                        <h2 className="text-lg font-bold">Không hoạt động</h2>
                                        <span className="text-lg font-bold">4</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" bg-white rounded-lg shadow-md p-6 mt-10">
                                <div className="flex justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold mb-4">Danh sách các Camera</h2>
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
                                                <th className="py-3 px-6 text-left">CamID</th>
                                                <th className="py-3 px-6 text-left">Tuyến đường</th>
                                                <th className="py-3 px-6 text-left">Tọa độ</th>
                                                <th className="py-3 px-6 text-left">Tình trạng</th>
                                                <th className="py-3 px-6 text-left">Liên kết</th>
                                                <th className="py-3 px-6 text-left">Cập nhật</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-950 text-sm font-light">
                                            {routers.map((router) => (
                                                <tr key={router.id} className="border-b border-gray-200 hover:bg-gray-100">
                                                    <td className="py-3 px-6 text-left whitespace-nowrap">{router.id}</td>
                                                    <td className="py-3 px-6 text-left">{router.streetName}</td>
                                                    <td className="py-3 px-6 text-left">{router.coordinates}</td>
                                                    <td className="py-3 px-6 text-left">{router.status}</td>
                                                    <td className="py-3 px-6 text-left">{router.linkConnected}Km</td>
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
                        <AdminLeftSidebar />
                    </div>
                </main>
            </div>
        </div>
    )
}
export default ManageCameras