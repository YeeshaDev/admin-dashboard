import Image from 'next/image'
import Card from '@/components/Card';
import Charts from '@/components/Charts';
import RecentOrders from '@/components/RecentOrder';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <main className='min-h-screen'>
      <Card/>
      
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
      <Charts />
      <RecentOrders/>
      </div>
      
      
    </main>
  )
}
