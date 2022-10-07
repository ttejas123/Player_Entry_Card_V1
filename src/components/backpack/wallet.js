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
import img15 from '../../assets/15.png'
import img16 from '../../assets/16.png'
// /expenses 
import { useNavigate } from "react-router-dom";
import Attack from './attack.js'
import { useState } from 'react'
// import './style.css'

const CardforP = (props) => {
	const [tab, setTab] = useState(1);
	return(
		<div className="h-full w-full rounded-2xl overflow-y-auto relative flex items-center justify-center flex-col">
			
			<div className={`mt-6 hover:opacity-80 cursor-pointer font-extrabold text-xl md:text-xl lg:text-2xl xl:text-xl text-center text-white z-50 right-[53%] outline-title flex`}><img src={img15} className="mr-5 w-[34px] h-[27px] " />Wallet</div>
			<div className="bg-gradient-to-b from-orange-600 mt-[5%] to-orange-300 w-11/12 h-full mb-3  overflow-y-auto rounded-xl z-50">	
				<div className='grid md:grid-cols-3 lg:grid-cols-4 p-5 gap-4 w-full h-full'>
						<Attack img={icon4} border="border-solid" color="bg-[#c16326]" data=" " />
						<Attack img={icon4} border="border-solid" color="bg-[#c16326]" data=" " />
						<Attack img={icon4} border="border-solid" color="bg-[#c16326]" data=" " />
						<Attack img={icon4} border="border-solid" color="bg-[#c16326]" data=" " />
						<Attack img={png13} border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
						<Attack border="border-dashed" color="bg-[#c16326]" data=" " />
				</div>
			</div>
            <div className='w-full flex justify-center items-center'>
                <img src={img16} className="w-[20%] mb-3 hover:cursor-pointer" />
            </div>
		</div>
	);
}

export default CardforP;