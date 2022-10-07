import './style.css'
import icon15 from '../../assets/icon15.png'
import icon16 from '../../assets/icon16.png'
import icon17 from '../../assets/icon17.png'
import icon18 from '../../assets/icon18.png'
const Cardwith = (props) => {
	return(
		<div className="flex px-[3%] rounded-xl bg-black w-full h-full">
			<img src={props.img} className="w-[40%] md:w-[40%] xl:w-[45%]" />
			<div className="h-full w-full bg-red p-2 justify-center flex flex-col">
				<div className="flex items-center justify-center"><div className="text-white basis-4/6 h-[90%] xl:h-7 justify-center font-bold bg-[#2c2c2c] rounded-md font-sans flex items-center text-[12px] xl:text-sm "> 1 item A</div> <div className="text-yellow-300 ml-2 font-extrabold">5%</div></div>
				<div className="flex items-center justify-center py-3 xl:py-6"><div className="text-white basis-4/6 h-[90%] xl:h-7 justify-center font-bold bg-[#2c2c2c] rounded-md font-sans flex items-center text-[12px] xl:text-sm "> 2-3 item A</div> <div className="text-yellow-300 ml-2 font-extrabold">50%</div></div>
				<div className="flex items-center justify-center"><div className="text-white basis-4/6 h-[90%] xl:h-7 justify-center font-bold bg-[#2c2c2c] rounded-md font-sans flex items-center text-[12px] xl:text-sm "> 2-3 item A</div> <div className="text-yellow-300 ml-2 font-extrabold">45%</div></div>
			</div>
		</div>
	);
}

export default Cardwith;