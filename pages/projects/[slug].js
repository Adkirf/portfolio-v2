import React, { useEffect, useState } from 'react'
import Image from "next/legacy/image"
import Link from "next/link"
import {RiRadioButtonFill} from "react-icons/ri"
import { CgWebsite } from "react-icons/cg";
import { BsCode } from "react-icons/bs";
import { Octokit } from "octokit";
import ReactMarkdown from 'react-markdown'



function  Project({projectRaw, projectDetail, projectLanguages}) {
  const [projectImg, setProjectImg] = useState("/")

  useEffect(()=>{
    const fetchImg = async()=> {
      const resProjectImg = await fetch(
        `https://raw.githubusercontent.com/Adkirf/${projectRaw.name}/main/projectImg.png`
      )
      const projectImgBlob = await resProjectImg.blob();
        const projectImg = URL.createObjectURL(projectImgBlob);
        setProjectImg(projectImg)
    }

    fetchImg();
  },[]);


  const getLinesToPercentage = (lines)=>{
    const totalLines = Object.keys(projectLanguages).reduce((acc, value) => acc + projectLanguages[value]
    ,0);
    return Math.floor(lines/totalLines *100)
  }
  
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className="absolute z-1" layout="fill" objectFit='cover' src={projectImg} alt="/"/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-[#5651e5]'>{projectRaw.name}</h2>
          <h3>{projectRaw.description}</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-7 gap-8 pt-8'>
        <div className='col-span-5'>
         <ReactMarkdown>
            {projectDetail}
         </ReactMarkdown>
          <div className='flex flex-row pt-4 '>
            <Link target= "_blank" href={projectRaw.html_url}>
              <button className='px-4 py-2 mt-4 mr-8 flex flex-row gap-2 align-center justify-center'>
                  <BsCode size={25}/>
                  <p className='flex'>
                    Code
                  </p>
              </button>
            </Link>
            <Link target= "_blank" href={projectRaw.homepage}>
              <button className='px-4 py-2 mt-4 mr-8 flex flex-row gap-2 align-center justify-center'>
                  <CgWebsite size={25}/>
                  <p className='flex'>
                    Website
                  </p>
              </button>
            </Link>
          </div>
        </div>
        <div className='col-span-5 w-[50%] md:w-full justify-self-center md:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
          </div >   
          {projectRaw.topics.map((topic, index)=>(
            <div key={index} className='flex flex-row '>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> {topic}</p>
          </div>
          ))} 
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Languages</p>
          </div >   
          {Object.keys(projectLanguages).map((language, index)=>(
            <div key={index} className='flex flex-row'>
               <p className='text-gray-600 w-10 py-2 mr-2'>{`${getLinesToPercentage(projectLanguages[language])}%`}</p>
              <p className='text-gray-600 py-2 flex w-full items-center'>{language}</p>
          </div>
          ))} 
        </div>
      </div>
      <Link href="/#projects">
        <p className='underline cursor-pointer mt-8 ml-4 mb-8'>back</p>
      </Link>
    </div>
  )
}

export async function getStaticPaths(){
  try{
    const octokit = new Octokit({ 
      auth: process.env.GITHUB_API_TOKEN,
    });
    const resProjectsRaw = await octokit.request("GET /users/{owner}/repos", {
      owner: "Adkirf",
    });
    console.log(`Success! Status: ${resProjectsRaw.status}. Rate limit remaining: ${resProjectsRaw.headers["x-ratelimit-remaining"]}`)


    const projectsRaw = resProjectsRaw.data.filter((repo)=> repo.homepage
    )
  
    const paths = projectsRaw.map((project)=>({
        params: {
            slug: `${project.name.replace(/ /g, '-')}`
        }
    }))
    return {
        paths,
        fallback: false
    }

  }catch(e){
    console.log(e);
  }
}

export async function getStaticProps({ params: {slug}}){
  
    const octokit = new Octokit({ 
      auth: process.env.GITHUB_API_TOKEN,
    });
    const resProjectRaw = await octokit.request("GET /repos/{owner}/{slug}", {
      owner: "Adkirf",
      slug: slug
    });
    console.log(`Success! Status: ${resProjectRaw.status}. Rate limit remaining: ${resProjectRaw.headers["x-ratelimit-remaining"]}`)

    const resProjectDetail = await octokit.request('GET /repos/{owner}/{repo}/readme', {
      owner: 'Adkirf',
      repo: slug,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    const projectDetailRaw = await fetch(resProjectDetail.data.download_url)
    const projectDetail = await projectDetailRaw.text()
    
    const resProjectLanguages = await fetch(resProjectRaw.data.languages_url)
    const projectLanguages = await resProjectLanguages.json()

  return {
      props: {
        projectRaw: resProjectRaw.data,
        projectDetail: projectDetail,
        projectLanguages: projectLanguages,
      }
  }
}

export default Project