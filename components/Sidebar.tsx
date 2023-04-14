/*import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
const Sidebar = ({sidebarOpen}:any) => {
    const path = usePathname()
    const dashboard=()=> {
        path.push('/','/dashboard')
    }
    return (

        <>
       
        <div className='hidden lg:fixed z-[99] sidebar bg-white h-[100vh] p-10 w-[50%] lg:w-[20%] lg:flex items-center justify-center'>
            <ul className='flex flex-col leading-[3]'>
                <li> <Link href='/' as='/dashboard'>
                Dashboard
                    </Link></li>
                
                <li>

                    <Link href='/reports'>
                    Reports </Link></li>
                    <li>

                    Log out </li>
            </ul>
        </div>

       
        {sidebarOpen &&<div className=' lg:hidden fixed z-[99] sidebar bg-white h-[100vh] p-10 w-[50%] lg:w-[20%] flex items-center justify-center'>
            <ul className='flex flex-col leading-[3]'>
                <li>Dashboard</li>
                
               
                    <li>
                    <Link href='/reports'>
                    Reports </Link></li>
                    <li >

                    Log out </li>
            </ul>
        </div>}
        </>
    )
}

export default Sidebar*/

import React from 'react';
import Link from 'next/link';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children}:any) => {
    
  return (
    <div className='flex'>
      <div className=' fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-[var(--primary)] text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} title='dashboard'/>
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} title='customers'/>
            </div>
          </Link>
          <Link href='/customers'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} title='login'/>
            </div>
          </Link>
          <Link href='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} title='orders'/>
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} title='settings'/>
            </div>
          </Link>
        </div>

      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
