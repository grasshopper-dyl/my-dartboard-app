import React from "react";


  const Bullseye = ({ onScoreChange }) => {
    const handleInnerBullseyeScoreChange = () => {
      onScoreChange(50);
    };

    const handleOuterBullseyeScoreChange = () => {
      onScoreChange(25);
    };

  return (
    <div className="flex justify-center items-center  w-[7.9%] h-[7.9%]">
      <button
        className="w-[7.098%] h-[7.098%] bg-green-700 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-zinc-400"
        onClick={handleOuterBullseyeScoreChange}
      ></button>
      <button
        className="z-50 w-[2.817%] h-[2.817%] bg-red-700 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-zinc-400  "
        onClick={handleInnerBullseyeScoreChange}      ></button>
    </div>
  );
}

export default Bullseye;


