import { menu } from "../../ultils/constant"
import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-emerald-700 text-white p-6">
      <div className="w-main mx-auto grid grid-cols-5 gap-4">
        <div className="col-span-1 flex justify-center items-center">
          <span className="text-3xl font-bold tracking-tight">
            clearway
          </span>
        </div>
        <div className="col-span-1 py-6 flex flex-col gap-1">
          <h1 className="uppercase font-bold pb-2">về chúng tôi</h1>
          <Link to={"/"} className="hover:underline">
            Quy chế hoạt động
          </Link>
          <Link to={"/"} className="hover:underline">
            Chính sách bảo mật
          </Link>
          <Link to={"/"} className="hover:underline">
            Giải quyết khiếu nại
          </Link>
          <Link to={"/"} className="hover:underline">
            Điều khoản & cam kết
          </Link>
        </div>
        <div className="col-span-1 py-6 flex flex-col gap-1">
          <h1 className="uppercase font-bold pb-2">hệ thống</h1>
          {menu.map((el) => (
            <Link key={el.id} to={el.path} className="hover:underline">
              {el.subname}
            </Link>
          ))}
        </div>
        <div className="col-span-1 py-6 flex flex-col gap-1">
          <h1 className="uppercase font-bold pb-2">Tính năng nổi bật</h1>
          <Link to={"/"} className="hover:underline">
            Tìm kiếm nhanh chóng
          </Link>
          <Link to={"/"} className="hover:underline">
            Quản lý hiệu quả
          </Link>
        </div>
        <div className="col-span-1 py-6 flex flex-col gap-1">
          <h1 className="uppercase font-bold pb-2">kết nối với chúng tôi</h1>
          <span className="hover:underline">
            Hotline: <a href="tel:0332101032">0332101033</a>
          </span>
          <span className="hover:underline">
            Email: <a href="mailto:clearway@gmail.com">clearwaygmail.com</a>
          </span>
          <span className="flex items-center gap-2 my-2">
            <a href="#">
              <img
                src="/fb.svg"
                alt=""
                className="w-10 h-10 object-cover border rounded-full"
              />
            </a>
            <a href="#">
              <img
                src="/yt.svg"
                alt=""
                className="w-10 h-10 object-cover border rounded-full"
              />
            </a>

          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
