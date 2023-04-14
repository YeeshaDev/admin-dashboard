import React from 'react'
import Link from 'next/link'
import {FaBell, FaEnvelope} from 'react-icons/fa'
import { usePathname} from 'next/navigation'
const Header = () => {
    const path = usePathname();

    return (
        <header className='my-5'>
            <section className='px-2 flex items-center justify-between text-white'>
                <div>
            <p className='hidden sm:block tracking-[2px]'>{`Pages${path}`}</p>
            <h3 className='hidden sm:block capitalize'>{path}</h3>
            </div>
            <nav className='flex items-center justify-center'>
                
                <div className='flex items-center justify-between gap-3 px-3'>   
                    <span >

                        <Link href='/login'>Sign in</Link>
                    </span>
            
                    <span>
                        <FaBell/>
                    </span>
                    <span>
                        <FaEnvelope/>
                    </span>
                </div>
            </nav>
            </section>
        </header>
    )
}

export default Header
