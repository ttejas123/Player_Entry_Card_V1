import Star from '../assets/Star1.png'
import StarE from '../assets/Star2.png'
const Cardwith = (props) => {
	return(
		<div className="bg-neutral-900 rounded-2xl py-3 px-1 flex items-center flex-col">
			<div className='text-white px-4 font-bold'>Goblin Attack On The South Village</div>
			<img src={props.img} className='my-4' />
			<div className='w-full px-4 flex justify-between mt-3'>
				<button class="rounded-md px-3 py-1 text-sm text-white font-bold  bg-green-700 shadow-pill_shadow">Completed</button>
				<button className='flex items-center rounded-md px-2 py-1 text-sm text-white font-bold bg-gray-700 shadow-pill_shadow'>
					<img src={props.hourglass} />
					<div className="text-white pl-1">{props.time}</div>
				</button>
			</div>
			<div className="star_collection mt-5 flex">
				<img src={Star} />
				<img src={StarE} className='ml-1' />
				<img src={StarE} className='ml-1' />
				<img src={StarE} className='ml-1' />
				<img src={StarE} className='ml-1' />
			</div>
		</div>
	);
}

export default Cardwith;