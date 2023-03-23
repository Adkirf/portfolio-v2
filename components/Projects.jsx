import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import Link from "next/link"

import ProjectItem from './ProjectItem'

function Projects({projects}) {


  return (
    <div id="projects" className='w-full py-16  lg:h-screen'>
        <div className='max-w-[1240px] mx-auto px-2'>
         <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className="py-4">What I have build</h2>
            <div className='grid md:grid-cols-2 gap-8'>
               {projects?.map((project, index)=>(
                <ProjectItem key={index} project={project}/>
               ))}
            </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <MdKeyboardArrowUp />
              </div>
          </Link>
        </div>
    </div>
  )
}

export default Projects