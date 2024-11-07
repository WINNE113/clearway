import path from "./path"

import {
    MdOutlineAttachMoney,
    MdHistory,
    MdReportGmailerrorred,
} from "react-icons/md"
import {
    RiFileEditLine,
    RiShareForwardFill,
    RiPriceTag2Line,
} from "react-icons/ri"
import {
    BsFilePerson,
    BsPostcard,
    BsFillPieChartFill,
    BsFillHouseGearFill,
    BsDropletHalf,
    BsCashCoin,
    BsStack,
} from "react-icons/bs"
import {
    AiFillDashboard,
    AiFillDollarCircle,
    AiFillMoneyCollect,
    AiOutlineDashboard,
    AiOutlineHeart,
    AiOutlineUser,
} from "react-icons/ai"
import { GiTrafficLightsRed, GiCctvCamera  } from "react-icons/gi";
import { BiSolidReport } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";

export const menu = [
    {
        path: "#",
        name: "Thống kê",
        subname: "Thống kê",
        id: "thongke",
        type: path.THONGKE,
    },
    {
        path: "#",
        name: "Cửa hàng",
        id: "cuahang",
        type: path.CUAHANG,
        subname: "Cửa hàng",
    },
    {
        path: "#",
        name: "Nav 3",
        id: "Navigation 3",
        type: path.NAV3,
        subname: "Navigation 3",
    },
    {
        path: "#",
        name: "Nav 4",
        id: "Navigation 4",
        type: path.NAV4,
        subname: "Navigation 4",
    },
]

export const adminSidebar = [
    {
        id: 5,
        name: "Thống kê tổng quan",
        path: `/${path.ADMIN}/${path.DASHBOARD}`,
        icon: <AiOutlineDashboard size={20} />,
        type: "SINGLE",
    },
    {
        id: 4,
        name: "Quản lý người dùng",
        path: `/${path.ADMIN}/${path.AD_MANAGE_USER}`,
        icon: <AiOutlineUser size={20} />,
        type: "SINGLE",
    },
   
    {
        id: 5733438,
        name: "Quản lý tình trạng giao thông",
        path: `/${path.ADMIN}/${path.AD_MANAGE_TRAFFIC_STATUS}`,
        icon: <MdReportGmailerrorred size={20} />,
        type: "SINGLE",
    },
    {
        id: 355665,
        name: "Quản lý tuyến đường",
        icon: <BsPostcard size={20} />,
        type: "SINGLE",
        path: `/${path.ADMIN}/${path.AD_MANAGE_ROUTES}`,
    },
    {
        id: 5733678,
        name: "Quản lý biển báo giao thông",
        path: `/${path.ADMIN}/${path.AD_MANAGER_TRAFFIC_SIGN}`,
        icon: <GiTrafficLightsRed size={20} />,
        type: "SINGLE",
    },
    {
        id: 573367842,
        name: "Quản lý báo cáo",
        path: `/${path.ADMIN}/${path.AD_MANAGE_REPORT}`,
        icon: <BiSolidReport size={20} />,
        type: "SINGLE",
    },  
    {
        id: 6842,
        name: "Quản lý thông báo",
        path: `/${path.ADMIN}/${path.AD_MANAGE_NOTIFICATION}`,
        icon: <IoIosNotifications size={20} />,
        type: "SINGLE",
    },
    {
        id: 5734378,
        name: "Quản lý camera",
        path: `/${path.ADMIN}/${path.AD_MANAGE_CAMERA}`,
        icon: <GiCctvCamera  size={20} />,
        type: "SINGLE",
    }, 
    {
        id: 576538,
        name: "Quản lý thanh toán",
        path: `/${path.ADMIN}/${path.AD_MANAGE_TRANSACTION}`,
        icon: <RiPriceTag2Line size={20} />,
        type: "SINGLE",
    },
]

export const trafficAuthoritySidebar = [
    {
        id: 5733438,
        name: "Quản lý tình trạng giao thông",
        path: `/${path.TRAFFIC_AUTHORITY}/${path.TA_MANAGE_TRAFFIC_STATUS}`,
        icon: <MdReportGmailerrorred size={20} />,
        type: "SINGLE",
    },
    {
        id: 355665,
        name: "Quản lý tuyến đường",
        icon: <BsPostcard size={20} />,
        type: "SINGLE",
        path: `/${path.TRAFFIC_AUTHORITY}/${path.TA_MANAGE_ROUTE}`,
    },
    {
        id: 5733678,
        name: "Quản lý biển báo giao thông",
        path: `/${path.TRAFFIC_AUTHORITY}/${path.TA_MANAGER_TRAFFIC_SIGN}`,
        icon: <GiTrafficLightsRed size={20} />,
        type: "SINGLE",
    },
    {
        id: 573367842,
        name: "Quản lý báo cáo",
        path: `/${path.TRAFFIC_AUTHORITY}/${path.TA_MANAGE_REPORT}`,
        icon: <BiSolidReport size={20} />,
        type: "SINGLE",
    }
]

export const coperateSidebar = [
    {
        id: 5733438,
        name: "Quản lý tình trạng giao thông",
        path: `/${path.COPERATE}/${path.CO_MANAGE_TRAFFIC_STATUS}`,
        icon: <MdReportGmailerrorred size={20} />,
        type: "SINGLE",
    }
]