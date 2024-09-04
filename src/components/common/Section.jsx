import clsx from 'clsx'
import React from 'react'

const Section = ({ children, title, className, contentClassName }) => {
    return (
        <div className={clsx('flex flex-col gap-5', className)}>
            <h1 className='text-[26px] font-bold text-main'>{title}</h1>
            <div className={clsx(contentClassName)}>
                {children}
            </div>
        </div>
    )
}

export default Section