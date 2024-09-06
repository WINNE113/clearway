import clsx from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"

const InputRadio = ({
  values = [],
  name,
  register,
  errors,
  label,
  id,
  className,
}) => {
  return (
    <div className="flex flex-col gap-2" style={{color: '#93536a'}}>
      {label && <h3 className="font-medium">{label}</h3>}
      <div
        className={twMerge(
          clsx(
            "p-4 bg-gray-100 border-2 border-dashed rounded-md flex items-center gap-6 border-gray-200",
            className
          )
        )}
      >
        {values.map((el) => (
          <div key={el.value} className="flex items-center gap-3">
            <input
              type="radio"
              name={name}
              {...register(id, { required: "Không được để trống" })}
              value={el.value}
              id={el.value}
            />
            <label htmlFor={el.value}>{el.label}</label>
          </div>
        ))}
      </div>
      {errors[id] && (
        <small className="text-xs text-red-500">{errors[id]?.message}</small>
      )}
    </div>
  )
}

export default InputRadio
