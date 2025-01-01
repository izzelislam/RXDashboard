import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  label: string
  icon: string
  children: any[]
  handleToogle: () => void
  isOpenDropdown: boolean
  isActive?: boolean
}

const MenuMultiple:React.FC<Props> = ({label, icon, children, handleToogle, isOpenDropdown, isActive}: Props) => {


  return (
    <>
      <div onClick={handleToogle} className={`menu-multi ${isActive ? 'bg-slateprimary' : ''} group`}>
        <div className='title'>
          <Icon icon={icon} className={`${isActive ? 'text-primary' : ''} menu-icon group-hover:text-primary`}  />
          <p className={`${isActive ? 'text-primary' : 'text-gray-700'} group-hover:text-primary text-sm`}>{label}</p>
        </div>
        
        <Icon icon="lucide:chevron-down" className={`arrow ${isOpenDropdown ? 'rotate-180 text-primary' : ''} group-hover:text-primary`}  />
      </div>
      <div className={`menu-multi-child ${isOpenDropdown ? 'max-h-auto opacity-100' : 'h-0 opacity-0 ' }`}>
          <ul>
            {children.map((child: any, index: number) => (
              <Link to={child.path}>
                <li key={index} className='group/child'>
                  <Icon icon="lucide:dot" className='group-hover/child:text-primary text-xl' />
                  <p className='group-hover/child:text-primary'>{child.label}</p>
                </li>
              </Link>
            ))}
          </ul>
      </div>
    </>
  )
}

export default MenuMultiple