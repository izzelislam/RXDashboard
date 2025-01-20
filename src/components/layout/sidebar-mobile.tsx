import React from 'react'
import menus from '../../constants/menus'
import MenuMultiple from '../ui/menu-multiple'
import MenuSingle from '../ui/menu-single'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

const SidebarMobile = ({isMobile, isOpenDropdown, menuName, handleOpenDropdown, isSidebarOpen, setIsSidebarOpen}:any) => {
  console.log(isSidebarOpen, isMobile)
  return (
    <>
      <div className={`${isSidebarOpen && isMobile ? 'w-[100%]' : 'w-[0px]'} h-[100vh] overflow-hidden bg-white fixed z-10 transition-all duration-300`}>
        <div className='p-5 mb-3 flex justify-between items-end'>
          {
            isSidebarOpen
            ? <Icon onClick={() => setIsSidebarOpen(!isSidebarOpen)} icon="lucide:x" className='lg:hidden text-3xl text-gray-700 cursor-pointer'/>
            : <Icon onClick={() => setIsSidebarOpen(!isSidebarOpen)} icon="lucide:menu" className='lg:hidden text-3xl text-gray-700 cursor-pointer'/>
          }
          <Link to={"/"}>
            <img src="/src/assets/img/logo.png" className='object-cover object-center w-24' alt="" />
          </Link>
        </div>
        <div className='w-full p-6'>
          <ul className='w-full flex flex-col gap-1'>
            {
              menus.map((menu: any, index: number) => {
                if (menu.children) {
                  return (
                    <MenuMultiple
                      key={index}
                      label={menu.label}
                      icon={menu.icon}
                      children={menu.children}
                      handleToogle={() => handleOpenDropdown(menu.label)}
                      isOpenDropdown={ menu.label === menuName && isOpenDropdown ? true : false}
                      isActive={menu.label === menuName ? true : false}
                      clickChild={() => setIsSidebarOpen(!isSidebarOpen)}
                    />
                    // <div></div>
                  )
                } else{
                  return (
                    <MenuSingle
                      key={index}
                      label={menu.label}
                      icon={menu.icon}
                      path={menu.path}
                      isActive={menu.label === 'Kamar' ? true : false}
                    />
                  )
                }
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default SidebarMobile