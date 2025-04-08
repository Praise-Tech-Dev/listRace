import React from 'react'

export default function Stats() {
  return (
    <div className=' justify-between ' id='stats'>
      <div className="bg-grey1 flex w-[100%] h-[40vh] items-center justify-center gap-15">
        <div className="">
          <div className='flex  text-[60px]'>
              <div>90</div>
              <span>K+</span>
          </div>
          <h3 className='text-2xl capitalize font-medium'>listings</h3>
        </div>
        <div className="">
          <div className='flex  text-[60px]'>
              <div>40</div>
              <span>K+</span>
          </div>
          <h3 className='text-2xl capitalize font-medium'>listing categories</h3>
        </div>
        <div className="">
          <div className='flex text-[60px]'>
              <div>65</div>
              <span>K+</span>
          </div>
          <h3 className='text-2xl capitalize font-medium'>visitors</h3>
        </div>
        <div className="">
          <div className='flex text-[60px]'>
              <div>50</div>
              <span>K+</span> 
          </div>
          <h3 className='text-2xl capitalize font-medium'>happy clients</h3>
        </div>
      </div>
      
    </div>
  )
}
