import React from 'react'
import index from '../pages'
export default function Hero() {

  const ListData = [
    {
      icon: 'pi pi-home', 
      name: 'Resturent', 
      listings: 150
    },
    {
      icon: 'pi pi-shopping-bag',
      name: 'destination',
      listings : 214
      },
    {
      icon: 'pi pi-building', 
      name: 'hotels',
      listings: 185
    },
    {
      icon: 'pi pi-heart-fill',
      name: 'healthcaree',
      listings: 200
    },
    {
      icon: 'pi pi-car',
      name: 'automotion',
      listings: 120
    },
  ]
  {
    ListData.map((data, index) => {
      console.log(data.name, 'data')  
    }) 
  }

  return (
    <div className='relative flex flex-col items-center  h-[400px]  text-white ' id='hero'> 
      <div className='absolute w-[100%] h-[80vh] bg-grey1 '><h2 className='uppercase  text-5xl font-bold pt-[155px]'>best place to find and explore</h2>
        <h2 className='uppercase text-5xl/[1.4] font-bold tracking-2.4px'>that all you need</h2>
        <p className='mt-[25px] text-lg'>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</p>
        <div className='flex items-center justify-self-center bg-white w-[45%] h-[60px] mt-[60px] '>
          <div className='flex  text-black pl-[30px] pr-[30px] '>
            <h3>What?</h3>
            <form className='ml-[10px] font-medium text-[#859098] text-[14px]  w-[300px] bg-transparent '>
              <input type='text' placeholder='Ex: Palce, Resturent, Food, Automobile' />
              
            </form>
            <div id='list-icon'><i class='pi pi-list'></i></div>
          </div>

          <div className='flex  text-black bg-white '>
            <h3>Location</h3>
            <form className='mx-[10px]'>
              <input type='text' placeholder='Ex: London, Newyork, Rome' />
            </form>
            <div className='mr-[10px]'><i class='pi pi-map-marker'></i></div>
          </div>
          <button className='capitalize bg-[#ff545a] text-white text-[16px] font-medium w-[180px] p-[20px] rounded-[3px]'>Search</button>
        </div>


      </div>

      
      <div className='absolute py-10 px-50 top-[100%] left-[0%] -translate-y-[50%] w-full flex justify-center gap-5 '>
        {
          ListData.map((data, index) => {
            return (
              <div className='shadow-xl p-10 w-[15%] group text-center capitalize bg-white rounded-[3px] hover:bg-[#ff545a] hover:text-white duration-700 ease-in
'>
                <div>
                  <i className={`${data.icon} text-4xl text-[#343a3f] group-hover:text-white `}></i>
                </div>
                <div className='text-[16px] font-bold text-black '>
                  <p className='my-[13px] group-hover:text-white'>{data.name}</p>
                  <span className='text-[#767f86] text-[14px]/[1.8] group-hover:text-white'>{data.listings} listings</span>
                </div>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}
