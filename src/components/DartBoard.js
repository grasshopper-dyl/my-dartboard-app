import React, { useState } from "react";
import Bullseye from "../components/Bullseye";
import InnerRing from "../components/InnerRing";
import OuterRing from "../components/OuterRing";
import MutliX3 from "./MultiX3";
import Scoreboard from '../components/ScoreBoard'

export default function DartBoard() {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className="h-w-full h-screen  relative flex items-center  bg-zinc-900 ">
      <div className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-4">
        <Scoreboard/>
      <div className="p-16 mx-auto rounded-2xl bg-zinc-600 bg" >
      <div className="mx-auto w-[54rem] h-[54rem] rounded-full flex relative justify-center items-center overflow-hidden border-2 border-solid border-zinc-400">
        <div
          className="w-0 h-0 
  border-l-[4.3rem] border-l-transparent
  border-t-[30rem] border-t-red-700
  border-r-[4.3rem] border-r-transparent
   absolute
    top-0
    
  "
        ></div>

        {/* inner circle */}

        <OuterRing />
 <MutliX3/>
      </div>
      </div>
    </div>
    </div>
  );
}
