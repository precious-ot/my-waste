import React, { useState } from "react";
import image6 from './Assets/image6.jpg';
import image20 from './Assets/image20.jpg';
import myImage4 from './Assets/myImage4.jpg';
function Yards({number, url, price, altText}){
    const initialCount = 1
    const [skip, setSkip] = useState(false);
    const [count, setCount] = useState(initialCount);

    const skipClick = () => {
        setSkip(true);
    }

    const skipRemove = () => {
        setSkip(false);
    }
    return(
      <div className="static">
        <div onClick={skipClick} className="p-1 rounded-xl text-white max-w-lg hover:bg-blue-800 htransition duration-300 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
            <div>
                <img className="rounded-xl" src={url} alt={altText}/>
            </div>
            <div className="flex justify-between p-4">
                <div>
                   <p className="font-semibold text-xl">{number} Yards Skip</p>
                   <p className="text-sm text-neutral-400">14 days hire period</p>
                </div>
                <div className="font-semibold text-xl">&euro;{price}</div>
            </div>
            </div>
            {skip && (
                <div className="fixed sm:py-8 px-6 px-10 w-[100%] top-0 bg-black h-full sm:w-70 right-0">
                   <button className="text-white font-medium flex place-items-center" onClick={skipRemove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                   <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                 <span>Close</span>
                    </button> 
                <h1 className="mt-10 text-white font-bold text-2xl">You Selected</h1>
                <img className="rounded-xl mt-8 h-50" src={url} />
                <div className="mt-8">
                    <p className="font-semibold text-xl text-white">{number} Yards Skip</p>
                   <p className="mt-1 text-sm text-neutral-400">14 days hire period</p>
                   <div className="mt-6 font-semibold text-xl text-white">{price}&euro;</div>
                </div>
                <div className="flex mt-3 gap-3 border w-30 place-content-center text-white">
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button>{count}</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                </div>
                <div className="mt-8 grid">
                    <button className="text-white bg-blue-800 py-4 rounded-xl">CONTINUE</button>
                </div>
                </div>
            )}
        </div>
    );
}
export default function High(){
    return(
        <div className="relative grid gap-5 lg:grid-cols-3 md:grid-cols-2 py-10 sm:py-10 sm:px-10">
            <Yards url={image20} number={20} price={992}/>
            <Yards url={image20} number={40} price={992}/>
            <Yards url={image6} number={16} price={496}/>
            <Yards url={image6} number={14} price={470}/>
            <Yards url={image6} number={12} price={439}/>
            <Yards url={image6} number={10} price={400}/>
            <Yards url={image6} number={8} price={375}/>
            <Yards url={image6} number={6} price={305}/>
            <Yards url={myImage4} number={4} price={278}/>
        </div>
    )
}