import './questBord.css';
import GameRankCard from '../components/QuestInProgress'

import img from '../assets/icon12.png'
import cross from '../assets/cross.png'
import resetFox from '../assets/resetfox5.png'

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const para = [
    "The goblins have been repelled!", 
    "Everything is right with the world!",
    "Thank you so much!"
  ]
  return (
    <div className="appBG flex justify-center items-center flex-col h-screen relative">
      <img src={cross} onClick={() => navigate('/goblin_attack')} className='absolute w-12 right-[19.5%]  top-[7%] z-10 hover:opacity-80 cursor-pointer'/>
      <div className="w-7/12 h-4/5 bg-d1 rounded-2xl relative flex justify-center items-center">
        <div className="bg-red w-11/12 h-[90%]"><GameRankCard className="pt-5" img={img} title="Goblin  Attack  On The  South  Village" legd="SUCCESS" para={para} last_text="Claim  Rewards" color="text-lime-400" border="border-lime-400" bg="bg-lime-100" /></div>
      </div>
    </div>
  );
}

export default App;
