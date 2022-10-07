// import react from 'react'
import icon4 from '../../assets/icon4.png'
import icon12 from '../../assets/icon12.png'
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
// import './style.css'

const CardforP = (props) => {
	return(
		<div className="h-full w-full rounded-2xl bg-red overflow-y-auto relative flex items-center justify-center flex-col">
			
			<div className="bg-gradient-to-b from-orange-600  to-orange-300 w-11/12 h-full mb-2 mt-8 overflow-y-auto rounded-xl z-50">	
				<div className='grid md:grid-cols-2 p-5 gap-4 w-full h-full'>
						<Attack img={icon12} border="border-dashed" color="bg-[#c16326]" data="No Fox" />
						<Attack img={icon13} color="bg-[#552e00]" name="Mystic" />
						<Attack img={icon14} color="bg-[#552e00]" name="Commoner" />
						<Attack img={icon12} color="bg-[#552e00]" name="Mystic" />
						<Attack img={icon13} color="bg-[#552e00]" name="Mystic" />
						<Attack img={icon14} color="bg-[#552e00]" name="Commoner" />
						<Attack img={icon12} color="bg-[#552e00]" name="Commoner" />
						<Attack img={icon13} color="bg-[#552e00]" name="Mystic" />
						<Attack img={icon14} color="bg-[#552e00]" name="Mystic" />
						<Attack img={icon13} color="bg-[#552e00]" name="Commoner" />
						<Attack img={icon13} color="bg-[#552e00]" name="Mystic" />
						<Attack img={icon14} color="bg-[#552e00]" name="Mystic" />
						<Attack img={icon12} color="bg-[#552e00]" name="Mystic" />
						<Attack img={icon13} color="bg-[#552e00]" name="Commoner" />
						<Attack img={icon14} color="bg-[#552e00]" name="Mystic" />
						<Attack img={icon13} color="bg-[#552e00]" name="Mystic" />
				</div>
			</div>
		</div>
	);
}

export default CardforP;