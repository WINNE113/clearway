import {
  MdOutlineStarOutline,
  MdOutlineStarHalf,
  MdOutlineStarPurple500,
} from "react-icons/md"

export const formatMoney = (number = 0) => {
  if (!Number(number)) return 0
  return Number(number?.toFixed(1)).toLocaleString()
}

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
export const formatVietnameseToString = (keyword) => {
  if (!keyword) return ""
  return keyword
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-")
}
