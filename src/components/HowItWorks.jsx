import React from 'react'

export default function HowItWorks() {

 
    const ListData = [
        {
          icon: 'pi pi-lightbulb', 
          name: 'Choose what to Do', 
          description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.'
        },
        {
          icon: 'pi pi-search',
          name: 'Find what you want',
          description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.'
          },
        {
          icon: 'pi pi-compass', 
          name: 'Explore amazing Place',
          description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.'
        },
        
      ]
      {
        ListData.map((data, index) => {
          console.log(data.name, 'data')  
        }) 
      }

  return (
    <div className='justify-center flex flex-col items-center text-[#343a3f] pb-[90px]'>
        <h2 className='mb-[24px] mt-[240px] uppercase text-2xl font-medium tracking-[1.3px] text-[#505866]'>how it works</h2>
        <p className='text-[16px]/[1.8] text-[#767f86]'>Learn More about how our website works</p>
      <div className='flex justify-center mt-[40px] gap-5 pb-[50px]'>
      {
          ListData.map((data, index) => {
            return (
              <div className='group shadow-xl px-[42px] py-[50px] w-[20%] text-center capitalize bg-white rounded-[3px] hover:bg-[#ff545a] duration-700 ease-in-out'>
                <div>
                  <i className={`${data.icon} text-4xl text-[#50616c]/[80px] rounded-[50%] bg-[#eef2f6] p-[20px] w-[80px] group-hover:text-[#ff545a] justify-center`}></i>
                </div>
                <div className='text-[#343a3f] text-[16px] font-medium group-hover:text-white'>
                  <p className='my-[13px]'>{data.name}</p>
                  <span className='text-[#767f86] text-[14px]/[1.8] group-hover:text-white'>{data.description} </span>
                  <button className='bg-transparent border-solid border-[#d3d6d9] border-[1px] w-[100px]  text-[12px] mt-[20px] p-[10px] rounded-[3px] text-center group-hover:bg-white group-hover:text-[#ff545a] font-light'>Read More</button>
                </div>
              </div>
            )
          })
        }
      </div>
        
    </div>
  )
}
