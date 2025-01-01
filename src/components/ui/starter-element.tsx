import React from 'react'
import { Link } from 'react-router-dom'

export type BreadCrumb = {
  name: string,
  link: string
}

type Props = {
  breadCrumbs?: BreadCrumb[]
  title      ?: string,
  children   ?: React.ReactNode
  transParantBg ?: boolean
}

const StarterElement: React.FC<Props> = ({breadCrumbs, title, children, transParantBg}: Props) => {

  return (
    <>
      
      {
        title &&
        <div className='mb-4'>
          <h2 className='font-semibold text-gray-600'>{title}</h2>
          <div className="breadcrumbs text-sm">
            <ul>
              {
                breadCrumbs && breadCrumbs.map((item: BreadCrumb, index: number) => (
                  <li><Link key={index} to={item.link}>{item.name}</Link></li>
                ))
              }
            </ul>
          </div>
        </div>
      }

      <div className={`${!transParantBg && `bg-white p-6`} w-full rounded-lg ${title ? 'min-h-[69vh]' : 'min-h-[74vh]'}`}>
        {children}
      </div>
    </>
  )
}

export default StarterElement