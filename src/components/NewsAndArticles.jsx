import React from 'react'

export default function NewsAndArticles() {

    

  return (
    
    <div className='justify-center flex flex-col items-center text-[#343a3f] pb-[90px]'>
        <h2 className='mb-[24px] pt-[120px] uppercase text-2xl font-medium tracking-[1.3px] text-[#505866]'>news and articles</h2>
        <p className='text-[16px]/[1.8] text-[#767f86]'>Always upto date with our latest News and Articles</p>

        <div className='flex justify-center mt-[40px] pb-[50px]  gap-7'>
                <div className='shadow-xl  w-[30%] text-center capitalize bg-white rounded-[3px] hover:shadow-2xl group'>
                    <div>
                        <img src= "../../public/assets/images/blog/b1.jpg" className='' />
                    </div>
                    <div className='text-[#343a3f] text-[16px] font-medium p-[25px]'>
                        <a><p className=' group-hover:text-[#ff545a]'>How to find your Desired Place more quickly</p></a>
                        <span className='text-[#767f86] text-[14px]/[1.8] mt-[12px] mb-[20px] '>posted by admin |  march 2018 </span>
                        <p className='text-[#767f86] text-[14px]/[1.8]'>Lorem ipsum dolor sit amet, consectetur de<br/> adipisicing elit, sed do eiusmod tempore <br/>incididunt ut labore et dolore magna.</p>
                    </div>
                </div>

                <div className='group shadow-xl  w-[30%] text-center capitalize bg-white rounded-[3px] hover:shadow-2xl '>
                    <div>
                        <img src= "../../public/assets/images/blog/b2.jpg" className='' />
                    </div>
                    <div className='text-[#343a3f] text-[16px] font-medium p-[25px]'>
                        <a><p className=' group-hover:text-[#ff545a]'>How to find your Desired Place more quickly</p></a>
                        <span className='text-[#767f86] text-[14px]/[1.8] '>posted by admin |  march 2018 </span>
                        <p className='text-[#767f86] text-[14px]/[1.8] '>Lorem ipsum dolor sit amet, consectetur de<br/> adipisicing elit, sed do eiusmod tempore <br/>incididunt ut labore et dolore magna.</p>
                    </div>
                </div>

                <div className='group shadow-xl  w-[30%] text-center capitalize bg-white rounded-[3px] hover:shadow-2xl '>
                    <div>
                        <img src= "../../public/assets/images/blog/b3.jpg" className='' />
                    </div>
                    <div className='text-[#343a3f] text-[16px] font-medium p-[25px]'>
                        <a><p className=' group-hover:text-[#ff545a]'>How to find your Desired Place more quickly</p></a>
                        <span className='text-[#767f86] text-[14px]/[1.8] '>posted by admin |  march 2018 </span>
                        <p className='text-[#767f86] text-[14px]/[1.8]'>Lorem ipsum dolor sit amet, consectetur de<br/> adipisicing elit, sed do eiusmod tempore <br/>incididunt ut labore et dolore magna.</p>
                    </div>
                </div>
        </div>
    
    </div>
    
    
  )
}
