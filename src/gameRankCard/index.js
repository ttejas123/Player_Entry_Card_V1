// import react from 'react'
import './style.css'
import img1 from '../assets/left.png'
import PlayerCard from './playerCard'
import Dropdown from './dropdown.js'
import Cardtask from './cardTask.js' 
import img from '../assets/7.png'
import hourglass from '../assets/Hourglass.png'

const playerCard = (props) => {
	return(
		<div className="bg-gradient-to-b from-orange-600 to-orange-400 absolute top-14 h-3/4 w-11/12 rounded-2xl p-5 mx-5 overflow-y-auto">
			<div className='flex justify-between'>
				<div>
					<button class="rounded-md  p-1 px-5 text-sm text-black bg-white font-bold shadow-pill_shadow">All</button>
					<button class="rounded-md ml-3 p-1 px-4 text-sm text-white font-bold   bg-yellow-500 shadow-pill_shadow">In Progress</button>
					<button class="rounded-md ml-3  p-1 px-4 text-sm text-white font-bold  bg-green-800 shadow-pill_shadow">Completed</button>
				</div>
				<div>
					<Dropdown />
				</div>
			</div>
			<div className="mt-2 grid grid-cols-4 gap-4">
				<Cardtask img={img} hourglass={hourglass} status="Completed" time="05 : 36 : 60"/>
				<Cardtask img={img} hourglass={hourglass} status="Completed" time="05 : 36 : 60"/>
				<Cardtask img={img} hourglass={hourglass} status="Completed" time="05 : 36 : 60"/>
				<Cardtask img={img} hourglass={hourglass} status="Completed" time="05 : 36 : 60"/>
				<Cardtask img={img} hourglass={hourglass} status="Completed" time="05 : 36 : 60"/>
				<Cardtask img={img} hourglass={hourglass} status="Completed" time="05 : 36 : 60"/>
			</div>
		</div>
	);
}

export default playerCard;