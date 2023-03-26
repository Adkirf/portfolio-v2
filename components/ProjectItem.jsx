import React,{useState, useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"



function ProjectItem({project}) {
  const [projectImg, setProjectImg] = useState("/")

  useEffect(()=>{
    const fetchImg = async () =>{
  

      const resImgBlol = await fetch(project.projectImg)

      const projectImgBlob = await resImgBlol.blob();
      const projectImg = URL.createObjectURL(projectImgBlob);
      setProjectImg(projectImg)
    }
    
    fetchImg();
  },[])

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image 
            className='rounded-xl group-hover:opacity-10'
            src={projectImg} 
            alt="/"
            width={800}
            height={100}

        />
        <div className='hidden group-hover:flex flex-col justify-center items-center absolute'>
            <h3 className='text-2xl text-white tracking-widest text-center'>{project.projectRaw.name}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{project.projectRaw.description}</p>
            
        

              <Link href={`projects/${project.projectRaw.name.replace(/ /g, '-')}`}>
                  <p className='text-center py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
              </Link>
        
          
        </div>
    </div>
  )
}

export default ProjectItem