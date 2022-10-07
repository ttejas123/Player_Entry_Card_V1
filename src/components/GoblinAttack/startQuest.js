import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import icon7 from '../../assets/icon7.png'
import icon8 from '../../assets/icon8.png'
import icon9 from '../../assets/icon9.png'
// import img11 from '../../assets/11.png'

const PlayerCard = (props) => {
	return(
		<div className="flex rounded-2xl justify-center flex-col items-center bg-black p-2">
			
			<div className="p-1  w-full">
				<div className="flex mt-1 justify-between items-center w-full">
					<img src={icon5} className="h-auto w-2/12" />
					<div className=" ml-2 text-white basis-5/6 h-7 justify-center font-bold bg-stone-800 rounded-xl font-sans flex items-center text-sm">75%</div>
				</div>
				<div className="flex mt-1 justify-between items-center w-full">
					<img src={icon7} className="h-auto w-2/12" />
					<div className=" ml-2 text-white basis-5/6 h-7 justify-center font-bold bg-stone-800 rounded-xl font-sans flex items-center text-sm">5%</div>
				</div>
				<div className="flex mt-1 justify-between items-center w-full">
					<img src={icon6} className="h-auto w-2/12" />
					<div className=" ml-2 text-white basis-5/6 h-7 justify-center font-bold bg-stone-800 rounded-xl font-sans flex items-center text-sm">20%</div>
				</div>
				<div className="flex mt-1 justify-between items-center w-full">
					<img src={icon8} className="h-auto w-2/12" />
					<div className=" ml-2 text-white basis-5/6 h-7 justify-center font-bold bg-stone-800 rounded-xl font-sans flex items-center text-sm">30m</div>
				</div>
			</div>
			<img src={icon9} className='h-auto w-9/12 cursor-pointer' onClick={()=> props.setReward(!props.Reward)} />
		</div>
	);
}

export default PlayerCard;