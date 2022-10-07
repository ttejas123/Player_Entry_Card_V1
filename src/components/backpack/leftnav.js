import React, { useState } from 'react'
import img1 from '../../assets/19.png'
import img2 from '../../assets/18.png'

import img3 from '../../assets/21.png'
import img4 from '../../assets/20.png'

import img5 from '../../assets/23.png'
import img6 from '../../assets/22.png'

import img7 from '../../assets/25.png'
import img8 from '../../assets/24.png'

import img9 from '../../assets/27.png'
import img10 from '../../assets/26.png'

import img11 from '../../assets/29.png'
import img12 from '../../assets/28.png'

function Leftnav() {
  const [tab, setTab] = useState(1);
  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-1 p-1 gap-1 w-full h-full'>
        <div> {
            tab == 1 ? (<img className="hover:cursor-pointer" onClick={()=> setTab(1)} src={img1} />) : (<img className="hover:cursor-pointer" onClick={()=> setTab(1)} src={img2} />)  
            } 
        </div>
        <div> {
            tab == 2 ? (<img className="hover:cursor-pointer" onClick={()=> setTab(2)} src={img7} />) : (<img className="hover:cursor-pointer" onClick={()=> setTab(2)} src={img8} />)  
            } 
        </div>
        <div> {
            tab == 3 ? (<img className="hover:cursor-pointer" onClick={()=> setTab(3)} src={img9} />) : (<img className="hover:cursor-pointer" onClick={()=> setTab(3)} src={img10} />)  
            } 
        </div>
        <div> {
            tab == 4 ? (<img className="hover:cursor-pointer" onClick={()=> setTab(4)} src={img5} />) : (<img className="hover:cursor-pointer" onClick={()=> setTab(4)} src={img6} />)  
            } 
        </div>
        <div> {
            tab == 5 ? (<img className="hover:cursor-pointer" onClick={()=> setTab(5)} src={img3} />) : (<img className="hover:cursor-pointer" onClick={()=> setTab(5)} src={img4} />)  
            } 
        </div>
        
        <div> {
            tab == 6 ? (<img className="hover:cursor-pointer" onClick={()=> setTab(6)} src={img11} />) : (<img className="hover:cursor-pointer" onClick={()=> setTab(6)} src={img12} />)  
            } 
        </div>
    </div>
  )
}

export default Leftnav