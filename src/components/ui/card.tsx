import React from 'react'

type Props = {
  width?: string
  title?: string
  subtitle?: string
  lineHeader?: boolean
  children?: React.ReactNode
}

const Card = ({width='1/2', title, subtitle, lineHeader, children}: Props) => {
  return (
    <div className={`w-${width} bg-white rounded-md`}>
      {
        title &&
        <div className={`
          pb-2 p-4 ${lineHeader && `border-b border-gray-200`} 
        `}>
          <h2 className='font-semibold'>Title your card</h2>
          {
            subtitle &&
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet</p>
          }
        </div>
      }
      <div className='p-4'>
        {children}
      </div>
    </div>
  )
}

export default Card