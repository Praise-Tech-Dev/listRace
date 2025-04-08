import React from 'react'
import HeaderPart from './HeaderPart'


export default function Footer() {
  return (
    <div>
      <HeaderPart/>
      <div></div>
      <div className='flex justify-between px-90 text-[#afb4bf] py-[40px]'>
        <div>
            <p>©copyright. designed and developed by <a href='https://themesine.com/'>themesine</a></p>
            
        </div>
        <div className='flex gap-5 '>
            <span><i className='pi pi-phone'> +1  (222) 777 8888</i></span>
            <a>
                <i className='pi pi-facebook'></i>
            </a>
            <a>
                <i className='pi pi-twitter'></i>
            </a>
            <a>
                <i className='pi pi-linkedin'></i>
            </a>
            <a>
                <i className='pi pi-google'></i>
            </a>
        </div>
      </div>
      
    </div>
  )
}
