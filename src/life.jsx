import React from "react";
import { useState } from "react";

 export default function Comment(){
   return(
      <div className="bg-blue-950 mt-8 grid  text-white p-8 rounded-4xl">
          <h1 className="font-semibold">Sort by</h1>
          <button className=" mt-3 bg-blue-800 py-2 px-4 rounded-full text-start" >Price:</button>
      </div>
  );
 }