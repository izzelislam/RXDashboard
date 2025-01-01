import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  label: string
  icon: string
  path: string
  isActive?: boolean
}

const MenuSingle:React.FC<Props>  = ({label, icon, path, isActive}:Props) => {
  

  return (
    <Link to={path}  className={`menu-sibgle ${isActive ? 'bg-slateprimary' : ''} group`}>
      <Icon icon={icon} className={`menu-icon ${isActive ? 'text-primary' : ''} group-hover:text-primary`}  />
      <p className={`${isActive ? 'text-primary' : 'text-gray-700'} group-hover:text-primary`}>{label}</p>
    </Link> 
  )
}

export default MenuSingle