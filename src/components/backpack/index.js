// import react from 'react'
import icon4 from '../../assets/icon4.png'
import png13 from '../../assets/13.png'
import icon13 from '../../assets/icon13.png'
import icon14 from '../../assets/icon14.png'
import hourglass from '../../assets/Hourglass.png'
import im1 from '../../assets/1.png'
import im2 from '../../assets/2.png'
import im3 from '../../assets/3.png'
import im4 from '../../assets/4.png'
import im5 from '../../assets/5.png'
import im6 from '../../assets/6.png'
// /expenses 
import { useNavigate } from "react-router-dom";
import Attack from './attack.js'
import { useState } from 'react'
// import './style.css'

const CardforP = (props) => {
	const [tab, setTab] = useState(1);
	return(
		<div className="h-full w-full rounded-2xl overflow-y-auto relative flex items-center justify-center flex-col">
			<div className='flex hidden md:block overflow-x-scroll'>
				<div onClick={()=> {setTab(1)}} className={`${tab == 1 ? "bg-orange-600" : "bg-[#552e00]" } cursor-pointer border-2 border-black absolute md:top-[5%] lg:top-[8%] z-40 left-[6%] flex justify-center rounded-t-xl h-[10.5%] w-[16%] items-center`}><div className="  font-extrabold text-white outlines-title1">All</div></div>
				<div onClick={()=> {setTab(2)}} className={`${tab == 2 ? "bg-orange-600" : "bg-[#552e00]" } cursor-pointer border-2 border-black absolute md:top-[5%] lg:top-[8%] z-30 left-[18%] flex justify-center rounded-t-xl h-[10.5%] w-[16%] items-center`}><div className="  font-extrabold text-white outlines-title1">EYE</div></div>
				<div onClick={()=> {setTab(3)}} className={`${tab == 3 ? "bg-orange-600" : "bg-[#552e00]" } cursor-pointer border-2 border-black absolute md:top-[5%] lg:top-[8%] z-20 left-[33%] flex justify-center rounded-t-xl h-[10.5%] w-[31%] items-center`}><div className="  font-extrabold text-white outlines-title1">Face Accessories</div></div>
				<div onClick={()=> {setTab(4)}} className={`${tab == 4 ? "bg-orange-600" : "bg-[#552e00]" } cursor-pointer border-2 border-black absolute md:top-[5%] lg:top-[8%] z-10 left-[61%] flex justify-center rounded-t-xl h-[10.5%] w-[16%] items-center`}><div className="  font-extrabold text-white outlines-title1">HAT</div></div>
				<div onClick={()=> {setTab(5)}} className={`${tab == 5 ? "bg-orange-600" : "bg-[#552e00]" } cursor-pointer border-2 border-black absolute md:top-[5%] lg:top-[8%] left-[75%] flex justify-center rounded-t-xl h-[10.5%] w-[20%] items-center`}><div className="  font-extrabold text-white outlines-title1">APPAREL</div></div>
			</div>
			
			<div className="bg-gradient-to-b from-orange-600 mt-[14%] to-orange-300 w-11/12 h-full mb-3  overflow-y-auto rounded-xl z-50">	
				<div className='grid md:grid-cols-3 lg:grid-cols-4 p-5 gap-4 w-full h-full'>
						<Attack count={1} img={icon4} border="border-solid" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={2} img={icon4} border="border-solid" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={1} img={icon4} border="border-solid" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={1} img={icon4} border="border-solid" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={4} img={png13} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
						<Attack count={0} border="border-dashed" color="bg-[#c16326]" data=" " setItemC={props.setItemC} />
				</div>
			</div>
		</div>
	);
}

export default CardforP;