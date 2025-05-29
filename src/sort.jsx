import React from "react";
import { useState, useReducer } from "react";
import Low from "./Low";
import High from "./High";


export default function Sort(){
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState();
    const [low, setLow] = useState(true);
    const [high, setHigh] = useState(false);
    const Toggle = () => {
        setOpen(!open)
    }
    const lowClick = () => {
        setLow(true);
        setHigh(false);
    }
    
    const highClick = () => {
        setHigh(true);
        setLow(false);
    }
    const handleclick = (Option) =>{
        setSelected(Option);
        setOpen(false);
    }

    

    
    return(
        <div>
        <div className="bg-blue-950 mt-8 grid md:flex md:justify-end md:place-items-center text-white p-8 rounded-4xl">
            <h1 className="font-semibold md:me-4">Sort by</h1>
            
            <button className="md:mt-0 mt-3 bg-blue-800 py-2 px-4 rounded-full md:w-60 text-start" onClick={Toggle}>Price: {low ? 'Low to High' : 'High to Low'}</button>
            </div>
            {open && (
                <div onClick={handleclick} className="absolute z-999 bg-black text-white border
                 border-neutral-700 py-1 min-w-50 xl:left-210 xl:bottom-46 lg:bottom-64 lg:left-150 md:bottom-64 md:w-70 md:left-95 sm:left-25  sm:bottom-55 sm:w-80  rounded-xl left-14  bottom-50">
                    <li onClick={lowClick} className="ps-6 grid py-2 hover:bg-blue-900" key={Option}>
                        Low to High</li>
                    <li onClick={highClick} className="ps-6 py-2 grid hover:bg-blue-900" key={Option}>
                        High to Low</li>
                </div>
            )}
            {low && (
                <Low />
            )}
            {high && (
                <High />
            )}
            
        </div>
        
    );
}




