import React from 'react'
import Link from "next/link"

import { HiMail } from "react-icons/hi";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

function Main() {
  return (
    <div id="main" className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className="p-4 text-gray-700">Hi, I am <span className='text-[#5651e5]'> Adkirf </span></h1>
                <h1 className="p-4 text-gray-700">A Full-Stack Web Developer </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'> There are no problems, only solutions yet to be found. </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href="https://twitter.com/home " target="_blank">
                            <BsTwitter />
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href="/">
                            <HiMail />
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href="https://github.com/Adkirf" target="_blank">
                            <BsGithub />
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsLinkedin />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main