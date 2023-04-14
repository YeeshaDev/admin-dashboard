import React from 'react'
import Image from 'next/image'
import {FaCoins,FaShoppingCart,FaGlobe,FaPager} from 'react-icons/fa'

const Card = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 px-3 mt-12 my-10'>
        <div className='flex  justify-center gap-5 lg:gap-1 bg-white w-full rounded-xl h-[150px] px-3 py-4'>
            <div className=''>
           <h3 className='uppercase text-[1.5rem]'>Today's money</h3> 
           <h4>₦ 20,000</h4>
           <p className='flex items-center gap-3 whitespace-nowrap'><span>+20%</span> since yesterday</p>
           </div>
           <div className='bg-gray-500 w-[50px] h-[50px]  rounded-full flex items-center justify-center text-white'>
            <FaCoins/>
           </div>
        </div>
        <div className='flex  justify-center gap-5 lg:gap-1 bg-white w-full rounded-xl h-[150px] px-3 py-4'>
            <div className=''>
           <h3 className='uppercase text-[1.5rem]'>Today's money</h3> 
           <h4>₦ 20,000</h4>
           <p className='flex items-center gap-3 whitespace-nowrap'><span>+20%</span> since yesterday</p>
           </div>
           <div className='bg-[#7565e4] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white'>
            <FaCoins/>
           </div>
        </div>
        <div className='flex  justify-center gap-5 lg:gap-1 bg-white w-full rounded-xl h-[150px] px-3 py-4'>
            <div className=''>
           <h3 className='uppercase text-[1.5rem]'>NEW CLIENTS</h3> 
           <h4>₦ 20,000</h4>
           <p className='flex items-center gap-3 whitespace-nowrap'><span>+20%</span> since yesterday</p>
           </div>
           <div className='bg-[#2dceaa] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white'>
            <FaCoins/>
           </div>
        </div>
        <div className='flex  justify-center gap-5 lg:gap-1 bg-white w-full rounded-xl h-[150px] px-3 py-4'>
            <div className=''>
           <h3 className='uppercase text-[1.5rem]'>SALES</h3> 
           <h4>₦ 20,000</h4>
           <p className='flex items-center gap-3 whitespace-nowrap'><span>+20%</span> since yesterday</p>
           </div>
           <div className='bg-[#fb8840] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white'>
            <FaCoins/>
           </div>
        </div>
        </section>
    )
}

export default Card
