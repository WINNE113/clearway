import React from 'react'
import AdminHeader from '@/components/header/AdminHeader'
import AdminLeftSidebar from '@/components/sidebar/AdminLeftSidebar'
import { IoMdAdd } from "react-icons/io";
import { Button } from '@/components';
import { FaRegEdit } from "react-icons/fa";
import { modal } from '@/redux/appSlice';
import CreateRouter from './CreateRouter';

const ManageRouters = () => {
    const routers = [
        {
            id: 1,
            streetName: "Đường A",
            startAddress: "A",
            endAddress: "C",
            district: "300",
            vehicle: "Xe máy",
            estimateTime: "20",
            trafficStatue: "Bình thường"
        },
        {
            id: 2,
            streetName: "Đường A",
            startAddress: "A",
            endAddress: "C",
            district: "300",
            vehicle: "Xe máy",
            estimateTime: "20",
            trafficStatue: "Tắt đường"
        },
        {
            id: 3,
            streetName: "Đường A",
            startAddress: "A",
            endAddress: "C",
            district: "300",
            vehicle: "Xe máy",
            estimateTime: "20",
            trafficStatue: "Ngập nước"
        },
        {
            id: 4,
            streetName: "Đường A",
            startAddress: "A",
            endAddress: "C",
            district: "300",
            vehicle: "Xe máy",
            estimateTime: "20",
            trafficStatue: "Tai nạn giao thông"
        }
    ]
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            <div className=" bg-white rounded-lg shadow-sm p-3">
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md col-span-1">
                                        <h2 className="text-lg font-bold">Tuyến đường</h2>
                                        <span className="text-lg font-bold">9</span>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md col-span-1 text-rose-700">
                                        <h2 className="text-lg font-bold">Kẹt xe</h2>
                                        <span className="text-lg font-bold">2</span>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md col-span-1 text-orange-600">
                                        <h2 className="text-lg font-bold">Nước gập</h2>
                                        <span className="text-lg font-bold">3</span>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md col-span-1 text-red-700">
                                        <h2 className="text-lg font-bold">Tai nạn giao thông</h2>
                                        <span className="text-lg font-bold">4</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" bg-white rounded-lg shadow-md p-6 mt-10">
                                <div className="flex justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold mb-4">Thông tin các tuyến đường</h2>
                                    </div>
                                    <div className="flex items-center h-10">
                                        <Button onClick={() =>
                                            dispatch(
                                                modal({
                                                    isShowModal: true,
                                                    modalContent: <UpdateService serviceId={el.id} />,
                                                })
                                            )
                                        }>
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
                                                <th className="py-3 px-6 text-left">Phương tiện</th>
                                                <th className="py-3 px-6 text-left">Thời gian ước tính hoàn thành</th>
                                                <th className="py-3 px-6 text-left">Tình trạng tuyến đường</th>
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
                                                    <td className="py-3 px-6 text-left">{router.district}Km</td>
                                                    <td className="py-3 px-6 text-left">{router.vehicle}</td>
                                                    <td className="py-3 px-6 text-left">{router.estimateTime}p</td>
                                                    <td className={`py-3 px-6 text-left ${router.trafficStatue == "Tắt đường" ? "text-red-700" : ""}`}>{router.trafficStatue}</td>
                                                    <td className="py-3 px-6 text-left"><FaRegEdit size={20} /></td>
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

export default ManageRouters