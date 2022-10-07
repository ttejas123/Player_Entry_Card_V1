// import Star from '../../assets/Star1.png'
import StarE from '../../assets/Star2.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon10 from '../../assets/icon10.png'
import react, {useState} from 'react'
const Cardwith = (props) => {
	const [check, setCheck] = useState(false)
	return(
		<div className="bg-green rounded-2xl flex items-center justify-center relative md:p-4 pb-3 lg:pb-0 pt-6">
			<img src={props.stickerImg} className="absolute  top-[5%] left-[16.5%] lg:left-[2%] xl:top-1 xl:left-1 z-20" />
			<div className='relative'>
				<div className="absolute top-0 z-10">
					<div className="bg-white h-6 pl-8 pr-2 rounded-br-md font-extrabold">{props.menu_title}</div>
				</div>
				<div className={`absolute z-10 flex justify-center items-center top-12 left-10 ${check ? '' : 'hidden'}`}>
					<img src={props.stickerImg} />
					<div className={`text-white font-extrabold p-1 px-5 rounded-md ${ props.color }`}>+{props.getwin}%</div>
				</div>
				<div className='rounded-2xl relative' onClick={() => setCheck(!check)} >
					<div className={`absolute h-full w-full rounded-xl text-white flex justify-center items-center ${check ? 'bg-black opacity-50' : 'hidden'}`} ></div>
					<img src={props.img} className='rounded-xl w-full' />
				</div>
				<div className='flex justify-between lg:px-0 pt-1 xl:px-4 xl:py-2'>
					<div className='relative md:w-[23%] xl:w-12'>
						<img src={icon10} className="md:w-3 xl:w-4 absolute bottom-0 right-0 z-10" />
						<div className="bg-orange-900 rounded-md border-2 border-lime-500 flex-col  items-center justify-center relative md:w-11 md:h-11 lg:w-9 lg:h-9 xl:w-11 xl:h-11 ">
							
							<img src={icon1} className='rounded-xl' />
						</div>
					</div>
					<div className="bg-orange-900 rounded-md border-2 border-black flex-col  items-center justify-center md:w-11 md:h-11 lg:w-9 lg:h-9 xl:w-11 xl:h-11 ">
						<img src={icon1} className='rounded-xl'  />
					</div>
					<div className="bg-orange-700 rounded-md border-2 border-black border-dashed flex-col w-11 h-11 lg:w-9 lg:h-9 xl:w-11 xl:h-11  items-center justify-center">
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cardwith;