// import './questBord.css';
import GameRankCard from '../components/GoblinAttack'

// cards after click
import Items from '../components/Foxesanditems'
import Foxs from '../components/Fox'
import Rewards from '../components/rewards'

import img1 from '../assets/7.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img from '../assets/icon12.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'

import cross from '../assets/cross.png'
import resetFox from '../assets/resetfox5.png'
import { useNavigate } from "react-router-dom";
import react, {useState} from 'react'

function App() {
  const para = [
    "The goblins have been repelled!", 
    "Everything is right with the world!",
    "Thank you so much!"
  ]
  const navigate = useNavigate();
  const [visible1, setvisible] = useState(false)
  const [Fox, setFox] = useState(false)
  const [Reward, setReward] = useState(false)

  return (
    <div className="appBG flex justify-center items-center flex-col py-5 h-screen relative">
      
      <div className={`w-full h-screen bg-black opacity-50 z-30 absolute ${visible1 ? "" : "hidden"} `}></div>
      <div className={`w-full h-screen bg-black opacity-50 z-30 absolute  ${Fox ? "" : "hidden"}`}></div>
      <div className={`w-full h-screen bg-black opacity-50 z-30 absolute  ${Reward ? "" : "hidden"}`}></div>
      <img src={cross} onClick={() => navigate('/')} className='absolute z-10 w-12 right-0 top-5 md:right-3 lg:right-5 xl:right-10 hover:opacity-80 cursor-pointer'/>
      
      {/* main game card */}
      <div className="w-11/12 h-full rounded-2xl relative flex justify-center my-5 py-5">
        <GameRankCard src={img1} setvisible={setvisible} visible1={visible1} Fox={Fox} setFox={setFox} Reward={Reward} setReward={setReward} />
      </div>
      
      {/* items */}
      <div className={`absolute z-10 w-12 hover:opacity-80 cursor-pointer font-extrabold text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white z-50 top-[17%] md:top-[5.5%] right-[50%] outline-title ${visible1 ? "" : "hidden"}`}>Items</div>
      <img onClick={() => setvisible(!visible1)} src={cross} className={`absolute z-10 w-12 hover:opacity-80 cursor-pointer z-50 top-[15%] md:top-[6.5%] right-[0%] md:right-[5%] lg:right-[11%] xl:right-[15%] ${visible1 ? "" : "hidden"}`}/>
      <div className={`w-11/12 h-3/5 md:w-10/12 md:h-4/5 lg:w-9/12 lg:h-4/5 xl:w-8/12 xl:h-4/5 bg-[#000000] rounded-2xl flex justify-center absolute top-[20%] md:top-[10%] z-40 ${visible1 ? "" : "hidden"}`}>
        <Items className="pt-5" img={img} title="Goblin  Attack  On The  South  Village" legd="SUCCESS" para={para} last_text="Claim  Rewards" color="text-lime-400" border="border-lime-400" bg="bg-lime-100" />
      </div>

      {/* foxs */}
      <div className={`absolute z-10 w-12 hover:opacity-80 cursor-pointer font-extrabold text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white z-50 top-[17%] md:top-[5.5%] right-[50%] outline-title ${Fox ? "" : "hidden"}`}>Foxes</div>
      <img onClick={() => setFox(!Fox)} src={cross} className={`absolute z-10 w-12 hover:opacity-80 cursor-pointer z-50 top-[15%] md:top-[6.5%] right-[0%] md:right-[5%] lg:right-[11%] xl:right-[15%] ${Fox ? "" : "hidden"}`}/>
      <div className={`w-11/12 h-3/5 md:w-10/12 md:h-4/5 lg:w-9/12 lg:h-4/5 xl:w-8/12 xl:h-4/5 bg-[#000000] rounded-2xl flex justify-center absolute top-[20%] md:top-[10%] z-40 ${Fox ? "" : "hidden"}`}>
        <Foxs className="pt-5" img={img} title="Goblin  Attack  On The  South  Village" legd="SUCCESS" para={para} last_text="Claim  Rewards" color="text-lime-400" border="border-lime-400" bg="bg-lime-100" />
      </div>

      {/* Rewards */}
      <div className={`absolute z-10 w-12 hover:opacity-80 cursor-pointer font-extrabold text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white z-50 top-[17%] md:top-[5.5%] right-[50%] outline-title ${Reward ? "" : "hidden"}`}>Rewards</div>
      <img onClick={() => setReward(!Reward)} src={cross} className={`absolute z-10 w-12 hover:opacity-80 cursor-pointer z-50 top-[15%] md:top-[6.5%] right-[0%] md:right-[5%] lg:right-[11%] xl:right-[15%] ${Reward ? "" : "hidden"}`}/>
      <div className={`w-11/12 h-3/5 md:w-10/12 md:h-4/5 lg:w-9/12 lg:h-4/5 xl:w-8/12 xl:h-4/5 bg-[#000000] rounded-2xl flex justify-center absolute top-[20%] md:top-[10%] z-40 ${Reward ? "" : "hidden"}`}>
        <Rewards className="pt-5" img={img} title="Goblin  Attack  On The  South  Village" legd="SUCCESS" para={para} last_text="Claim  Rewards" color="text-lime-400" border="border-lime-400" bg="bg-lime-100" />
      </div>

    </div>
  );
}

export default App;
