import { Progress } from "@material-tailwind/react";
import { Msgs } from "../Msgs";
import { useState } from 'react'
import NavBar from './NavBar'
import ListView from './ListView'

import { useContext } from 'react';
import { ThemeContext } from '../Context/theme';

const Hero = () => {

   const [{theme, isDark},toggleTheme] = useContext(ThemeContext)

   const [nav, setNav] = useState(false);
   const [isGrid, setIsGrid] = useState(true);

   const handleClick = () => {
      setNav(!nav)
   }
   const handleToggle = () => setIsGrid(!isGrid)

   return (
   <div  style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
      <NavBar nav={nav} handleClick={handleClick} />
      <div className="flex h-full pt-4 pr-3 pb-6 pl-3 msm:pt-4 msm:pb-6 msm:pr-6 overflow-hidden">
        
         {/* sidebar */}
         <div className="hidden msm:flex flex-col py-10 px-4  items-center ">
            <a href="http://localhost:3000" className="flex w-10 h-10 my-4  items-center justify-center
                bg-[#1f1c2e] text-[#fff] rounded-[50%]  flex-shrink-0 " >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  fill="none"
                  className="feather feather-home">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </a>
            <a href="http://" className="flex w-10 h-10 my-4  items-center justify-center
                rounded-[50%]  flex-shrink-0 ">
               <svg className="link-icon" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <defs></defs>
                  <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z"></path>
               </svg>
            </a>
            <a href="http://" className="flex w-10 h-10 my-4  items-center justify-center
                rounded-[50%]  flex-shrink-0 ">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </a>
            <a href="http://" className=" flex w-10 h-10 my-4 
                items-center justify-center rounded-[50%]  flex-shrink-0 ">
               <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <defs></defs>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0
           010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33
            1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 
            1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 
            0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 
            00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 
            9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 
            0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 
            012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 
            0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 
            1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
               </svg>
            </a>
         </div>
         {/* project section */}
         <div className=" flex-col flex-grow flex-shrink rounded-[32px] w-full msm:overflow-hidden  overflow-auto
             msm:px-8 msm:pt-8 px-4 pt-6  text-[#1f1c2e] bg-[#fff]  " >
            {/* 1st div of project section */}
            <div className="flex  mb-6 text-[#1f1c2e] justify-between items-center font-bold text-lg  ">
               <p className="font-bold opacity-90 block text-[18px] msm:text[24px]">Projects</p>
               <p className="font-bold opacity-90 block text-[20px] msm:text[24px]">December,12</p>
            </div>
            {/* 2nd div of project section */}
            <div className="flex justify-between items-center  pb-8 text-[#1f1c2e]">
               <div className="flex ">
                  <div className="lg2:mr-4 mr-0 flex flex-col ">
                     <span className="font-bold text-[10px] msm:text-[14px] lg2:text-[24px] opacity-75">45</span>
                     <span className="flex items-center pr-1 msm:pr-6 text-[10px] msm:text-[10px] lg2:text-[14px]">
                       In progress
                        <p className="hidden msm:flex  rounded-full">.</p>
                     </span>
                  </div>
                  <div className="lg2:mr-4 mr-0 flex flex-col ">
                     <span className="font-bold text-[10px] msm:text-[14px] lg2:text-[24px] opacity-75">45</span>
                     <span className="flex items-center pr-1 msm:pr-6 text-[10px] msm:text-[10px] lg2:text-[14px]">
                        Upcoming
                        <p className="hidden msm:flex rounded-full">.</p>
                     </span>
                  </div>
                  <div className="lg2:mr-4 mr-0 flex flex-col">
                     <span className="font-bold text-[10px] msm:text-[14px] lg2:text-[24px] opacity-75">45</span>
                     <span className="flex items-center pr-1 msm:pr-6 text-[10px] msm:text-[10px] lg2:text-[14px]">
                        Total Projects
                        <p></p>
                     </span>
                  </div>
               </div>
               {/*  */}
               <div className="flex items-center text-[15px] ">

                  <button className="msm:w-9 msm:h-9 w-6 h-6 flex justify-center items-center rounded bg-[#00000000]
                     p-[6px] border-none text-[#1f1c2e] ml-2"
                     onClick={handleToggle}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-list">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                  </button>
                  <button className="msm:w-9 msm:h-9 w-6 h-6 flex justify-center items-center rounded bg-[#00000000]
                     p-[6px] border-none text-[#1f1c2e] ml-2 " onClick={handleToggle}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect></svg>
                  </button>
               </div>
            </div>
            {/* cards main div */}
            {!isGrid ?
               <ListView />
               :
               <div className=" flex flex-wrap overflow-y-visible msm:overflow-y-auto w-full h-[52vh] text-[#1f1c2e] -mx-[8px]" >

                  {/* card box*/}

                  <div className=" w-full msm:w-[50%] lg2:w-[33.3%]   py-2 px-2 rounded-3xl ">
                     <div className="bg-[#fee4cb] rounded-[30px] p-4">
                        <div className="flex items-center mb-4 justify-between ">
                           <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>
                           <div className="relative ">
                           <button className="p-0 w-6 h-6 relative bg-[#00000000] flex-shrink-0 border-none">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" >
                                 <circle cx="12" cy="12" r="1"></circle>
                                 <circle cx="12" cy="5" r="1"></circle>
                                 <circle cx="12" cy="19" r="1"></circle></svg>
                           </button>
                           </div>
                        </div>

                        <div className="text-center mb-4">
                           <p className="font-bold text-[16px] leading-6 opacity-70 m-0">Web Designing</p>
                           <p className="m-0 text-[14px] leading-6 opacity-70">Prototyping</p>
                        </div>

                        <div >
                           <p className=" font-bold text-[12px] msm:text-[14px] leading-4">Progress</p>
                           <div className=" rounded-[2px] overflow-hidden w-full my-2 h-1 bg-[#fff]">
                              <span className="bg-[#201ce4] block h-1 rounded-[6px] py-[2px] text-center text-white w-[45%]" ></span>
                          </div>
                           <p className=" text-right text-[10px] msm:text-[14px] leading-4 font-bold">77%</p>
                        </div>

                        <div>
                           <div className="grid grid-cols-1 w-full divide-y-[1px] divide-[#fff]">
                              <div className="text-white "></div>
                              <div></div>
                           </div>
                        </div>

                        <div className="flex justify-between  pt-4 relative">
                           <div className="flex items-center">
                              <img className="w-5 h-5 overflow-hidden object-cover rounded-[50%] " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
                              <img className="w-5 h-5 overflow-hidden rounded-[50%]" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />
                              <button className="ml-[6px] w-5 h-5 text-[#f38116fd] bg-[#fff] rounded-full flex justify-center items-center px-0 py-0" >
                              <svg className=" " fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                           </button>
                           </div>
                          
                           {/* days left div */}
                           <div className="flex bg-[#fff] px-1 ml-auto rounded-full flex-shrink-0 p-[6px] text-[8px] msm:text-[12px]  " >
                              <p className="text-[#f13838fd] font-sans font-bold  text-sm">12 Days Left</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="  w-full msm:w-[50%] lg2:w-[33.3%]   py-2 px-2 rounded-3xl ">
                     <div className="bg-[#fee4cb] rounded-[30px] p-4">
                        <div className="flex items-center mb-4 justify-between ">
                           <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>
                           <div className="relative ">
                           <button className="p-0 w-6 h-6 relative bg-[#00000000] flex-shrink-0 border-none">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" >
                                 <circle cx="12" cy="12" r="1"></circle>
                                 <circle cx="12" cy="5" r="1"></circle>
                                 <circle cx="12" cy="19" r="1"></circle></svg>
                           </button>
                           </div>
                        </div>

                        <div className="text-center mb-4">
                           <p className="font-bold text-[16px] leading-6 opacity-70 m-0">Web Designing</p>
                           <p className="m-0 text-[14px] leading-6 opacity-70">Prototyping</p>
                        </div>

                        <div >
                           <p className=" font-bold text-[12px] msm:text-[14px] leading-4">Progress</p>
                           <div className=" rounded-[2px] overflow-hidden w-full my-2 h-1 bg-[#fff]">
                              <span className="bg-[#201ce4] block h-1 rounded-[6px] py-[2px] text-center text-white w-[45%]" ></span>
                          </div>
                           <p className=" text-right text-[10px] msm:text-[14px] leading-4 font-bold">77%</p>
                        </div>

                        <div>
                           <div className="grid grid-cols-1 w-full divide-y-[1px] divide-[#fff]">
                              <div className="text-white "></div>
                              <div></div>
                           </div>
                        </div>

                        <div className="flex justify-between  pt-4 relative">
                           <div className="flex items-center">
                              <img className="w-5 h-5 overflow-hidden object-cover rounded-[50%] " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
                              <img className="w-5 h-5 overflow-hidden rounded-[50%]" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />
                              <button className="ml-[6px] w-5 h-5 text-[#f38116fd] bg-[#fff] rounded-full flex justify-center items-center px-0 py-0" >
                              <svg className=" " fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                           </button>
                           </div>
                          
                           {/* days left div */}
                           <div className="flex bg-[#fff] px-1 ml-auto rounded-full flex-shrink-0 p-[6px] text-[8px] msm:text-[12px]  " >
                              <p className="text-[#f13838fd] font-sans font-bold  text-sm">12 Days Left</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/*  */}
                  <div className="  w-full msm:w-[50%] lg2:w-[33.3%]   py-2 px-2 rounded-3xl ">
                     <div className="bg-[#fee4cb] rounded-[30px] p-4">
                        <div className="flex items-center mb-4 justify-between ">
                           <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>
                           <div className="relative ">
                           <button className="p-0 w-6 h-6 relative bg-[#00000000] flex-shrink-0 border-none">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" >
                                 <circle cx="12" cy="12" r="1"></circle>
                                 <circle cx="12" cy="5" r="1"></circle>
                                 <circle cx="12" cy="19" r="1"></circle></svg>
                           </button>
                           </div>
                        </div>

                        <div className="text-center mb-4">
                           <p className="font-bold text-[16px] leading-6 opacity-70 m-0">Web Designing</p>
                           <p className="m-0 text-[14px] leading-6 opacity-70">Prototyping</p>
                        </div>

                        <div >
                           <p className=" font-bold text-[12px] msm:text-[14px] leading-4">Progress</p>
                           <div className=" rounded-[2px] overflow-hidden w-full my-2 h-1 bg-[#fff]">
                              <span className="bg-[#201ce4] block h-1 rounded-[6px] py-[2px] text-center text-white w-[45%]" ></span>
                          </div>
                           <p className=" text-right text-[10px] msm:text-[14px] leading-4 font-bold">77%</p>
                        </div>

                        <div>
                           <div className="grid grid-cols-1 w-full divide-y-[1px] divide-[#fff]">
                              <div className="text-white "></div>
                              <div></div>
                           </div>
                        </div>

                        <div className="flex justify-between  pt-4 relative">
                           <div className="flex items-center">
                              <img className="w-5 h-5 overflow-hidden object-cover rounded-[50%] " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
                              <img className="w-5 h-5 overflow-hidden rounded-[50%]" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />
                              <button className="ml-[6px] w-5 h-5 text-[#f38116fd] bg-[#fff] rounded-full flex justify-center items-center px-0 py-0" >
                              <svg className=" " fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                           </button>
                           </div>
                          
                           {/* days left div */}
                           <div className="flex bg-[#fff] px-1 ml-auto rounded-full flex-shrink-0 p-[6px] text-[8px] msm:text-[12px]  " >
                              <p className="text-[#f13838fd] font-sans font-bold  text-sm">12 Days Left</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="  w-full msm:w-[50%] lg2:w-[33.3%]   py-2 px-2 rounded-3xl ">
                     <div className="bg-[#fee4cb] rounded-[30px] p-4">
                        <div className="flex items-center mb-4 justify-between ">
                           <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>
                           <div className="relative ">
                           <button className="p-0 w-6 h-6 relative bg-[#00000000] flex-shrink-0 border-none">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" >
                                 <circle cx="12" cy="12" r="1"></circle>
                                 <circle cx="12" cy="5" r="1"></circle>
                                 <circle cx="12" cy="19" r="1"></circle></svg>
                           </button>
                           </div>
                        </div>

                        <div className="text-center mb-4">
                           <p className="font-bold text-[16px] leading-6 opacity-70 m-0">Web Designing</p>
                           <p className="m-0 text-[14px] leading-6 opacity-70">Prototyping</p>
                        </div>

                        <div >
                           <p className=" font-bold text-[12px] msm:text-[14px] leading-4">Progress</p>
                           <div className=" rounded-[2px] overflow-hidden w-full my-2 h-1 bg-[#fff]">
                              <span className="bg-[#201ce4] block h-1 rounded-[6px] py-[2px] text-center text-white w-[45%]" ></span>
                          </div>
                           <p className=" text-right text-[10px] msm:text-[14px] leading-4 font-bold">77%</p>
                        </div>

                        <div>
                           <div className="grid grid-cols-1 w-full divide-y-[1px] divide-[#fff]">
                              <div className="text-white "></div>
                              <div></div>
                           </div>
                        </div>

                        <div className="flex justify-between  pt-4 relative">
                           <div className="flex items-center">
                              <img className="w-5 h-5 overflow-hidden object-cover rounded-[50%] " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
                              <img className="w-5 h-5 overflow-hidden rounded-[50%]" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />
                              <button className="ml-[6px] w-5 h-5 text-[#f38116fd] bg-[#fff] rounded-full flex justify-center items-center px-0 py-0" >
                              <svg className=" " fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                           </button>
                           </div>
                          
                           {/* days left div */}
                           <div className="flex bg-[#fff] px-1 ml-auto rounded-full flex-shrink-0 p-[6px] text-[8px] msm:text-[12px]  " >
                              <p className="text-[#f13838fd] font-sans font-bold  text-sm">12 Days Left</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="  w-full msm:w-[50%] lg2:w-[33.3%]   py-2 px-2 rounded-3xl ">
                     <div className="bg-[#fee4cb] rounded-[30px] p-4">
                        <div className="flex items-center mb-4 justify-between ">
                           <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>
                           <div className="relative ">
                           <button className="p-0 w-6 h-6 relative bg-[#00000000] flex-shrink-0 border-none">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" >
                                 <circle cx="12" cy="12" r="1"></circle>
                                 <circle cx="12" cy="5" r="1"></circle>
                                 <circle cx="12" cy="19" r="1"></circle></svg>
                           </button>
                           </div>
                        </div>

                        <div className="text-center mb-4">
                           <p className="font-bold text-[16px] leading-6 opacity-70 m-0">Web Designing</p>
                           <p className="m-0 text-[14px] leading-6 opacity-70">Prototyping</p>
                        </div>

                        <div >
                           <p className=" font-bold text-[12px] msm:text-[14px] leading-4">Progress</p>
                           <div className=" rounded-[2px] overflow-hidden w-full my-2 h-1 bg-[#fff]">
                              <span className="bg-[#201ce4] block h-1 rounded-[6px] py-[2px] text-center text-white w-[45%]" ></span>
                          </div>
                           <p className=" text-right text-[10px] msm:text-[14px] leading-4 font-bold">77%</p>
                        </div>

                        <div>
                           <div className="grid grid-cols-1 w-full divide-y-[1px] divide-[#fff]">
                              <div className="text-white "></div>
                              <div></div>
                           </div>
                        </div>

                        <div className="flex justify-between  pt-4 relative">
                           <div className="flex items-center">
                              <img className="w-5 h-5 overflow-hidden object-cover rounded-[50%] " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
                              <img className="w-5 h-5 overflow-hidden rounded-[50%]" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />
                              <button className="ml-[6px] w-5 h-5 text-[#f38116fd] bg-[#fff] rounded-full flex justify-center items-center px-0 py-0" >
                              <svg className=" " fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                           </button>
                           </div>
                          
                           {/* days left div */}
                           <div className="flex bg-[#fff] px-1 ml-auto rounded-full flex-shrink-0 p-[6px] text-[8px] msm:text-[12px]  " >
                              <p className="text-[#f13838fd] font-sans font-bold  text-sm">12 Days Left</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="  w-full msm:w-[50%] lg2:w-[33.3%]   py-2 px-2 rounded-3xl ">
                     <div className="bg-[#fee4cb] rounded-[30px] p-4">
                        <div className="flex items-center mb-4 justify-between ">
                           <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>
                           <div className="relative ">
                           <button className="p-0 w-6 h-6 relative bg-[#00000000] flex-shrink-0 border-none">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" >
                                 <circle cx="12" cy="12" r="1"></circle>
                                 <circle cx="12" cy="5" r="1"></circle>
                                 <circle cx="12" cy="19" r="1"></circle></svg>
                           </button>
                           </div>
                        </div>

                        <div className="text-center mb-4">
                           <p className="font-bold text-[16px] leading-6 opacity-70 m-0">Web Designing</p>
                           <p className="m-0 text-[14px] leading-6 opacity-70">Prototyping</p>
                        </div>

                        <div >
                           <p className=" font-bold text-[12px] msm:text-[14px] leading-4">Progress</p>
                           <div className=" rounded-[2px] overflow-hidden w-full my-2 h-1 bg-[#fff]">
                              <span className="bg-[#201ce4] block h-1 rounded-[6px] py-[2px] text-center text-white w-[45%]" ></span>
                          </div>
                           <p className=" text-right text-[10px] msm:text-[14px] leading-4 font-bold">77%</p>
                        </div>

                        <div>
                           <div className="grid grid-cols-1 w-full divide-y-[1px] divide-[#fff]">
                              <div className="text-white "></div>
                              <div></div>
                           </div>
                        </div>

                        <div className="flex justify-between  pt-4 relative">
                           <div className="flex items-center">
                              <img className="w-5 h-5 overflow-hidden object-cover rounded-[50%] " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
                              <img className="w-5 h-5 overflow-hidden rounded-[50%]" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />
                              <button className="ml-[6px] w-5 h-5 text-[#f38116fd] bg-[#fff] rounded-full flex justify-center items-center px-0 py-0" >
                              <svg className=" " fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                           </button>
                           </div>
                          
                           {/* days left div */}
                           <div className="flex bg-[#fff] px-1 ml-auto rounded-full flex-shrink-0 p-[6px] text-[8px] msm:text-[12px]  " >
                              <p className="text-[#f13838fd] font-sans font-bold  text-sm">12 Days Left</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* end cards */}


               </div>
            }
         </div>


                {/* message section */}
         
         <div className=" bg-[#fff] hidden mymd:flex relative text-[#1f1c2e]  ml-8 rounded-[30px] top-0">
 
               <div className='mymd:hidden ' >
                  {/* menu transisiton button */}
                  {/* {!nav ?
                           <svg xmlns="http://www.w3.org/2000/svg"
                              onClick={handleClick}
                              className="h-6 w-6 aboslute top-12 right-12 " fill="none"
                              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                 d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 
                        4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 
                       20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 
                       4.03-8 9-8s9 3.582 9 8z" />
                           </svg>
                           : ""
                           // <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 "
                           //    fill="none" onClick={handleClick}
                           //    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                           //    <path strokeLinecap="round" strokeLinejoin="round"
                           //       d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                           // </svg>
                        } */}

               </div>
               <div>
                  <div className="">
                     <div className=" sticky w-full mb-4  box-border top-0 pl-6 pt-8">
                        <p className="font-bold text-2xl opacity-80 z-10">Client Messages</p>
                     </div >

                     <div className="overflow-y-scroll h-[66vh]">
                        {/* message div */}
                        <div className="flex items-start  px-4 py-4 hover:bg-[#fafcff] hover:border-t-[#c3cff4] border-t-[#9cb8e7] border-t-[1px]">
                           <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image" />
                           <div className="pl-4 w-full leading-5 font-sans">
                              <div className="flex justify-between items-center px-auto">
                                 <div className="font-bold text-xl font-sans text-[#1f1c2e]">Stephani</div>

                                 <div className="w-5 h-5 font-bold  justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7
                                        14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>

                                 </div>
                              </div>
                              <p className="my-2 text-[14px] leading-5 font-sans text-[#4a4a4a] opacity-70">I got your first assignment. It was quite
                                 good. 🥳 We can continue with the next assignment.</p>
                              <p className="opacity-70 text-right">Dec,12</p>
                           </div>
                        </div>
                        {/* msg div end */}

                        {/* message div */}
                        <div className="flex items-start px-4 py-4 hover:bg-[#fafcff] hover:border-t-[#c3cff4] border-t-[#9cb8e7] border-t-[1px]">
                           <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image" />
                           <div className="pl-4 w-full leading-5 font-sans">
                              <div className="flex justify-between items-center px-auto">
                                 <div className="font-bold text-xl font-sans text-[#1f1c2e]">Stephani</div>

                                 <div className="w-5 h-5 font-bold  justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7
                       14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>

                                 </div>
                              </div>
                              <p className="my-2 text-[14px] leading-5 font-sans text-[#4a4a4a] opacity-70">I got your first assignment. It was quite
                                 good. 🥳 We can continue with the next assignment.</p>
                              <p className="opacity-70 text-right">Dec,12</p>
                           </div>
                        </div>
                        {/* msg div end */}

                        {/* message div */}
                        <div className="flex items-start px-4 py-4 hover:bg-[#fafcff] hover:border-t-[#c3cff4] border-t-[#9cb8e7] border-t-[1px]">
                           <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image" />
                           <div className="pl-4 w-full leading-5 font-sans">
                              <div className="flex justify-between items-center px-auto">
                                 <div className="font-bold text-xl font-sans text-[#1f1c2e]">Stephani</div>

                                 <div className="w-5 h-5 font-bold  justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7
                     14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>

                                 </div>
                              </div>
                              <p className="my-2 text-[14px] leading-5 font-sans text-[#4a4a4a] opacity-70">I got your first assignment. It was quite
                                 good. 🥳 We can continue with the next assignment.</p>
                              <p className="opacity-70 text-right">Dec,12</p>
                           </div>
                        </div>
                        {/* msg div end */}

                        {/* message div */}
                        <div className="flex items-start px-4 py-4 hover:bg-[#fafcff] hover:border-t-[#c3cff4] border-t-[#9cb8e7] border-t-[1px]">
                           <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image" />
                           <div className="pl-4 w-full leading-5 font-sans">
                              <div className="flex justify-between items-center px-auto">
                                 <div className="font-bold text-xl font-sans text-[#1f1c2e]">Stephani</div>

                                 <div className="w-5 h-5 font-bold  justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7
                      14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>

                                 </div>
                              </div>
                              <p className="my-2 text-[14px] leading-5 font-sans text-[#4a4a4a] opacity-70">I got your first assignment. It was quite
                                 good. 🥳 We can continue with the next assignment.</p>
                              <p className="opacity-70 text-right">Dec,12</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* msg div end */}

               </div>
               <div>

               </div>
           

            {/* messages 2nd div end*/}

         </div>
      

         {/* msg div end */}

         {/* transision */}
         <div className={!nav ? "hidden" : "mymd:hidden top-0 right-0 h-[100vh] absolute w-full overflow-y-auto rounded-xl bg-[#fff] "}>
            <div>
               <div className=" w-full mb-6 justify-between flex box-border top-0 pl-6 pt-8">
                  <p className="font-bold text-2xl z-10">Client Messages</p>
                  {nav ?

                     <div className="flex top-0 relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 "
                           fill="none" onClick={handleClick}
                           viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                           <path strokeLinecap="round" strokeLinejoin="round"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                     </div>

                     : ''}
               </div>


               {/* message div */}
               <div className="flex items-start px-4 py-4 hover:bg-[#fafcff] hover:border-t-[#c3cff4] border-t-[#9cb8e7] border-t-[1px]">
                  <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image" />
                  <div className="pl-4 w-full leading-5 font-sans">
                     <div className="flex justify-between items-center px-auto">
                        <div className="font-bold text-xl font-sans text-[#1f1c2e]">Stephani</div>

                        <div className="w-5 h-5 font-bold  justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7
                                          14.14 2 9.27 8.91 8.26 12 2"></polygon>
                           </svg>

                        </div>
                     </div>
                     <p className="my-2 text-[14px] pr-4 leading-5 font-sans text-[#4a4a4a]">I got your first assignment. It was quite
                        good. 🥳 We can continue with the next assignment.</p>
                     <p className="opacity-70 text-right">Dec,12</p>
                  </div>
               </div>
               {/* msg div end */}

               {/* message div */}
               <div className="flex items-start px-4 py-4 hover:bg-[#fafcff] hover:border-t-[#c3cff4] border-t-[#9cb8e7] border-t-[1px]">
                  <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image" />
                  <div className="pl-4 w-full leading-5 font-sans">
                     <div className="flex justify-between items-center px-auto">
                        <div className="font-bold text-xl font-sans text-[#1f1c2e]">Stephani</div>

                        <div className="w-5 h-5 font-bold  justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7
                          14.14 2 9.27 8.91 8.26 12 2"></polygon>
                           </svg>

                        </div>
                     </div>
                     <p className="my-2 text-[14px] pr-4 leading-5 font-sans text-[#4a4a4a]">I got your first assignment. It was quite
                        good. 🥳 We can continue with the next assignment.</p>
                     <p className="opacity-70 text-right">Dec,12</p>
                  </div>
               </div>
               {/* msg div end */}

 {/* message div */}
       <div className="flex items-start px-4 py-4 hover:bg-[#fafcff] hover:border-t-[#c3cff4] border-t-[#9cb8e7] border-t-[1px]">
                  <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image" />
                  <div className="pl-4 w-full leading-5 font-sans">
                     <div className="flex justify-between items-center px-auto">
                        <div className="font-bold text-xl font-sans text-[#1f1c2e]">Stephani</div>

                        <div className="w-5 h-5 font-bold  justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7
                          14.14 2 9.27 8.91 8.26 12 2"></polygon>
                           </svg>

                        </div>
                     </div>
                     <p className="my-2 text-[14px] pr-4 leading-5 font-sans text-[#4a4a4a]">I got your first assignment. It was quite
                        good. 🥳 We can continue with the next assignment.</p>
                     <p className="opacity-70 text-right">Dec,12</p>
                  </div>
               </div>
               {/* msg div end */}


               {/* message div */}
               <div className="flex items-start px-4 py-4 hover:bg-[#fafcff] hover:border-t-[#c3cff4] border-t-[#9cb8e7] border-t-[1px]">
                  <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image" />
                  <div className="pl-4 w-full leading-5 font-sans">
                     <div className="flex justify-between items-center px-auto">
                        <div className="font-bold text-xl font-sans text-[#1f1c2e]">Stephani</div>

                        <div className="w-5 h-5 font-bold  justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round" >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77
                                     5.82 21.02 7
                        14.14 2 9.27 8.91 8.26 12 2"></polygon>
                           </svg>

                        </div>
                     </div>
                     <p className="my-2 text-[14px] pr-4 leading-5 font-sans text-[#4a4a4a]">I got your first assignment. It was quite
                        good. 🥳 We can continue with the next assignment.</p>
                     <p className="opacity-70 text-right">Dec,12</p>
                  </div>
               </div>
               {/* msg div end */}

               {/* message div */}
               <div className="flex items-start px-4 py-4 hover:bg-[#fafcff] hover:border-t-[#c3cff4] border-t-[#9cb8e7] border-t-[1px]">
                  <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image" />
                  <div className="pl-4 w-full leading-5 font-sans">
                     <div className="flex justify-between items-center px-auto">
                        <div className="font-bold text-xl font-sans text-[#1f1c2e]">Stephani</div>

                        <div className="w-5 h-5 font-bold  justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7
                         14.14 2 9.27 8.91 8.26 12 2"></polygon>
                           </svg>

                        </div>
                     </div>
                     <p className="my-2 text-[14px] pr-4 leading-5 font-sans text-[#4a4a4a]">I got your first assignment. It was quite
                        good. 🥳 We can continue with the next assignment.</p>
                     <p className="opacity-70 text-right">Dec,12</p>
                  </div>
               </div>

            </div>
            {/* msg div end */}
         </div>
         {/* transition end */}
      </div>

</div>

   )
}

export default Hero


