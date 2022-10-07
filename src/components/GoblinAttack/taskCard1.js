const Cardwith = (props) => {
	return(
		<div onClick={() => props.setFox(!props.Fox)} className="bg-orange-900 rounded-xl border-2 border-black flex cursor-pointer items-center justify-center w-[100%] md:w-[95%] xl:w-[85%] relative">
			<div style={props.visibility ? {display: 'block'} : {display: 'none'}} className='absolute top-0 bg-white rounded-tl-xl rounded-br-xl px-1 text-black text-sm font-bold left-0 '>{props.name} </div>
			<img src={props.img} className='w-full rounded-xl' />
		</div>
	);
}

export default Cardwith;