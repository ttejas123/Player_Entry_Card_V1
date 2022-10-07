// import react from 'react'
import './style.css'
import img1 from '../../assets/left.png'
import PlayerCard from './playerCard'
import Dropdown from './dropdown.js'
import Cardtask from './cardTask.js' 
import img from '../../assets/7.png'
import hourglass from '../../assets/Hourglass.png'
// /expenses 
import { useNavigate } from "react-router-dom";

const CardforP = (props) => {
	const navigate = useNavigate();
	const arr = [1, 1, 1, 1, 1, 1]
	return(
		<div className="bg-gradient-to-b from-orange-600 to-orange-400 absolute top-14 h-3/4 w-11/12 rounded-2xl p-5 mx-5 overflow-y-auto">
			<div className='flex justify-between'>
				<div>
					<button class="rounded-md  p-1 px-5 text-sm 2xl:text-2xl text-black bg-white font-bold shadow-pill_shadow">All</button>
					<button class="rounded-md ml-3 p-1 px-4 text-sm 2xl:text-2xl text-white font-bold   bg-yellow-500 shadow-pill_shadow">In Progress</button>
					<button class="rounded-md ml-0 md:ml-3 mt-1 md:mt-0  p-1 px-4 text-sm 2xl:text-2xl text-white font-bold  bg-green-800 shadow-pill_shadow">Completed</button>
				</div>
				<div>
					<Dropdown />
				</div>
			</div>
			<div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
				{
					arr.map((val, index) => {
						return (
							<div onClick={() => navigate('/goblin_attack')} key = {index} className="cursor-pointer">
								<Cardtask img={img} hourglass={hourglass} status="Completed" time="05 : 36 : 60"/>
							</div>
						)
					})
				}
			</div>
		</div>
	);
}

export default CardforP;