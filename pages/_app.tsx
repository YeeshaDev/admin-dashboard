import '@/styles/globals.css'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
//import ProtectedRoutes from '../components/auth/ProtectedRoute';
//import { AppProvider } from './Context/contex';
import 'react-toastify/dist/ReactToastify.css';
//import { SessionProvider } from "next-auth/react"
import {usePathname } from 'next/navigation';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const [sidebarOpen,setSidebarOpen] = useState(false)
  return (
    <>
    <ToastContainer
      position='top-right'
      autoClose={3000}
      closeOnClick
      pauseOnHover
      theme='dark'
      />

    <div className=' flex  m-0 bg-[#5e72e4] lg:gap-x-5 h-[40rem] lg:h-[25rem]'>
      
      <div className=' flex-none'>
      {pathname !== '/login' && pathname !== '/signup' &&<Sidebar />}

      </div>
      <div className='flex-1'>
      {pathname !== '/login' && pathname !== '/signup' &&<Header/>}
    
      <Component {...pageProps} />
      
      </div>
      </div>
      
      </>
    
    
  )
}
