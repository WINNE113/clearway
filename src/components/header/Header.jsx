import React from "react"
import WithBaseTopping from "../../hocs/withBaseTopping"
import clsx from "clsx"

const Header = ({ navigate }) => {
  return (
    <div
      className={clsx(
        "bg-emerald-800 flex justify-center text-white",
        !location.pathname.includes("danh-sach") && "h-[240px] pt-12"
      )}
    >
      <div className="w-main flex flex-col gap-8">
        <span className="text-6xl font-bold tracking-tight">
          Tìm kiếm nhanh với clearway
        </span>
      </div>
    </div>
  )
}

export default WithBaseTopping(Header)
