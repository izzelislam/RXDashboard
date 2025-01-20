
import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import SidebarMobile from './sidebar-mobile';

type Props = {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({children} : Props) => {

  const [isOpenDropdown, setIsOpenDropdown] = React.useState<boolean>(false);
  const [menuName, setMenuName] = React.useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const [thme, setTheme] = React.useState<any>(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  useEffect(() =>{
    localStorage.setItem('theme', thme)
    const itemStorage:any = localStorage.getItem('theme')
    const element = document.querySelector('html')
    if (element) {
      element?.setAttribute('data-theme', itemStorage)
      element?.setAttribute('class', itemStorage)
    }
    // set 
  },[thme])

  const isMobile = useMediaQuery({
    maxWidth: 1024
  })

  useEffect(() => {
    console.log('isMobile', isMobile)
    
  }, [isMobile])

  const handleOpenDropdown = (name: string) => {
    setIsOpenDropdown(!isOpenDropdown);
    setMenuName(name);
  }

  const handleSwitchTheme = (val:any) => {
      if (!val.target.checked){
        setTheme('dark')
      }else{
        setTheme('light')
      }
  }

  return (
    <section className='md:p-6 bg-backround'>
      <div className='flex bg-backround box-border'>
        
        {/* sidebar */}
        {
          isMobile
          ? <SidebarMobile isMobile={isMobile} isOpenDropdown={isOpenDropdown} menuName={menuName} handleOpenDropdown={handleOpenDropdown} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          : <Sidebar isMobile={isMobile} isOpenDropdown={isOpenDropdown} menuName={menuName} handleOpenDropdown={handleOpenDropdown} />
        }
        {/* end sidebar */}

        <div className='bg-backround relative min-h-screen flex-1 dark:bg-gray-900'>
          {/* navbar */}
          <div className='sticky top-0 md:top-6 left-0 right-0 flex justify-between items-center bg-white w-full h-[80px] px-6 dark:bg-gray-950 rounded-lg'>
            <div className='lg:hidden'>
              {
                isSidebarOpen
                ? <Icon onClick={() => setIsSidebarOpen(!isSidebarOpen)} icon="lucide:x" className='lg:hidden text-3xl text-gray-700 cursor-pointer'/>
                : <Icon onClick={() => setIsSidebarOpen(!isSidebarOpen)} icon="lucide:menu" className='lg:hidden text-3xl text-gray-700 cursor-pointer'/>
              }
            </div>
            <div className='hidden lg:block'>
              <p className='text-gray-700'>Selamat datang <span className='text-primary font-semibold'>Balhaqi Nukman Tamam!</span></p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='hidden md:inline-block mr-3'>
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input onChange={(e) => handleSwitchTheme(e)} type="checkbox" className="theme-controller" value="synthwave" />

                  {/* sun icon */}
                  <svg
                    className="swap-off h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              
              <details className="dropdown dropdown-end no-arrow">
                <summary>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                  <div className='inline-block md:hidden'>
                    <p className='text-gray-500 text-xs'>admin</p>
                    <p className='text-gray-500 text-sm font-semibold'>JohnCena@mail.com</p>
                  </div>
                  </li>
                  <li>
                    <Link to={"/"} className='flex items-center gap-2'>
                      <Icon icon="solar:home-2-bold-duotone" className='text-xl' />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className='flex items-center gap-2'>
                      <Icon icon="solar:user-bold-duotone" className='text-xl' />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className='flex items-center gap-2'>
                      <Icon icon="solar:logout-2-bold-duotone" className='text-xl' />
                      Logout
                    </Link>
                  </li>
                </ul>
              </details>
              <div className='hidden md:flex flex-col items-start'>
                <p className='text-gray-500 text-xs'>admin</p>
                <p className='text-gray-500 text-sm font-semibold'>JohnCena@mail.com</p>
              </div>
            </div>
          </div>
          {/* end navbar */}

          {/* content */}
          <div className='p-4 md:py-6 overflow-auto'>
            {children}
          </div>
          {/* end content */}
          
        </div>
      </div>
    </section>
  )
}

export default MainLayout
