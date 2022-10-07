import './style.css'
import icon15 from '../../assets/icon15.png'
import icon16 from '../../assets/icon16.png'
import icon17 from '../../assets/icon17.png'
import icon18 from '../../assets/icon18.png'
import { useState } from 'react'
const Cardwith = (props) => {
	const [select, setSelect] = useState(false);
	return(
		<div onClick={()=> {
				setSelect(!select)
				if(props.count > 1){
					console.log("Hello There Item UI")
					props.setItemC(true);
				}
			}
		} className="flex flex-col">
		<div className={`${props.color} cursor-pointer rounded-2xl border-[2px] ${props.border} ${select ? ("border-[#00FF1B]") : ("border-black")} flex items-center justify-center h-[6rem] relative`}>
			
			{props.img ? (<>
					<div style={props.data ? {display: 'none'} : {display: 'block'}} className={`absolute top-0 ${props.name == "Mystic" ? ("bg-black") : ("bg-white")} rounded-tl-xl rounded-br-xl px-1 ${props.name == "Mystic" ? ("text-white") : ("text-black")} text-sm font-bold left-0 pr-2`}>{props.name} </div>
					<img src={props.img} className='rounded-xl h-[60%] w-[60%]' />
				</>) : (<div className="font-extrabold text-white outlines-title1 md:text-xl lg:text-xl xl:text-2xl">{props.data}</div>)
				
			}

		</div> 

		</div>
	);
}

export default Cardwith;