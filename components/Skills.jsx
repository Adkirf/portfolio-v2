import React from 'react'
import Image from "next/image"
import LanguagesTable from './LanguagesTable';

function Skills({languages}) {


    const  transformData = () =>  {
        const total = Object.values(languages).reduce((acc, curr) => acc + curr, 0);
      
        return Object.entries(languages).map(([key, value]) => ({
          name: key,
          lines: value,
          percentage: ((value / total) * 100).toFixed(2) + '%',
        }));
      }

  return (
    <div id="skills" className='w-full lg::h-screen px-2 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
             <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
             <h2 className='py-4'>Current Languages</h2>
            <LanguagesTable languages={transformData()}/>
            <h2 className='py-4'>My Tech-Stack</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/css.png" alt="/" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/git.png" alt="/" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Git</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/html.png" alt="/" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/javascript.png" alt="/" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/typescript.png" alt="/" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TypeScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/java.png" alt="/" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/nextjs.png" alt="/" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NextJs</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/node.png" alt="/" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NodeJs</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/react.png" alt="/" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/tailwind.png" alt="/" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills