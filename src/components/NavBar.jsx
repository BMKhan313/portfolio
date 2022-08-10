// eslint-disable-next-line

import { MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import { AiOutlineSearch, } from 'react-icons/ai';
import { HiOutlineSearch } from "react-icons/hi"
// import useDarkMode from '../Hooks/UseDarkMode';
import { useContext } from 'react';
import { ThemeContext } from '../Context/theme';

const NavBar = ({nav , handleClick}) => {
   
    const [{theme, isDark},toggleTheme] = useContext(ThemeContext)
   
   
    return (
        // full header or appheader
        <div className=" flex justify-between items-center w-full p-[10px] msm:py-4 msm:px-6 relative ">
            {/* left  */}
            <div className="flex flex-grow items-center ">
                <span className="hidden msm:flex justify-Center items-center
                rounded
                 ">
                    <MenuIcon className="hidden msm:flex w-6 h-6" />
                    <p className='hidden md2:flex mx-8 text-xl font-bold ' >Portfolio</p>
                </span>
                {/* search wrapper */}
                <div className='flex rounded-[20px] max-w-[480px] bg-[#fff] items-center h-[40px]
                 pr-3 justify-between overflow-hidden w-full'>
                    <input type="text" placeholder="Search"
                    className='border-none flex-1 outline-none  text-[14px]  msm:w-full msm:text-[16px]
                       text-[#1f1c2e] bg-[#fff] h-[100%] font-sans overflow-visible px-[20px] '
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2"  viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                    </svg>

                </div>
            </div>



            {/* right div*/}
            <div className="flex items-center">
                <button className="ml-[4px] md2:ml-[10px] " onClick={toggleTheme}>
                    <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
                        <defs></defs>
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                </button>
                <button className="flex items-center justify-center w-[20px] h-[20px] md2:w-[32px] md2:h-[32px] 
                 rounded-[50%] bg-[#1f1c24] text-[#fff]
                    ml-[4px] md2:ml-[10px] ">
                    <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16"
                        height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <button className="ml-[4px] md2:ml-[10px] w-[20px] h-[20px] md2:w-[32px] md2:h-[32px]
                bg-[#00000000]
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </button>
                <button className="ml-[8px] md2:ml-[10px] flex items-center pl-3 bg-[#00000000] 
                border-l-[2px] border-solid border-l-bg-[#ddd]">
                    <img src="https://assets.codepen.io/3306515/IMG_2025.jpg"
                        className='w-[24px] h-[24px] msm:w-[32px] msm:h-[32px] mr-[4px] rounded-[50%] 
                object-fill border-none'/>
                    <span className="hidden md2:flex font-bold text-[16px] leading-6 opacity-60">Aybuke C.</span>
                </button>
            </div>
         <button className='mymd:hidden flex rounded-tl rounded-bl absolute p-1
          right-[0px] top-[50px]  border-none items-center justify-center bg-[#fff] text-[#1f1c2e]' 
          onClick={()=>handleClick(!nav)}
          >
         {!nav ?
                       
                              <svg xmlns="http://www.w3.org/2000/svg" 
                              width="20" height="20" viewBox="0 0 24 24" 
                              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                              strokeLinejoin="round" >
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 
                              0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0
                               0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                              : ""
                            
                           }
                          
         </button>
          
        </div>

    )
}

export default NavBar




