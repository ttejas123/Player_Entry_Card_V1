import './questBord.css';
import GameRankCard from '../components/QuestEnd'

import img from '../assets/icon14.png'
import cross from '../assets/cross.png'
import resetFox from '../assets/resetfox5.png'

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const para = [
    "Wow, every single goblin was slain", 
    "and not a single casualty was reported!",
    "This couldn’t have gone any better!", 
    // "Everything is right with the world!",
    // "Thank you so much!"
  ]
  return (
    <div className="appBG flex justify-center items-center flex-col h-screen relative">
      <img src={cross} onClick={() => navigate('/goblin_attack')} className='absolute w-12 right-0 top-[16.5%] md:right-[18.5%] lg:right-[23.5%] md:top-[6.5%] z-10 hover:opacity-80 cursor-pointer'/>
      <div className="w-11/12 h-3/5 md:w-7/12 md:h-4/5 lg:w-6/12 lg:h-4/5 bg-d1 rounded-2xl relative flex justify-center">
        <GameRankCard className="pt-5" img={img} title="Goblin  Attack  On The  South  Village" legd="GREAT  SUCCESS" para={para} last_text="Claim  Rewards" color="text-yellow-500" border="border-yellow-400" bg="bg-yellow-100" />
      </div>
    </div>
  );
}

export default App;
