import React from 'react'
import Image from "next/image"

function About() {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'> About</p>
                <p className='py-4 text-gray-600'> Who I am</p>
                <p className='py-2 text-gray-600'> I am not your normal developer</p>
                <p className='py-2 text-gray-600'> This Sd apdf adfgnsdf gsdfgsdf gs dfgsdf gsdf gsdfgisdfhg sdfg sdfgoshdfg sdfghsdf gsdflgsdf gsdf gsjdfgnsd fg</p>
            </div>
            <div className='flex w-full h-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 duration-300'>
                <img src='/about.jpg' alt="/" width="300" height="300" className='rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default About