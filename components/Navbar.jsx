import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { HiMail } from "react-icons/hi";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import {useRouter} from "next/router"

function Navbar() {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState("#ecf0f3")
    const [linkColor, setLinkColor] = useState('#1f2937')

    const router = useRouter();

    useEffect(()=>{
        if (router.asPath.includes("/projects/")) {
                setNavBg("transparent")
                setLinkColor("#ecf0f3")
                
            }else{
                setNavBg("#ecf0f3")
                setLinkColor('#1f2937')
            }
    },[router]);

    const handleNav = () =>{
        setNav(!nav);
    }

    useEffect(()=>{
        const handleShadow =() => {
            if (window.scrollY >= 90){
                setShadow(true);
            }else{
                setShadow(false);
            }
        }
        window.addEventListener("scroll", handleShadow)
    },[]);

  return (
    <div>
        <div 
        style={{backgroundColor: `${navBg}`}}
        className={shadow && navBg!="transparent"?
            "fixed w-full h-20 shadow-xl z-[100] transition duration-500" 
            : "fixed w-full h-20 z-[100] transition duration-500"}
            >
            <div className="flex justify-end items-center w-full h-full px-2 2xl:px-16">
                <div>
                    <ul 
                    style={{color: `${linkColor}`}}
                    className='hidden md:flex uppercase mr-4'>
                        <Link href="/#main" onClick={handleNav}>
                            <l1 className="ml-10 text-sm hover:border-b"> Home</l1>
                        </Link>
                    
                        <Link href="/#skills" onClick={handleNav}>
                            <l1 className="ml-10 text-sm hover:border-b"> Skills</l1>
                        </Link>
                        <Link href="/#projects" onClick={handleNav}>
                            <l1 className="ml-10 text-sm hover:border-b"> Projects</l1>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden' style={{color: `${linkColor}`}}>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            <div className={nav? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70": ""}>
                <div className={nav
                    ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-auto' 
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500' }>
                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleNav}  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                    </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href="/#main" onClick={handleNav}>
                            <li className='py-4 text-sm'>  Home </li>
                        </Link>
                        <Link href="/#skills" onClick={handleNav}>
                            <li className='py-4 text-sm'>  Skills </li>
                        </Link>
                        <Link href="/#projects" onClick={handleNav}>
                            <li className='py-4 text-sm'>  Projects </li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'> Lets Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href="https://twitter.com/home " target="_blank">
                                    <BsTwitter />
                                </Link>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <HiMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href="https://github.com/Adkirf" target="_blank">
                                    <BsGithub />
                                </Link>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsLinkedin />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar