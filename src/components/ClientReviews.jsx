import React from 'react'
import ClientData from '../utils/clientData'

export default function ClientReviews() {

  console.log(ClientData, 'ClientData');

  return (
    <div className='justify-center flex flex-col items-center text-[#343a3f] pb-[90px]'>
        <h2 className='mb-[24px] mt-[240px] uppercase text-2xl font-medium tracking-[1.3px] text-[#505866]'>clients reviews</h2>
        <p className='text-[16px]/[1.8] text-[#767f86]'>What our client say about us</p>
        <div className='flex justify-center mt-[40px] mx-[50px] gap-5 pb-[50px] '>
        {
            ClientData.map((data, index) => {
              return (
                <div className='shadow-xl capitalize bg-white rounded-[3px] hover:shadow-2xl px-5 py-10'>
                  <div className="flex gap-5">
                    <div>
                      <img src={data.imageUrl} className="w-full "/>
                    </div>
                    <div className=''>
                      <h1 className='text-[18px] font-medium'>{data.name}</h1>
                      <p className=''>{data.Country}</p>
                      <div className='flex gap-1.5'>
                        <div>
                          <i className={`${data.rate} text-amber-300`}></i>
                        </div>
                        <div>
                          <i className={`${data.rate} text-amber-300`}></i>
                        </div>
                        <div>
                          <i className={`${data.rate} text-amber-300`}></i>
                        </div>
                        <div>
                          <i className={`${data.rate} text-amber-300`}></i>
                        </div>
                        <div>
                          <i className={`${data.rate} text-amber-300`}></i>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div className=""><span className='text-[#767f86] text-[14px]/[1.8]'>{data.description} </span></div>
                </div>
              )
            })
          }
        </div>
          
    </div>
  )
}
