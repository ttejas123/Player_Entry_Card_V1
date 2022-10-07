import './questBord.css';
import GameRankCard from '../components/QuestBord'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'

import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'

import cross from '../assets/cross.png'
import resetFox from '../assets/resetfox5.png'

function App() {
  return (
    <div className="appBG flex justify-center items-center flex-col py-5 h-screen">
      <div className="outline-title absolute top-0 md:top-1 xl:top-3 2xl:top-2 z-10 text-white text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-bold">Quest Board</div>
      <div className="w-11/12 h-full bg-neutral-900 rounded-2xl relative flex justify-center px-5 md:my-1 lg:my-1 xl:my-5 ">
        <img src={cross} className='absolute w-10 right-2 top-2 hover:opacity-80 cursor-pointer'/>
        <GameRankCard className="pt-5" src={img1} />
        
        <div className="bg-neutral-900 absolute w-full rounded-b-xl md:h-[18%]  bottom-0 md:flex justify-between items-center px-[4%] py-2 md:py-0">
          <div className='flex items-center justify-center md:justify-start items-center'>
            <h1 className="style-sm-font text-xl md:text-3xl xl:text-4xl 2xl:text-7xl text-white bg-red">Time until reset</h1>
            <div className='time-by-hour-to-sec flex justify-center items-center ml-1 md:ml-5'>
              <div className='text-white style-sm-font text-sm md:text-xl xl:text-2xl 2xl:text-6xl bg-neutral-600 px-2 py-2 md:px-3 py-2 rounded-lg'>05</div>
              <div className='text-white style-sm-font text-sm md:text-xl xl:text-2xl 2xl:text-6xl mx-1'>:</div>
              <div className='text-white style-sm-font text-sm md:text-xl xl:text-2xl 2xl:text-6xl bg-neutral-600 px-2 py-2 md:px-3 py-2 rounded-lg'>05</div>
              <div className='text-white style-sm-font text-sm md:text-xl xl:text-2xl 2xl:text-6xl mx-1'>:</div>
              <div className='text-white style-sm-font text-sm md:text-xl xl:text-2xl 2xl:text-6xl bg-neutral-600 px-2 py-2 md:px-3 py-2 rounded-lg'>05</div>
            </div>
          </div>
          <div className=' bg-red flex justify-center md:justify-end md:items-center  h-[10%] w-full md:w-[26%] md:h-[99%] lg:w-[21%] lg:h-[99%]  2xl:w-[24%] 2xl:h-[100%]'>
            <img src={resetFox} className='w-[50%] md:w-full h-full'/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
