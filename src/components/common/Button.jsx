import React, { memo } from "react"
import clsx from "clsx"
import { CgSpinner } from "react-icons/cg"
import { twMerge } from "tailwind-merge"

const Button = ({
  children,
  fullWidth,
  disabled = false,
  onClick,
  type = "button",
  bgColor = "bg-emerald-600",
  textColor = "text-white",
  className,
}) => {
  return (
    <button
      type={type}
      className={twMerge(
        clsx(
          "px-4 py-3 text-sm font-semibold rounded-md flex justify-center items-center gap-2 outline-none",
          fullWidth && "w-full",
          bgColor,
          textColor,
          disabled && "opacity-50",
          className
        )
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled && (
        <span className="animate-spin">
          <CgSpinner size={18} />
        </span>
      )}
      <div className="flex items-center gap-1">{children}</div>
    </button>
  )
}

export default memo(Button)
