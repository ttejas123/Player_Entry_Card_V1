// compoents
import QuestBoard from './pages/questBord.js'
import GoblinAttack from './pages/GoblinAttack.js'
import Backpack from './components/backpack'
import Wallet from './components/backpack/wallet'
import Leftnav from './components/backpack/leftnav.js'
import Navtop from './components/backpack/navtop.js'
import Questsucess from './pages/QuestSucess.js'
import QuestGreatsucess from './pages/QuestGreatSucess.js'
import QuestFailure from './pages/QuestFailure.js'
import QuestProgress from './pages/QuestInProgress.js'
import Item from './components/backpack/item.js'
import React, {useState} from 'react'
// routing
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// minimum css
import './App.css'
import cross from './assets/cross.png'
import img from './assets/icon12.png'
import img18 from './assets/14.png'

function FoxTo({setItemC}){
  return(<div className='flex justify-center items-center flex-col w-full h-full relative'>
          <div className={`absolute z-20 w-12 hover:opacity-80 cursor-pointer font-extrabold text-xl md:text-xl lg:text-2xl xl:text-3xl text-white top-[-5%] right-[53%] outline-title flex`}><img src={img18} className="mr-5 w-[40px]" />BagPack</div>
          <img src={cross} className={`absolute w-12 hover:opacity-80 cursor-pointer z-20 top-[-3%] xl:right-[-2%] `}/>
          <div className={`w-full h-full bg-[#000000] rounded-2xl flex justify-center absolute z-10 `}>
            <Backpack setItemC={setItemC}  img={img} title="Goblin  Attack  On The  South  Village" legd="SUCCESS" last_text="Claim  Rewards" color="text-lime-400" border="border-lime-400" bg="bg-lime-100" />
          </div>
        </div>)
}

function WalletCon(){
  return(<div className='flex justify-center items-center flex-col w-full h-full relative'>
          
          <img src={cross} className={`absolute z-20 w-12 hover:opacity-80 cursor-pointer top-[-3%] xl:right-[-2%] `}/>
          <div className={`w-full h-full bg-[#000000] rounded-2xl flex justify-center absolute z-10 `}>
            <Wallet  img={img} title="Goblin  Attack  On The  South  Village" legd="SUCCESS" last_text="Claim  Rewards" color="text-lime-400" border="border-lime-400" bg="bg-lime-100" />
          </div>
        </div>)
}

function Mainfuc(){
  const [itemC, setItemC] = useState(false);
  const [interchange, setInterChange] = useState(false);
  return(<div className='appBG w-full h-[100vh] flex flex-col items-center justify-center'>
      <div className={`${itemC == false ? "hidden" :  "block"}`}><Item setItemC={setItemC} /></div>
      <div className='top w-full h-[20%]'>
        <Navtop setInterChange={setInterChange} interchange={interchange} />
      </div>
      <div className='flex w-[90%] h-[75%] justify-between '>
        <div className='w-[6%] h-[95%] bg-[#101011] rounded-xl'><Leftnav /></div>
        {
          interchange ? (
            <>
              <div className='main-body w-[45%] h-[85%] '><WalletCon setItemC={setItemC} /></div>
              <div className='main-body w-[45%] h-[97%] '><FoxTo setItemC={setItemC} /></div>
            </>
          ) : (
            <>
              <div className='main-body w-[45%] h-[97%] '><FoxTo setItemC={setItemC} /></div>
              <div className='main-body w-[45%] h-[85%] '><WalletCon setItemC={setItemC} /></div>
            </>
          )
        }
      </div>
  </div>)
}

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestBoard />} />
        <Route exact path="/goblin_attack" element={<GoblinAttack />} />
        <Route exact path="/quest_sucess" element={<Questsucess />} />
        <Route exact path="/quest_greatesucess" element={<QuestGreatsucess />} />
        <Route exact path="/quest_failure" element={<QuestFailure />} />
        <Route exact path="/quest_inprogress" element={<QuestProgress />} />
        <Route exact path="/bagpack" element={<Mainfuc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
