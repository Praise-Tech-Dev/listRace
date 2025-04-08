import React from 'react'

export default function Listing() {
  return (
    <div className='justify-center flex flex-col items-center text-[#343a3f] py-[150px] bg-[#f8fafb]'>
        <h2 className='uppercase text-2xl font-medium tracking-[1.3px] text-[#505866]'>do you want to add your business listing with us?</h2>
        <p className='text-[16px]/[1.8] text-[#7b8088] font-medium mt-[28px]'>Listrace offer you to list your business with us and we very much able to promote your Business.</p>
        <form className='hover:shadow-lg'>
          <input type='text' placeholder='Enter your email here' className=' bg-white border-[1px] border-solid border-[#fff] w-[630px] h-[60px] mt-[30px] pl-[30px] rounded-[3px] text-[#a5adb3] text-[16px] shadow'/>
          <button className='capitalize bg-[#ff545a] text-white text-[16px] font-medium w-[180px] p-[20px] rounded-[3px] '>create account</button>
        </form>
    </div>
  )
}
