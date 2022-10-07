import React, { useState } from 'react'
import img30 from '../../assets/30.png'
import img31 from '../../assets/31.png'
import img33 from '../../assets/33.png'

function Item({setItemC}) {
    const [data, setData] = useState(0)
  return (
    <div className='absolute top-0 left-0 z-30 w-screen h-screen'>
        <div className='absolute  bg-black w-screen h-screen opacity-80 top-0 left-0 z-40'>  
            
        </div>
        
        <div className='item flex justify-center items-center w-[100%] h-[100%] rounded-2xl bg-red relative flex-col z-50'>
                <div className="bg-gradient-to-b from-stone-900 mt-[8%] to-stone-800 w-4/12 h-[18rem] mb-3 border border-2 border-black  rounded-xl z-50">	
                    <div className='w-full h-full bg-[##150c0c] relative'>
                        <div className='img-and-queantity w-full absolute top-[-15%] left-36'>
                            <img src={img33} className="w-[38%] cursor-pointer rounded-br-xl" />
                            
                        </div>
                        <div className='absolute text-center bottom-[45%] w-full outline-title font-extrabold text-lg text-white'>Move to Wallet</div>
                        <div className='incndec w-full bottom-[27%] absolute flex  justify-center '>
                            <div className='w-24 text-center p-1 bg-[#595959] outline-title cursor-pointer text-white rounded-l-xl font-extrabold text-2xl'  onClick={()=> setData(data-1)}>-</div>
                            <div className='w-24 text-center p-1  bg-[#595959] outline-title text-yellow-600 border-l-2 border-black font-extrabold border-r-2 text-2xl bg-gray-600' >{data}</div>
                            <div className='w-24 text-center p-1 bg-[#595959] outline-title cursor-pointer text-white font-extrabold rounded-r-xl text-2xl'  onClick={()=> setData(data +1 )}>+</div>
                        </div>
                        <div className='absolute bottom-0 buttons flex justify-center items-end w-full bg-green'>
                            <img src={img30} className="w-[51%] cursor-pointer h-[23%] rounded-bl-xl" onClick={()=> setItemC(false)} />
                            <img src={img31} className="w-[51%] cursor-pointer h-[23%] rounded-br-xl" onClick={()=> setItemC(false)} />
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Item