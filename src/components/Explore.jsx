import React from 'react'
import ListData from '../utils/exploreData' 


export default function Explore() {
     
        // List_Data.map((data, index) => {
        //   console.log(data.name, 'data', data.imageUrl)  
        // }) 

        console.log(ListData, 'ListData');
        

        
  return (
    <div className='justify-center flex flex-col items-center text-[#343a3f] bg-[#f8fafb]'>
        <h2 className='mb-[24px] mt-[150px] uppercase text-2xl font-medium tracking-[1.3px] text-[#505866]'>explore</h2>
        <p className='text-[16px]/[1.8] text-[#767f86]'>Explore New place, food, culture around the world and many more</p>
      <div className='justify-center mt-[40px] mx-[200px] gap-10 pb-[50px] grid grid-cols-3 w-[60%]'>
      {
          ListData.map((data, index) => {
            return (
              <div className='group shadow-xl   capitalize bg-white rounded-[3px] hover:shadow-2xl ' key={index}>
                <div className='relative'>
                  <img src={data.imageUrl} className="w-[100%]"/>
                  <div className='absolute duration-1000 ease-out group-hover:flex items-center justify-between px-3 py-2 hidden w-full bottom-0 text-white'>
                    <p className='bg-red-400 py-0.5 px-3 rounded text-xs'>{data.tag}</p>
                    <div className="flex gap-2">
                      <div className="p-1.5  font-extralight text-xs bg-gray-800 text-white hover:text-blue-400">
                        <i className="pi pi-arrows-alt  rotate-[45deg]"></i>
                      </div>
                      <i className="pi pi-bookmark p-1.5 font-extralight text-xs bg-gray-800 text-white hover:text-blue-400"></i>
                    </div>
                  </div>
                </div>
                <div className='text-[#343a3f] text-[16px] font-medium p-[15px]'>
                  <p className='my-[13px] '>  {data.name}</p>
                  <p className='my-[13px] text-[#777f85] text-xs'>
                    <span className={` px-1 text-sm ${data.rate > 4 ? 'bg-green-400' : data.rate > 2 ? 'bg-yellow-400' : 'bg-red-400' }  text-white px-1 rounded`}>{data.rate.toFixed(1)}</span>
                    <span className=' px-2 '>{data.rating} Ratings </span> | 
                    <span className='px-2'> From <em className='text-red-400 not-italic'>{data.price}</em>  | 
                    <span className='px-2'> {data.type} </span></span>
                  </p>
                  <div className='my-[13px] flex gap-2'>
                    <img src={data.person} className='w-[40px] h-[40px] rounded-full mr-1' />
                    <span className='text-[#767f86] text-[12px]/[1.8]'>{data.description} </span>
                  </div>
                  <div className='bg-gray-200 h-[1px] w-[90%] items-center'></div>
                  <div className='flex justify-between pt-1'>
                    <div className="">
                      {data.active ? <p className=' text-[#85d39b] text-[14px]/[1.8]'>Open Now</p> : <p className=' text-red-400 text-[14px]/[1.8]'>Close Now</p>}
                    </div>
                    <div className='flex gap-5 text-xs'>
                      <div className=""><i className='pi pi-map-marker'></i></div>
                      <div className=""><i className='pi pi-download'></i></div>
                      <div className=""><i className='pi pi-heart'></i></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
        
    </div>
  )
}
