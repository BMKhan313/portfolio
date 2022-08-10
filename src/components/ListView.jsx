import React from 'react'
import { useState } from 'react'

const ListView = () => {

    // const [list, setList] = useState(false);
  
    return (
            <div className="flex flex-col  w-full gap-4 -mx-2  overflow-y-visible msm:overflow-y-auto h-[52vh]">
                {/* card */}
                <div className="bg-[#dbf6fd] flex  relative  p-3 rounded-[12px] ">
                         <div className="flex order-2 items-center justify-between text-[#4A4A4A] mr-[10px] msm:mr-6">
                         <span className=" opacity-70 text-[10px] msm:text-[12px] absolute bottom-4 left-4 ">December,10 2020</span>
                          <div className="right-[2px] top-[10px] absolute order-3 msm:right-6 msm:top-6">
                            <button className='w-6 h-6 relative flex-shrink-0 border-none bg-[#00000000]'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='font-bold '
                                 width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"  strokeWidth="3" strokeLinecap="round"
                                    strokeLinejoin="round" class="feather feather-more-vertical">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle></svg>

                            </button>
                          </div>
                         </div>
                         
                         <div className='items-center mb-4 max-w-[120px] order-1'>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 font-bold opacity-70
                          '>Web Designing</p>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 opacity-70'>Prototyping</p>
                         </div>

                    <div className='order-3 flex-1 mr-[10px] msm:mr-6'>
                          <p className='text-[12px] msm:text-[14px] leading-4 font-bold'>Progress</p>
                          <div className='w-full h-[4px] rounded-[6px] overflow-hidden my-2 bg-[#fff]'>
                              <div className="bg-[#201ce4] h-[4px] rounded-[6px] text-white w-[60%]" ></div> 
                          </div>
                        <p className='leading-4 text-right text-[14px] font-bold'>60%</p>
                    </div>

                    <div className='mr-[10px] msm:mr-6 flex flex-col justify-start order-3 pt-0 msm:justify-between msm:pt-4'>
                       <div className='mb-2 flex items-center'>
                         <img className='w-5 h-5 overflow-hidden object-cover rounded-3xl' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"  alt="pic" />
                         <img className="w-5 h-5 overflow-hidden object-cover rounded-3xl " src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60' />
                         <button className='w-5 h-5 rounded-[50%] border-none text-[#ff942e] bg-[#fff] ml-[6px] flex items-center justify-center p-0'>
                         <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

                         </button>
                       </div>
                       <div className="text-[8px] msm:text-3 rounded-3xl flex-shrink-0 py-[6px] text-[#4bb7f5] msm: font-bold px-[6px] msm:px-4 bg-[#fff] text-center">12 Day Left</div>
                    </div>    
                </div>
                {/* card 2 */}
                <div className="bg-[#dbf6fd] flex  relative  p-3 rounded-[12px]">
                         <div className="flex order-2 items-center justify-between text-[#4A4A4A] mr-[10px] msm:mr-6">
                         <span className=" opacity-70 text-[10px] msm:text-[12px] absolute bottom-4 left-4 ">December,10 2020</span>
                          <div className="right-[2px] top-[10px] absolute order-3 msm:right-6 msm:top-6">
                            <button className='w-6 h-6 relative flex-shrink-0 border-none bg-[#00000000]'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='font-bold '
                                 width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"  strokeWidth="3" strokeLinecap="round"
                                    strokeLinejoin="round" class="feather feather-more-vertical">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle></svg>

                            </button>
                          </div>
                         </div>
                         
                         <div className='items-center mb-4 max-w-[120px] order-1'>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 font-bold opacity-70
                          '>Web Designing</p>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 opacity-70'>Prototyping</p>
                         </div>

                    <div className='order-3 flex-1 mr-[10px] msm:mr-6'>
                          <p className='text-[12px] msm:text-[14px] leading-4 font-bold'>Progress</p>
                          <div className='w-full h-[4px] rounded-[6px] overflow-hidden my-2 bg-[#fff]'>
                              <div className="bg-[#201ce4] h-[4px] rounded-[6px] text-white w-[60%]" ></div> 
                          </div>
                        <p className='leading-4 text-right text-[14px] font-bold'>60%</p>
                    </div>

                    <div className='mr-[10px] msm:mr-6 flex flex-col justify-start order-3 pt-0 msm:justify-between msm:pt-4'>
                       <div className='mb-2 flex items-center'>
                         <img className='w-5 h-5 overflow-hidden object-cover rounded-3xl' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"  alt="pic" />
                         <img className="w-5 h-5 overflow-hidden object-cover rounded-3xl " src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60' />
                         <button className='w-5 h-5 rounded-[50%] border-none text-[#ff942e] bg-[#fff] ml-[6px] flex items-center justify-center p-0'>
                         <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

                         </button>
                       </div>
                       <div className="text-[8px] msm:text-3 rounded-3xl flex-shrink-0 py-[6px] text-[#4bb7f5] msm: font-bold px-[6px] msm:px-4 bg-[#fff] text-center">12 Day Left</div>
                    </div>    
                </div>
                {/* card 3 */}
                <div className="bg-[#dbf6fd] flex  relative  p-3 rounded-[12px]">
                         <div className="flex order-2 items-center justify-between text-[#4A4A4A] mr-[10px] msm:mr-6">
                         <span className=" opacity-70 text-[10px] msm:text-[12px] absolute bottom-4 left-4 ">December,10 2020</span>
                          <div className="right-[2px] top-[10px] absolute order-3 msm:right-6 msm:top-6">
                            <button className='w-6 h-6 relative flex-shrink-0 border-none bg-[#00000000]'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='font-bold '
                                 width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"  strokeWidth="3" strokeLinecap="round"
                                    strokeLinejoin="round" class="feather feather-more-vertical">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle></svg>

                            </button>
                          </div>
                         </div>
                         
                         <div className='items-center mb-4 max-w-[120px] order-1'>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 font-bold opacity-70
                          '>Web Designing</p>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 opacity-70'>Prototyping</p>
                         </div>

                    <div className='order-3 flex-1 mr-[10px] msm:mr-6'>
                          <p className='text-[12px] msm:text-[14px] leading-4 font-bold'>Progress</p>
                          <div className='w-full h-[4px] rounded-[6px] overflow-hidden my-2 bg-[#fff]'>
                              <div className="bg-[#201ce4] h-[4px] rounded-[6px] text-white w-[60%]" ></div> 
                          </div>
                        <p className='leading-4 text-right text-[14px] font-bold'>60%</p>
                    </div>

                    <div className='mr-[10px] msm:mr-6 flex flex-col justify-start order-3 pt-0 msm:justify-between msm:pt-4'>
                       <div className='mb-2 flex items-center'>
                         <img className='w-5 h-5 overflow-hidden object-cover rounded-3xl' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"  alt="pic" />
                         <img className="w-5 h-5 overflow-hidden object-cover rounded-3xl " src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60' />
                         <button className='w-5 h-5 rounded-[50%] border-none text-[#ff942e] bg-[#fff] ml-[6px] flex items-center justify-center p-0'>
                         <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

                         </button>
                       </div>
                       <div className="text-[8px] msm:text-3 rounded-3xl flex-shrink-0 py-[6px] text-[#4bb7f5] msm: font-bold px-[6px] msm:px-4 bg-[#fff] text-center">12 Day Left</div>
                    </div>    
                </div>
                <div className="bg-[#dbf6fd] flex  relative  p-3 rounded-[12px]">
                         <div className="flex order-2 items-center justify-between text-[#4A4A4A] mr-[10px] msm:mr-6">
                         <span className=" opacity-70 text-[10px] msm:text-[12px] absolute bottom-4 left-4 ">December,10 2020</span>
                          <div className="right-[2px] top-[10px] absolute order-3 msm:right-6 msm:top-6">
                            <button className='w-6 h-6 relative flex-shrink-0 border-none bg-[#00000000]'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='font-bold '
                                 width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"  strokeWidth="3" strokeLinecap="round"
                                    strokeLinejoin="round" class="feather feather-more-vertical">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle></svg>

                            </button>
                          </div>
                         </div>
                         
                         <div className='items-center mb-4 max-w-[120px] order-1'>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 font-bold opacity-70
                          '>Web Designing</p>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 opacity-70'>Prototyping</p>
                         </div>

                    <div className='order-3 flex-1 mr-[10px] msm:mr-6'>
                          <p className='text-[12px] msm:text-[14px] leading-4 font-bold'>Progress</p>
                          <div className='w-full h-[4px] rounded-[6px] overflow-hidden my-2 bg-[#fff]'>
                              <div className="bg-[#201ce4] h-[4px] rounded-[6px] text-white w-[60%]" ></div> 
                          </div>
                        <p className='leading-4 text-right text-[14px] font-bold'>60%</p>
                    </div>

                    <div className='mr-[10px] msm:mr-6 flex flex-col justify-start order-3 pt-0 msm:justify-between msm:pt-4'>
                       <div className='mb-2 flex items-center'>
                         <img className='w-5 h-5 overflow-hidden object-cover rounded-3xl' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"  alt="pic" />
                         <img className="w-5 h-5 overflow-hidden object-cover rounded-3xl " src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60' />
                         <button className='w-5 h-5 rounded-[50%] border-none text-[#ff942e] bg-[#fff] ml-[6px] flex items-center justify-center p-0'>
                         <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

                         </button>
                       </div>
                       <div className="text-[8px] msm:text-3 rounded-3xl flex-shrink-0 py-[6px] text-[#4bb7f5] msm: font-bold px-[6px] msm:px-4 bg-[#fff] text-center">12 Day Left</div>
                    </div>    
                </div>

                <div className="bg-[#dbf6fd] flex  relative  p-3 rounded-[12px]">
                         <div className="flex order-2 items-center justify-between text-[#4A4A4A] mr-[10px] msm:mr-6">
                         <span className=" opacity-70 text-[10px] msm:text-[12px] absolute bottom-4 left-4 ">December,10 2020</span>
                          <div className="right-[2px] top-[10px] absolute order-3 msm:right-6 msm:top-6">
                            <button className='w-6 h-6 relative flex-shrink-0 border-none bg-[#00000000]'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='font-bold '
                                 width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"  strokeWidth="3" strokeLinecap="round"
                                    strokeLinejoin="round" class="feather feather-more-vertical">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle></svg>

                            </button>
                          </div>
                         </div>
                         
                         <div className='items-center mb-4 max-w-[120px] order-1'>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 font-bold opacity-70
                          '>Web Designing</p>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 opacity-70'>Prototyping</p>
                         </div>

                    <div className='order-3 flex-1 mr-[10px] msm:mr-6'>
                          <p className='text-[12px] msm:text-[14px] leading-4 font-bold'>Progress</p>
                          <div className='w-full h-[4px] rounded-[6px] overflow-hidden my-2 bg-[#fff]'>
                              <div className="bg-[#201ce4] h-[4px] rounded-[6px] text-white w-[60%]" ></div> 
                          </div>
                        <p className='leading-4 text-right text-[14px] font-bold'>60%</p>
                    </div>

                    <div className='mr-[10px] msm:mr-6 flex flex-col justify-start order-3 pt-0 msm:justify-between msm:pt-4'>
                       <div className='mb-2 flex items-center'>
                         <img className='w-5 h-5 overflow-hidden object-cover rounded-3xl' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"  alt="pic" />
                         <img className="w-5 h-5 overflow-hidden object-cover rounded-3xl " src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60' />
                         <button className='w-5 h-5 rounded-[50%] border-none text-[#ff942e] bg-[#fff] ml-[6px] flex items-center justify-center p-0'>
                         <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

                         </button>
                       </div>
                       <div className="text-[8px] msm:text-3 rounded-3xl flex-shrink-0 py-[6px] text-[#4bb7f5] msm: font-bold px-[6px] msm:px-4 bg-[#fff] text-center">12 Day Left</div>
                    </div>    
                </div>

                <div className="bg-[#dbf6fd] flex  relative  p-3 rounded-[12px]">
                         <div className="flex order-2 items-center justify-between text-[#4A4A4A] mr-[10px] msm:mr-6">
                         <span className=" opacity-70 text-[10px] msm:text-[12px] absolute bottom-4 left-4 ">December,10 2020</span>
                          <div className="right-[2px] top-[10px] absolute order-3 msm:right-6 msm:top-6">
                            <button className='w-6 h-6 relative flex-shrink-0 border-none bg-[#00000000]'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='font-bold '
                                 width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"  strokeWidth="3" strokeLinecap="round"
                                    strokeLinejoin="round" class="feather feather-more-vertical">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle></svg>

                            </button>
                          </div>
                         </div>
                         
                         <div className='items-center mb-4 max-w-[120px] order-1'>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 font-bold opacity-70
                          '>Web Designing</p>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 opacity-70'>Prototyping</p>
                         </div>

                    <div className='order-3 flex-1 mr-[10px] msm:mr-6'>
                          <p className='text-[12px] msm:text-[14px] leading-4 font-bold'>Progress</p>
                          <div className='w-full h-[4px] rounded-[6px] overflow-hidden my-2 bg-[#fff]'>
                              <div className="bg-[#201ce4] h-[4px] rounded-[6px] text-white w-[60%]" ></div> 
                          </div>
                        <p className='leading-4 text-right text-[14px] font-bold'>60%</p>
                    </div>

                    <div className='mr-[10px] msm:mr-6 flex flex-col justify-start order-3 pt-0 msm:justify-between msm:pt-4'>
                       <div className='mb-2 flex items-center'>
                         <img className='w-5 h-5 overflow-hidden object-cover rounded-3xl' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"  alt="pic" />
                         <img className="w-5 h-5 overflow-hidden object-cover rounded-3xl " src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60' />
                         <button className='w-5 h-5 rounded-[50%] border-none text-[#ff942e] bg-[#fff] ml-[6px] flex items-center justify-center p-0'>
                         <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

                         </button>
                       </div>
                       <div className="text-[8px] msm:text-3 rounded-3xl flex-shrink-0 py-[6px] text-[#4bb7f5] msm: font-bold px-[6px] msm:px-4 bg-[#fff] text-center">12 Day Left</div>
                    </div>    
                </div>

                <div className="bg-[#dbf6fd] flex  relative  p-3 rounded-[12px]">
                         <div className="flex order-2 items-center justify-between text-[#4A4A4A] mr-[10px] msm:mr-6">
                         <span className=" opacity-70 text-[10px] msm:text-[12px] absolute bottom-4 left-4 ">December,10 2020</span>
                          <div className="right-[2px] top-[10px] absolute order-3 msm:right-6 msm:top-6">
                            <button className='w-6 h-6 relative flex-shrink-0 border-none bg-[#00000000]'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='font-bold '
                                 width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"  strokeWidth="3" strokeLinecap="round"
                                    strokeLinejoin="round" class="feather feather-more-vertical">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle></svg>

                            </button>
                          </div>
                         </div>
                         
                         <div className='items-center mb-4 max-w-[120px] order-1'>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 font-bold opacity-70
                          '>Web Designing</p>
                          <p className='oveflow-hidden text-left whitespace-nowrap overflow-ellipsis
                            text-[12px] msm:text-[16px] leading-6 opacity-70'>Prototyping</p>
                         </div>

                    <div className='order-3 flex-1 mr-[10px] msm:mr-6'>
                          <p className='text-[12px] msm:text-[14px] leading-4 font-bold'>Progress</p>
                          <div className='w-full h-[4px] rounded-[6px] overflow-hidden my-2 bg-[#fff]'>
                              <div className="bg-[#201ce4] h-[4px] rounded-[6px] text-white w-[60%]" ></div> 
                          </div>
                        <p className='leading-4 text-right text-[14px] font-bold'>60%</p>
                    </div>

                    <div className='mr-[10px] msm:mr-6 flex flex-col justify-start order-3 pt-0 msm:justify-between msm:pt-4'>
                       <div className='mb-2 flex items-center'>
                         <img className='w-5 h-5 overflow-hidden object-cover rounded-3xl' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"  alt="pic" />
                         <img className="w-5 h-5 overflow-hidden object-cover rounded-3xl " src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60' />
                         <button className='w-5 h-5 rounded-[50%] border-none text-[#ff942e] bg-[#fff] ml-[6px] flex items-center justify-center p-0'>
                         <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

                         </button>
                       </div>
                       <div className="text-[8px] msm:text-3 rounded-3xl flex-shrink-0 py-[6px] text-[#4bb7f5] msm: font-bold px-[6px] msm:px-4 bg-[#fff] text-center">12 Day Left</div>
                    </div>    
                </div>
                {/* end cards */}
            </div>
        

    )
}

export default ListView










// const ListView = () => {

//     // const [list, setList] = useState(false);
  
//     return (
//             <div className="flex flex-col -mx-2 overflow-y-visible msm:overflow-y-auto">
//                 {/* card */}
//                 <div className="bg-[#dbf6fd] flex relative  p-4 rounded-[12px]">
//                          <div >

//                          </div>
//                         <div className="flex flex-col justify-center mr-6 max-w-[140px] ">

//                             <div className="flex items-center  mb-4 justify-between order-1">
//                                 <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>

//                             </div>
//                             <div className="text-center justify-center">
//                                 <p className="font-bold text-[16px] leading-6 opacity-70">SVG ANIMATION</p>
//                                 <p className="font-bold text-[14px] leading-6 opacity-70">Prototyping</p>
//                             </div>
//                         </div>

//                         <div className='flex-1 overflow-auto mr-6 w-auto justify-between items-center'>
//                             <p className="font-sans font-bold text-[14px] leading-3 mx-0 my-0">Progress</p>
                            
//                             <div className=" rounded-full  my-2 bg-[#fff]">
//                                     <div className="bg-[#201ce4]  leading-none rounded-full py-[2px] text-center text-white w-[60%]" ></div> 
//                                  </div>
//                             <p className="mx-0 my-0 leading-4 font-bold text-[14px] text-right">60%</p>
//                         </div>

//                         <div className="flex flex-col order-3 items-center justify-start  pt-0 mr-6">
//                             <div className="flex items-center mb-2">
//                                 <img className="w-5 h-5 overflow-hidden object-cover border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
//                                 <img className="w-5 h-5 overflow-hidden border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />

//                                 <button className="ml-2 bg-[#fff] rounded-full items-center justify-center overflow-visible" >
//                                     <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
//                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
//                                             strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

//                                 </button>
//                             </div>

//                             {/* days left div */}
//                             <div className="flex bg-[#fff] px-4 ml-auto rounded-full py-[6px]  text-[#4f3ff0]  font-bold font-sans flex-shrink-0 text-sm" >
//                                 12 Days Left
//                             </div>
                           

//                         </div>
//                         {/* three dots */}
//                         <button className="flex px-0 items-start order-3 ">
//                                 <svg xmlns="http://www.w3.org/2000/svg"
//                                 className='font-bold '
//                                  width="22" height="22" viewBox="0 0 24 24"
//                                     fill="none" stroke="currentColor"  stroke-width="3" stroke-linecap="round"
//                                     stroke-linejoin="round" class="feather feather-more-vertical">
//                                     <circle cx="12" cy="12" r="1"></circle>
//                                     <circle cx="12" cy="5" r="1"></circle>
//                                     <circle cx="12" cy="19" r="1"></circle></svg>
//                             </button>
                  
//                 </div>
//                 {/* card 2 */}
//                 <div className="bg-[#dbf6fd] flex flex-row w-full px-2 py-2 rounded-xl">
//                     <div className="flex flex-row relative px-4 py-4">
//                         <div className="flex flex-col justify-center mr-6 max-w-[140px] ">

//                             <div className="flex items-center  mb-4 justify-between order-1">
//                                 <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>

//                             </div>
//                             <div className="text-center justify-center">
//                                 <p className="font-bold text-[16px] leading-6 opacity-70">SVG ANIMATION</p>
//                                 <p className="font-bold text-[14px] leading-6 opacity-70">Prototyping</p>
//                             </div>
//                         </div>

//                         <div className='flex-1 overflow-auto mr-6 w-auto justify-between items-center'>
//                             <p className="font-sans font-bold text-[14px] leading-3 mx-0 my-0">Progress</p>
                            
//                             <div className=" rounded-full  my-2 bg-[#fff]">
//                                     <div className="bg-[#201ce4]  leading-none rounded-full py-[2px] text-center text-white w-[60%]" ></div> 
//                                  </div>
//                             <p className="mx-0 my-0 leading-4 font-bold text-[14px] text-right">60%</p>
//                         </div>

//                         <div className="flex flex-col order-3 items-center justify-start  pt-0 mr-6">
//                             <div className="flex items-center mb-2">
//                                 <img className="w-5 h-5 overflow-hidden object-cover border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
//                                 <img className="w-5 h-5 overflow-hidden border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />

//                                 <button className="ml-2 bg-[#fff] rounded-full items-center justify-center overflow-visible" >
//                                     <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
//                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
//                                             strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

//                                 </button>
//                             </div>

//                             {/* days left div */}
//                             <div className="flex bg-[#fff] px-4 ml-auto rounded-full py-[6px]  text-[#4f3ff0]  font-bold font-sans flex-shrink-0 text-sm" >
//                                 12 Days Left
//                             </div>
                           

//                         </div>
//                         {/* three dots */}
//                         <button className="flex px-0 items-start order-3 ">
//                                 <svg xmlns="http://www.w3.org/2000/svg"
//                                 className='font-bold '
//                                  width="22" height="22" viewBox="0 0 24 24"
//                                     fill="none" stroke="currentColor"  stroke-width="3" stroke-linecap="round"
//                                     stroke-linejoin="round" class="feather feather-more-vertical">
//                                     <circle cx="12" cy="12" r="1"></circle>
//                                     <circle cx="12" cy="5" r="1"></circle>
//                                     <circle cx="12" cy="19" r="1"></circle></svg>
//                             </button>
//                     </div>
//                 </div>
//                 <div className="bg-[#dbf6fd] flex flex-row w-full px-2 py-2 rounded-xl">
//                     <div className="flex flex-row relative px-4 py-4">
//                         <div className="flex flex-col justify-center mr-6 max-w-[140px] ">

//                             <div className="flex items-center  mb-4 justify-between order-1">
//                                 <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>

//                             </div>
//                             <div className="text-center justify-center">
//                                 <p className="font-bold text-[16px] leading-6 opacity-70">SVG ANIMATION</p>
//                                 <p className="font-bold text-[14px] leading-6 opacity-70">Prototyping</p>
//                             </div>
//                         </div>

//                         <div className='flex-1 overflow-auto mr-6 w-auto justify-between items-center'>
//                             <p className="font-sans font-bold text-[14px] leading-3 mx-0 my-0">Progress</p>
                            
//                             <div className=" rounded-full  my-2 bg-[#fff]">
//                                     <div className="bg-[#201ce4]  leading-none rounded-full py-[2px] text-center text-white w-[60%]" ></div> 
//                                  </div>
//                             <p className="mx-0 my-0 leading-4 font-bold text-[14px] text-right">60%</p>
//                         </div>

//                         <div className="flex flex-col order-3 items-center justify-start  pt-0 mr-6">
//                             <div className="flex items-center mb-2">
//                                 <img className="w-5 h-5 overflow-hidden object-cover border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
//                                 <img className="w-5 h-5 overflow-hidden border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />

//                                 <button className="ml-2 bg-[#fff] rounded-full items-center justify-center overflow-visible" >
//                                     <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
//                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
//                                             strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

//                                 </button>
//                             </div>

//                             {/* days left div */}
//                             <div className="flex bg-[#fff] px-4 ml-auto rounded-full py-[6px]  text-[#4f3ff0]  font-bold font-sans flex-shrink-0 text-sm" >
//                                 12 Days Left
//                             </div>
                           

//                         </div>
//                         {/* three dots */}
//                         <button className="flex px-0 items-start order-3 ">
//                                 <svg xmlns="http://www.w3.org/2000/svg"
//                                 className='font-bold '
//                                  width="22" height="22" viewBox="0 0 24 24"
//                                     fill="none" stroke="currentColor"  stroke-width="3" stroke-linecap="round"
//                                     stroke-linejoin="round" class="feather feather-more-vertical">
//                                     <circle cx="12" cy="12" r="1"></circle>
//                                     <circle cx="12" cy="5" r="1"></circle>
//                                     <circle cx="12" cy="19" r="1"></circle></svg>
//                             </button>
//                     </div>
//                 </div>
//                 <div className="bg-[#dbf6fd] flex flex-row w-full px-2 py-2 rounded-xl">
//                     <div className="flex flex-row relative px-4 py-4">
//                         <div className="flex flex-col justify-center mr-6 max-w-[140px] ">

//                             <div className="flex items-center  mb-4 justify-between order-1">
//                                 <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>

//                             </div>
//                             <div className="text-center justify-center">
//                                 <p className="font-bold text-[16px] leading-6 opacity-70">SVG ANIMATION</p>
//                                 <p className="font-bold text-[14px] leading-6 opacity-70">Prototyping</p>
//                             </div>
//                         </div>

//                         <div className='flex-1 overflow-auto mr-6 w-auto justify-between items-center'>
//                             <p className="font-sans font-bold text-[14px] leading-3 mx-0 my-0">Progress</p>
                            
//                             <div className=" rounded-full  my-2 bg-[#fff]">
//                                     <div className="bg-[#201ce4]  leading-none rounded-full py-[2px] text-center text-white w-[60%]" ></div> 
//                                  </div>
//                             <p className="mx-0 my-0 leading-4 font-bold text-[14px] text-right">60%</p>
//                         </div>

//                         <div className="flex flex-col order-3 items-center justify-start  pt-0 mr-6">
//                             <div className="flex items-center mb-2">
//                                 <img className="w-5 h-5 overflow-hidden object-cover border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
//                                 <img className="w-5 h-5 overflow-hidden border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />

//                                 <button className="ml-2 bg-[#fff] rounded-full items-center justify-center overflow-visible" >
//                                     <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
//                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
//                                             strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

//                                 </button>
//                             </div>

//                             {/* days left div */}
//                             <div className="flex bg-[#fff] px-4 ml-auto rounded-full py-[6px]  text-[#4f3ff0]  font-bold font-sans flex-shrink-0 text-sm" >
//                                 12 Days Left
//                             </div>
                           

//                         </div>
//                         {/* three dots */}
//                         <button className="flex px-0 items-start order-3 ">
//                                 <svg xmlns="http://www.w3.org/2000/svg"
//                                 className='font-bold '
//                                  width="22" height="22" viewBox="0 0 24 24"
//                                     fill="none" stroke="currentColor"  stroke-width="3" stroke-linecap="round"
//                                     stroke-linejoin="round" class="feather feather-more-vertical">
//                                     <circle cx="12" cy="12" r="1"></circle>
//                                     <circle cx="12" cy="5" r="1"></circle>
//                                     <circle cx="12" cy="19" r="1"></circle></svg>
//                             </button>
//                     </div>
//                 </div>
//                 <div className="bg-[#dbf6fd] flex flex-row w-full px-2 py-2 rounded-xl">
//                     <div className="flex flex-row relative px-4 py-4">
//                         <div className="flex flex-col justify-center mr-6 max-w-[140px] ">

//                             <div className="flex items-center  mb-4 justify-between order-1">
//                                 <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>

//                             </div>
//                             <div className="text-center justify-center">
//                                 <p className="font-bold text-[16px] leading-6 opacity-70">SVG ANIMATION</p>
//                                 <p className="font-bold text-[14px] leading-6 opacity-70">Prototyping</p>
//                             </div>
//                         </div>

//                         <div className='flex-1 overflow-auto mr-6 w-auto justify-between items-center'>
//                             <p className="font-sans font-bold text-[14px] leading-3 mx-0 my-0">Progress</p>
                            
//                             <div className=" rounded-full  my-2 bg-[#fff]">
//                                     <div className="bg-[#201ce4]  leading-none rounded-full py-[2px] text-center text-white w-[60%]" ></div> 
//                                  </div>
//                             <p className="mx-0 my-0 leading-4 font-bold text-[14px] text-right">60%</p>
//                         </div>

//                         <div className="flex flex-col order-3 items-center justify-start  pt-0 mr-6">
//                             <div className="flex items-center mb-2">
//                                 <img className="w-5 h-5 overflow-hidden object-cover border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
//                                 <img className="w-5 h-5 overflow-hidden border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />

//                                 <button className="ml-2 bg-[#fff] rounded-full items-center justify-center overflow-visible" >
//                                     <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
//                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
//                                             strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

//                                 </button>
//                             </div>

//                             {/* days left div */}
//                             <div className="flex bg-[#fff] px-4 ml-auto rounded-full py-[6px]  text-[#4f3ff0]  font-bold font-sans flex-shrink-0 text-sm" >
//                                 12 Days Left
//                             </div>
                           

//                         </div>
//                         {/* three dots */}
//                         <button className="flex px-0 items-start order-3 ">
//                                 <svg xmlns="http://www.w3.org/2000/svg"
//                                 className='font-bold '
//                                  width="22" height="22" viewBox="0 0 24 24"
//                                     fill="none" stroke="currentColor"  stroke-width="3" stroke-linecap="round"
//                                     stroke-linejoin="round" class="feather feather-more-vertical">
//                                     <circle cx="12" cy="12" r="1"></circle>
//                                     <circle cx="12" cy="5" r="1"></circle>
//                                     <circle cx="12" cy="19" r="1"></circle></svg>
//                             </button>
//                     </div>
//                 </div>
//                 <div className="bg-[#dbf6fd] flex flex-row w-full px-2 py-2 rounded-xl">
//                     <div className="flex flex-row relative px-4 py-4">
//                         <div className="flex flex-col justify-center mr-6 max-w-[140px] ">

//                             <div className="flex items-center  mb-4 justify-between order-1">
//                                 <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>

//                             </div>
//                             <div className="text-center justify-center">
//                                 <p className="font-bold text-[16px] leading-6 opacity-70">SVG ANIMATION</p>
//                                 <p className="font-bold text-[14px] leading-6 opacity-70">Prototyping</p>
//                             </div>
//                         </div>

//                         <div className='flex-1 overflow-auto mr-6 w-auto justify-between items-center'>
//                             <p className="font-sans font-bold text-[14px] leading-3 mx-0 my-0">Progress</p>
                            
//                             <div className=" rounded-full  my-2 bg-[#fff]">
//                                     <div className="bg-[#201ce4]  leading-none rounded-full py-[2px] text-center text-white w-[60%]" ></div> 
//                                  </div>
//                             <p className="mx-0 my-0 leading-4 font-bold text-[14px] text-right">60%</p>
//                         </div>

//                         <div className="flex flex-col order-3 items-center justify-start  pt-0 mr-6">
//                             <div className="flex items-center mb-2">
//                                 <img className="w-5 h-5 overflow-hidden object-cover border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
//                                 <img className="w-5 h-5 overflow-hidden border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />

//                                 <button className="ml-2 bg-[#fff] rounded-full items-center justify-center overflow-visible" >
//                                     <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
//                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
//                                             strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

//                                 </button>
//                             </div>

//                             {/* days left div */}
//                             <div className="flex bg-[#fff] px-4 ml-auto rounded-full py-[6px]  text-[#4f3ff0]  font-bold font-sans flex-shrink-0 text-sm" >
//                                 12 Days Left
//                             </div>
                           

//                         </div>
//                         {/* three dots */}
//                         <button className="flex px-0 items-start order-3 ">
//                                 <svg xmlns="http://www.w3.org/2000/svg"
//                                 className='font-bold '
//                                  width="22" height="22" viewBox="0 0 24 24"
//                                     fill="none" stroke="currentColor"  stroke-width="3" stroke-linecap="round"
//                                     stroke-linejoin="round" class="feather feather-more-vertical">
//                                     <circle cx="12" cy="12" r="1"></circle>
//                                     <circle cx="12" cy="5" r="1"></circle>
//                                     <circle cx="12" cy="19" r="1"></circle></svg>
//                             </button>
//                     </div>
//                 </div>
//                 <div className="bg-[#dbf6fd] flex flex-row w-full px-2 py-2 rounded-xl">
//                     <div className="flex flex-row relative px-4 py-4">
//                         <div className="flex flex-col justify-center mr-6 max-w-[140px] ">

//                             <div className="flex items-center  mb-4 justify-between order-1">
//                                 <span className="text-[#4A4A4A] opacity-70 text-sm">December,10 2020</span>

//                             </div>
//                             <div className="text-center justify-center">
//                                 <p className="font-bold text-[16px] leading-6 opacity-70">SVG ANIMATION</p>
//                                 <p className="font-bold text-[14px] leading-6 opacity-70">Prototyping</p>
//                             </div>
//                         </div>

//                         <div className='flex-1 overflow-auto mr-6 w-auto justify-between items-center'>
//                             <p className="font-sans font-bold text-[14px] leading-3 mx-0 my-0">Progress</p>
                            
//                             <div className=" rounded-full  my-2 bg-[#fff]">
//                                     <div className="bg-[#201ce4]  leading-none rounded-full py-[2px] text-center text-white w-[60%]" ></div> 
//                                  </div>
//                             <p className="mx-0 my-0 leading-4 font-bold text-[14px] text-right">60%</p>
//                         </div>

//                         <div className="flex flex-col order-3 items-center justify-start  pt-0 mr-6">
//                             <div className="flex items-center mb-2">
//                                 <img className="w-5 h-5 overflow-hidden object-cover border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="participant" />
//                                 <img className="w-5 h-5 overflow-hidden border-r-[50%] rounded-full" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="participant" />

//                                 <button className="ml-2 bg-[#fff] rounded-full items-center justify-center overflow-visible" >
//                                     <svg className="w-5 h-5 text-[#4f3ff0]" fill="none" stroke="currentColor"
//                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
//                                             strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>

//                                 </button>
//                             </div>

//                             {/* days left div */}
//                             <div className="flex bg-[#fff] px-4 ml-auto rounded-full py-[6px]  text-[#4f3ff0]  font-bold font-sans flex-shrink-0 text-sm" >
//                                 12 Days Left
//                             </div>
                           

//                         </div>
//                         {/* three dots */}
//                         <button className="flex px-0 items-start order-3 ">
//                                 <svg xmlns="http://www.w3.org/2000/svg"
//                                 className='font-bold '
//                                  width="22" height="22" viewBox="0 0 24 24"
//                                     fill="none" stroke="currentColor"  stroke-width="3" stroke-linecap="round"
//                                     stroke-linejoin="round" class="feather feather-more-vertical">
//                                     <circle cx="12" cy="12" r="1"></circle>
//                                     <circle cx="12" cy="5" r="1"></circle>
//                                     <circle cx="12" cy="19" r="1"></circle></svg>
//                             </button>
//                     </div>
//                 </div>
//                 {/* card 2 End */}
//                 {/* end cards */}
//             </div>
        

//     )
// }

// export default ListView