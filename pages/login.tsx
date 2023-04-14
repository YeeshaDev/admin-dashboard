import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link'
import { toast } from 'react-toastify';

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState("admin@mail.com")
    const [password, setPassword] = useState("demo001")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    const handleLogin = () => {
        
        if(email ==='' || password === ''){
            
            toast.warning('Field cannot be empty')
        }else {
            toast.success('Logged in successfully')
            router.push('/')
        }
          
    }
    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-[var(--primary)] ">
        <div
            className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
        >
            <div
                className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
            >
                <div className="my-3 text-4xl font-bold tracking-wider text-center">
                    <a href="#">YeeshaDev</a>
                </div>
                <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                    A login form for Frontend admin panel dashboard assesement
                </p>
                
                <p className="mt-6 text-sm text-center text-gray-300">
                    Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                </p>
            </div>
            <div className="p-5 bg-white md:flex-1">
                <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
                <form action="#" className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            autoFocus
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            onChange={handleEmailChange}
                            
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                            <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                        </div>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            onChange={handlePasswordChange}
                            
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                            onClick={handleLogin}
                            >
                            Log in
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login
