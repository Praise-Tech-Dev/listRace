import React from 'react'

export default function HeaderPart() {
  return (
    <header className='flex justify-between px-90 bg-white '>
        <h1 className='text-xl pt-[34px] pb-[34px] font-bold'>List<span className=' text-[red]'>Race</span></h1>

        <ul className='flex gap-10 uppercase pt-[34px] pb-[34px] text-slate-400 text-sm font-medium'>
            <a href=''><li>Home</li></a>
            <a href=''><li>How it works</li></a>
            <a href=''><li>Explore</li></a>
            <a href=''><li>Review</li></a>
            <a href=''><li>Blog</li></a>
            <a><li>Contact</li></a>
        </ul>
    </header>
  )
}
