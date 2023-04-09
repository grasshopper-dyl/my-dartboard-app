import React, { useState } from "react";
import DartBoard from "./DartBoard";
import Image from "next/image";
import wood from '../images/wood.png'

export default function Scoreboard() {
  const [playerScores, setPlayerScores] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameMode, setGameMode] = useState("301");
  const [winningPlayer, setWinningPlayer] = useState(null);
  const [turns, setTurns] = useState([]);
  const [consecutiveTurns, setConsecutiveTurns] = useState(0);
  const [numPlayers, setNumPlayers] = useState(2);

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
    setPlayerScores(Array(numPlayers).fill(parseInt(mode)));
    setTurns(Array(numPlayers).fill(3));
    setWinningPlayer(null);
  };

  const handleScoreChange = (points, clickPosition) => {
    const currentPlayerScore = playerScores[currentPlayer - 1];
  
    if (currentPlayerScore - points === 0) {
      setWinningPlayer(currentPlayer);
    } else if (currentPlayerScore - points > 0) {
      const updatedTurns = [...turns];
      updatedTurns[currentPlayer - 1] -= 1;
      setTurns(updatedTurns);
  
      if (updatedTurns[currentPlayer - 1] === 0) {
        const nextPlayer = (currentPlayer % numPlayers) + 1;
        setCurrentPlayer(nextPlayer);
        updatedTurns[nextPlayer - 1] = 3;
      }
  
      const updatedPlayerScores = [...playerScores];
      updatedPlayerScores[currentPlayer - 1] -= points;
      setPlayerScores(updatedPlayerScores);
    }
  };

  const resetGame = () => {
    setPlayerScores(Array(numPlayers).fill(parseInt(gameMode)));
    setCurrentPlayer(1);
    setWinningPlayer(null);
    setTurns(Array(numPlayers).fill(3));
    setConsecutiveTurns(0);
  };

  const undoLastThrow = () => {
    console.log("Undoing last throw");
  };

  const renderPlayerScores = () => {
    const playerScorePanels = [];
    for (let i = 1; i <= numPlayers; i++) {
      playerScorePanels.push(
        <div className="flex flex-col items-center" key={`player-${i}`}>
          <h2 className="text-2xl text-white font-bold mb-4">{`Player ${i}`}</h2>
          <div className="bg-gray-100 rounded-lg p-4 border-solid border-black border-2 min-w-[100px] min-h-[50px] flex items-center justify-center">
            <h3 className="text-2xl text-black font-bold">
              {playerScores[i - 1]}
            </h3>
          </div>
        </div>
      );
    }
    return playerScorePanels;
  };
  





return (
  <div className=" relative h-full w-full">
    <Image 
    src={wood}
    alt=""
    className="z-0 w-full h-full absolute "
    />
    <div className="z-30 w-full h-fit p-4 text-center bg-red-800 text-white" >
    <h1 className=" text-2xl font-bold z-30 ">
      {gameMode} Dart Scoreboard
    </h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="mx-auto bg-transparent">
        <DartBoard onScoreChange={handleScoreChange} />
      </div>
      <div className="z-10 flex flex-col bg-gray-900 h-fit w-11/12 max-w-4xl p-8 mb-12 rounded-xl shadow-xl mx-auto items-center border-solid border-2 border-yellow-600">
  <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
  
          {Array.from(Array(numPlayers).keys()).map((playerIndex) => (
            <div className="flex flex-col max-w-[95] items-center" key={playerIndex}>
              <h2 className="text-2xl text-white  font-bold mb-4">
                Player {playerIndex + 1}
              </h2>
              <div className="bg-gray-100 rounded-lg p-4 border-solid border-black border-2">
                <h3 className="text-2xl text-black font-bold">
                  {playerScores[playerIndex]}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Player {currentPlayer}'s turn
          <br />
          {turns[currentPlayer - 1]} throws remaining
        </h2>
        <div className="flex justify-center  max-w-[90%] space-x-4 h-4 mb-4">
          <button
            className={`h-fit px-4 py-2 border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2 ${
              gameMode === "301" ? "bg-gray-400" : ""
            }`}
            onClick={() => handleGameModeChange("301")}
          >
            301
          </button>
          <button
            className={`h-fit px-4 py-2 border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2 ${
              gameMode === "501" ? "bg-gray-400" : ""
            }`}
            onClick={() => handleGameModeChange("501")}
          >
            501
          </button>
          <button
            className={`h-fit px-4 py-2 border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2 ${
              gameMode === "701" ? "bg-gray-400" : ""
            }`}
            onClick={() => handleGameModeChange("701")}
          >
            701
          </button>
          <button
            className={`h-fit px-4 py-2border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2    ${
              gameMode === "cricket" ? "bg-gray-400" : ""
            }`}
            onClick={() => handleGameModeChange("cricket")}
          >
            Cricket
          </button>
        </div>
        {winningPlayer && (
          <div className="text-3xl p-4 text-white font-bold mb-4">
            Player {winningPlayer} wins!
          </div>
        )}
          <br />
          <div className="flex flex-col  rounded-xl items-center text-white">
            <button
              className="bg-blue-500 p-2 mb-4 w-fit h-fit rounded-lg"
              onClick={resetGame}
            >
              Reset Game
            </button>
            <button
              className="bg-red-500 w-fit h-fit p-2 mb-4 rounded-lg"
              onClick={undoLastThrow}
            >
              Undo Last Throw
            </button>
            <div className="flex flex-wrap justify-center items-center gap-4   max-w-[90%] p-4">
              <button
                className={`h-fit px-4 py-2 border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2 ${
                  numPlayers === 1 ? "bg-gray-400" : ""
                }`}
                onClick={() => setNumPlayers(1)}
              >
                1 Player
              </button>
              <button
                className={`h-fit px-4 py-2 border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2 ${
                  numPlayers === 2 ? "bg-gray-400" : ""
                }`}
                onClick={() => setNumPlayers(2)}
              >
                2 Players
              </button>
              <button
                className={`h-fit px-4 py-2 border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2 ${
                  numPlayers === 3 ? "bg-gray-400" : ""
                }`}
                onClick={() => setNumPlayers(3)}
              >
                3 Players
              </button>
              <button
                className={`h-fit px-4 py-2 border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2 ${
                  numPlayers === 4 ? "bg-gray-400" : ""
                }`}
                onClick={() => setNumPlayers(4)}
              >
                4 Players
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}