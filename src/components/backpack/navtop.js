import React from 'react'
import img1 from '../../assets/17.png'

function Navtop({setInterChange, interchange}) {
  return (
    <div className='bg w-full h-full flex flex-col justify-start items-center'>
        <div className={` text-center hover:opacity-80 cursor-pointer font-extrabold text-xl md:text-xl lg:text-2xl xl:text-xl text-center text-white z-10 right-[53%] outline-title flex justify-center w-full`}>Transfer To</div>
        <div className='relative border-2 border border-black mt-3 w-[30%] bg-transparent h-[27%] rounded-lg'>
            <div className='w-full h-full bg-gray-400 opacity-50 rounded-lg'></div>
            <div className='absolute top-0 text-black w-full h-full flex justify-between px-8'>
                {
                  interchange ? (<>
                      <div className={` hover:opacity-80 cursor-pointer font-extrabold text-[18px] text-white  outline-title`}>Wallet</div>
                      <img src={img1} className="absolute w-[13%] right-[42%] top-[-55%] cursor-pointer" onClick={()=> setInterChange(!interchange)} />
                      <div className={`  hover:opacity-80 cursor-pointer font-extrabold text-[18px]  text-white  outline-title `}>BagPack</div>
                  </>) : (<>
                      <div className={`  hover:opacity-80 cursor-pointer font-extrabold text-[18px]  text-white  outline-title `}>BagPack</div>
                      <img src={img1} className="absolute w-[13%] right-[42%] top-[-55%] cursor-pointer" onClick={()=> setInterChange(!interchange)} />
                      <div className={` hover:opacity-80 cursor-pointer font-extrabold text-[18px] text-white  outline-title`}>Wallet</div>
                  </>)
                }
            </div>
        </div>
    </div>
  )
}

export default Navtop