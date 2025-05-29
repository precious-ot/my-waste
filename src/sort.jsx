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
            
        <div className="relative bg-blue-950 mt-8 grid md:flex md:justify-end md:place-items-center text-white p-8 rounded-4xl">
            <h1 className="font-semibold md:me-4">Sort by</h1>
            
            <button className="relative md:mt-0 mt-3 bg-blue-800 py-2 px-4 rounded-full md:w-60 text-start" onClick={Toggle}>Price: {low ? 'Low to High' : 'High to Low'}</button>
        {open && (
                <div onClick={handleclick} className="absolute z-999 bg-black text-white border
                 border-neutral-700 rounded-xl mt-28 md:mt-35 py-1 min-w-50 overflow-auto" tabIndex={1}>
                    <li onClick={lowClick} className="ps-6 grid py-2 hover:bg-blue-900" key={Option}>
                        Low to High</li>
                    <li onClick={highClick} className="ps-6 py-2 grid hover:bg-blue-900" key={Option}>
                        High to Low</li>
                </div>
            )}
            </div>
            {low && (
                <Low />
            )}
            {high && (
                <High />
            )}
            
        </div>
        
    );
}




