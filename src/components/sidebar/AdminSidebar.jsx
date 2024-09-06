import WithBaseTopping from "../../hocs/withBaseTopping"
import { adminSidebar } from "../../ultils/constant"
import { formatMoney } from "../../ultils/fn"
import clsx from "clsx"
import React, { Fragment, useState } from "react"
import {
  AiFillCaretRight,
  AiFillCaretDown,
  AiOutlineLogout,
} from "react-icons/ai"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const AdminSidebar = ({ dispatch }) => {
  const [tabs, setTabs] = useState([])
  const handleTabs = (tabId) => {
    if (tabs.some((el) => el === tabId))
      setTabs((prev) => prev.filter((el) => el !== tabId))
    else setTabs((prev) => [...prev, tabId])
  }
  return (
    <div className="w-full min-h-screen">
      <div className="py-12 pb-6 flex flex-col gap-1 justify-center items-center w-full">
        <span className="text-3xl text-emerald-700 tracking-tight font-bold">
          SweetDream
        </span>
        <small className="text-sm font-medium text-red-500 ">
          Admin workspace
        </small>
        <div className="mt-4 flex flex-col items-center justify-center gap-1">
          <img
            src= "/user.svg"
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
          <span className="text-main-red font-bold">NGUYEN VAN A</span>
          <span>#Code ID</span>
        </div>
      </div>
      <div>
        {adminSidebar.map((el) => (
          <Fragment key={el.id}>
            {el.type === "SINGLE" && (
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    "flex hover:bg-blue-100 w-full  p-3 items-center gap-2",
                    isActive && "text-main-blue font-bold bg-blue-100"
                  )
                }
                to={el.path}
              >
                {el.icon}
                {el.name}
              </NavLink>
            )}
            {el.type === "PARENT" && (
              <div className="flex flex-col" to={el.path}>
                <div
                  onClick={() => handleTabs(el.id)}
                  className={clsx(
                    "flex justify-between p-3 cursor-pointer items-center",
                    tabs.some((t) => t === el.id) && "text-main-600 font-bold"
                  )}
                >
                  <span className="flex gap-2  items-center">
                    {el.icon}
                    {el.name}
                  </span>
                  {tabs.some((t) => t === el.id) ? (
                    <AiFillCaretDown />
                  ) : (
                    <AiFillCaretRight />
                  )}
                </div>
                {tabs.some((t) => t === el.id) &&
                  el.subs.map((item, idx) => (
                    <NavLink
                      key={idx}
                      className={({ isActive }) =>
                        clsx(
                          "flex pl-8 hover:bg-blue-100 w-full  p-3 items-center gap-2",
                          isActive && "text-main-blue font-bold bg-blue-100"
                        )
                      }
                      to={item.path}
                    >
                      {item.name}
                    </NavLink>
                  ))}
              </div>
            )}
          </Fragment>
        ))}
        <span
          className={clsx(
            "flex cursor-pointer hover:bg-blue-100 w-full p-3 items-center gap-2"
          )}
        >
          <AiOutlineLogout size={20} />
          <span>Đăng xuất</span>
        </span>
      </div>
    </div>
  )
}

export default WithBaseTopping(AdminSidebar)
