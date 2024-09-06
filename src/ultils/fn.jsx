import {
  MdOutlineStarOutline,
  MdOutlineStarHalf,
  MdOutlineStarPurple500,
} from "react-icons/md"
export const generateRange = (start, end) => {
  const length = end + 1 - start
  return Array.from({ length }, (_, index) => start + index)
}

export const formatMoney = (number = 0) => {
  if (!Number(number)) return 0
  return Number(number?.toFixed(1)).toLocaleString()
}

export const customMoney = (number) => {
  if (typeof number !== "number") return
  const unit = number >= 1000000 ? "triệu/tháng" : "đồng/tháng"
  let output = number
  if (number >= 1000000) output = Math.round(number / 100000) / 10
  return formatMoney(output) + " " + unit
}
export const renderStarFromNumber = (number = 0, size = 16) => {
  if (!Number(number)) return
  const stars = []
  if ((number * 10) % 2 === 0) {
    number = Math.round(number)
    for (let i = 0; i < +number; i++)
      stars.push(<MdOutlineStarPurple500 color="orange" size={size} />)
    for (let i = 5; i > +number; i--)
      stars.push(<MdOutlineStarOutline color="orange" size={size} />)
  } else {
    for (let i = 1; i <= Math.floor(+number); i++)
      stars.push(<MdOutlineStarPurple500 color="orange" size={size} />)
    stars.push(<MdOutlineStarHalf color="orange" size={size} />)
    for (let i = 5; i > Math.floor(+number) + 1; i--)
      stars.push(<MdOutlineStarOutline color="orange" size={size} />)
  }
  return stars
}
export const convertPercentageToNumberTarget = (percentage, targetNumber) => {
  const num = Math.round((percentage * targetNumber) / 10)
  return (Math.ceil(num / 5) * 5) / 10
}
export const convertNumberTargetToPercentage = (number, targetNumber) => {
  return Math.round((number * 100) / targetNumber)
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
export function setCarat(element) {
  // Place cursor at the end of a content editable div
  if (
    element.type !== "textarea" &&
    element.getAttribute("contenteditable") === "true"
  ) {
    element.focus()
    window.getSelection().selectAllChildren(element)
    window.getSelection().collapseToEnd()
  } else {
    // Place cursor at the end of text areas and input elements
    element.focus()
    element.select()
    window.getSelection().collapseToEnd()
  }
}