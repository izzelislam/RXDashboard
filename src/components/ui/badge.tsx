import React from 'react'

type Props = {
  title: string
  bg: string
  color?: string
  icon?: any
}

const Badge = ({title, bg, color, icon}: Props) => {
  return (
    <div className={`badge badge-outline text-white border-none  ${bg}`}>
        <div className='flex items-center gap-2'>
          {icon && icon}
          <span className='text-sm'>{title}</span>
        </div>
    </div>
  )
}

export default Badge