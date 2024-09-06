import React, { memo, useEffect, useRef, useState } from "react"
import { Link, NavLink, useSearchParams } from "react-router-dom"
import WithBaseTopping from "../../hocs/withBaseTopping"
import path from "../../ultils/path"
import { menu } from "../../ultils/constant"
import clsx from "clsx"
import { resetFilter } from "../../redux/appSlice"
import { AiOutlineHeart } from "react-icons/ai"
import { Button } from ".."
const activedStyle =
    "text-sm flex gap-2 items-center px-4 py-3 rounded-l-full rounded-r-full border border-white"
const notActivedStyle =
    "text-sm flex gap-2 items-center px-4 py-3 rounded-l-full rounded-r-full border border-emerald-800 hover:border-white"
const Navigation = ({ dispatch, location, navigate }) => {
    const [isShowOptions, setIsShowOptions] = useState(false)
    const [params] = useSearchParams()

    const handleShowOptions = (e) => {
        e.stopPropagation()
        if (!isShowOptions) setIsShowOptions(true)
        else setIsShowOptions(false)
      }

    return (
        <div className="flex bg-emerald-800 py-6 justify-center">
            <div className="w-main flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <Link className="text-3xl text-white font-bold" to={"/"}>
                        Clearway
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2 justify-center items-center">
                            <button
                                onClick={() =>
                                    navigate(`/${path.LOGIN}`, { state: "LOGIN" })
                                }
                                state={"LOGIN"}
                                className="text-emerald-800 rounded-md bg-gray-100 text-sm font-medium px-6 py-2"
                            >
                                Đăng nhập
                            </button>
                            <button
                                onClick={() =>
                                    navigate(`/${path.LOGIN}`, { state: "REGISTER" })
                                }
                                state={"REGISTER"}
                                className="text-emerald-800 rounded-md bg-gray-100 text-sm font-medium px-6 py-2"
                            >
                                Đăng ký
                            </button>
                        </div>

                        <div
                            onClick={handleShowOptions}
                            className="flex relative cursor-pointer items-center gap-2"
                        >
                            {isShowOptions && (
                                <div
                                    id="options"
                                    className="absolute flex flex-col min-w-[150px] w-fit z-50 top-full right-0 bg-white rounded-md border text-gray-800"
                                >

                                    <Link
                                        to={`/${path.MEMBER}/${path.PERSONAL}`}
                                        className="p-3 hover:bg-gray-100 hover:text-emerald-600 font-medium"
                                    >
                                        Thông tin cá nhân
                                    </Link>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 -ml-4 text-white">
                    {menu.map((el) => (
                        <NavLink
                            to={el.path}
                            key={el.id}
                            onClick={() => dispatch(resetFilter(true))}
                            className={({ isActive }) =>
                                clsx(
                                    params.get("type") === el.type
                                        ? activedStyle
                                        : notActivedStyle,
                                    !params.get("type") && isActive && activedStyle
                                )
                            }
                        >
                            <span>{el.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default WithBaseTopping(memo(Navigation))
