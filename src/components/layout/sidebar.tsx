import MenuMultiple from '../ui/menu-multiple'
import MenuSingle from '../ui/menu-single'
import menus from '../../constants/menus'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

function Sidebar({isMobile, isOpenDropdown, menuName, handleOpenDropdown}: any) {
  return (
    <div className={`z-10 top-0 box-border h-screen bg-background relative overflow-hidden transition-all duration-200 ${!isMobile ? 'w-[280px]' : 'w-[0px]'}`}>
      {/* <div className={`z-10 top-0 box-border h-screen bg-background relative overflow-hidden transition-all duration-200`}> */}

      <div className={`${isMobile ? 'hidden' : 'w-64 p-4 fixed'} bg-white h-[90%] rounded-lg shadow-sm overflow-auto`}>
        <div className='p-5 mb-3 flex justify-center'>
          <Link to={"/"} className='flex items-center gap-2'>
            <Icon icon="heroicons:square-3-stack-3d-solid" className='text-4xl text-primary cursor-pointer'/>
            <h2 className='font-semibold text-gray-600'>UI Dashboard</h2>
            {/* <img src="/src/assets/img/logo.png" className='object-cover object-center w-24' alt="" /> */}
          </Link>
        </div>  

        {/* <div className='mb-8 flex items-center gap-3'>
          <div>
            <img src="/src/assets/img/profile.png" className='object-cover object-center w-12 rounded-full' alt="" />
          </div>
          <div>
            <p className='font-semibold text-xs text-gray-700'>Balhaqi Nukman Ta</p>
            <div className='text-[9px] bg-primary text-white py-0.5 px-2 rounded-full inline-block'>Afiliator</div>
          </div>
        </div> */}

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
  )
}

export default Sidebar