// import react from 'react'
import icon15 from '../../assets/icon15.png'
import icon16 from '../../assets/icon16.png'
import icon17 from '../../assets/icon17.png'
import icon18 from '../../assets/icon18.png'
import completenow from '../../assets/completenow.png'
import Abandonquest from '../../assets/Abandonquest.png'
import hourglass from '../../assets/Hourglass.png'
// /expenses 
import { useNavigate } from "react-router-dom";
// import './style.css'

const CardforP = (props) => {
	return(
		<div className="h-full w-full rounded-2xl bg-red overflow-y-auto relative flex-col relative">
			<div className="text-white font-extrabold text-3xl mt-1 mb-12 text-center">{props.title}</div> 
			
			<div className="flex">
				<div className={`rounded-xl flex justify-center w-[50%] items-center flex-col p-2 pr-4 mt-2 mb-1 bg-[#303030] w-[45%]`}>
				    <div className="flex mt-1 justify-between items-center w-full">
						<img src={icon15} className="h-auto w-[18%]" />
						<div className=" ml-2 text-white basis-5/6 h-7 justify-center font-bold bg-[#696969] rounded-md font-sans flex items-center text-sm">75%</div>
					</div>
					<div className="flex mt-1 justify-between items-center w-full">
						<img src={icon16} className="h-auto w-[18%]" />
						<div className=" ml-2 text-white basis-5/6 h-7 justify-center font-bold bg-[#696969] rounded-md font-sans flex items-center text-sm">5%</div>
					</div>
					<div className="flex mt-1 justify-between items-center w-full">
						<img src={icon17} className="h-auto w-[18%]" />
						<div className=" ml-2 text-white basis-5/6 h-7 justify-center font-bold bg-[#696969] rounded-md font-sans flex items-center text-sm">20%</div>
					</div>
	 			</div>

	 			<div className="flex justify-center items-center flex-col w-[50%] bg-red">
	 				<img src={icon18} className="w-[25%] mb-4" />
	 				<div className='flex items-center justify-center'>
			            
			            <div className='time-by-hour-to-sec flex justify-center items-center'>
			              <div className='text-white style-sm-font text-2xl bg-[#696969] px-3 py-2 rounded-lg'>05</div>
			              <div className='text-white style-sm-font text-2xl mx-1'>:</div>
			              <div className='text-white style-sm-font text-2xl bg-[#696969] px-3 py-2 rounded-lg'>05</div>
			              <div className='text-white style-sm-font text-2xl mx-1'>:</div>
			              <div className='text-white style-sm-font text-2xl bg-[#696969] px-3 py-2 rounded-lg'>05</div>
			            </div>
			        </div>
	 			</div>
	 		</div>
	 		<div className='flex justify-between bottom-[3%] absolute w-full'>
 				<img src={completenow} className='w-[50%]' />
 				<img src={Abandonquest} className='w-[43%] h-[14%] mt-4' />
			</div>
		</div>
	);
}

export default CardforP;