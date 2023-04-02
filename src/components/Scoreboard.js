

  import React, { useState } from "react";
import Bullseye from "../components/Bullseye";
import InnerRing from "../components/InnerRing";
import OuterRing from "../components/OuterRing"
import MultiX2 from '../components/MultiX2'
import MultiX3 from "./MultiX3";

export default function Scoreboard() {
  const [player1Score, setPlayer1Score] = useState(301);
  const [player2Score, setPlayer2Score] = useState(301);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameMode, setGameMode] = useState("301");
  const [recentThrows, setRecentThrows] = useState([]);
  const [winningPlayer, setWinningPlayer] = useState(null);
  const [turns, setTurns] = useState({ player1: 3, player2: 3 });
  const [clickPosition, setClickPosition] = useState({ x: null, y: null });

  const updatePlayerScore = (points) => {
    if (currentPlayer === 1) {
      setPlayer1Score(player1Score - points);
    } else {
      setPlayer2Score(player2Score - points);
    }

 const updatedTurns = { ...turns };
    if (updatedTurns[`player${currentPlayer}`] > 1) {
      updatedTurns[`player${currentPlayer}`] -= 1;
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      updatedTurns[`player${currentPlayer}`] = 3;
    }
    setTurns(updatedTurns);


    setRecentThrows([...recentThrows, { player: currentPlayer, points }]);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
    setPlayer1Score(parseInt(mode));
    setPlayer2Score(parseInt(mode));
    setRecentThrows([]);
    setWinningPlayer(null);
  };

  const handleScoreChange = (points, event) => {
    const currentPlayerScore =
      currentPlayer === 1 ? player1Score : player2Score;
  
    if (currentPlayerScore - points === 0) {
      setWinningPlayer(currentPlayer);
    } else if (currentPlayerScore - points > 0) {
      updatePlayerScore(points);
    }
  
    if (event) {
      setClickPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const undoLastThrow = () => {
    if (recentThrows.length === 0) return;
  
    const lastThrow = recentThrows.pop();
    setRecentThrows([...recentThrows]);
    setCurrentPlayer(lastThrow.player);
  
    if (lastThrow.player === 1) {
      setPlayer1Score(player1Score + lastThrow.points);
    } else {
      setPlayer2Score(player2Score + lastThrow.points);
    }
  };

  const resetGame = () => {
    handleGameModeChange(gameMode);
    setRecentThrows([]);
    setTurns({ player1: 3, player2: 3 });
    setCurrentPlayer(1);
  };

  return (
    <div className="w-full h-screen relative bg-gray-400">
         <h1 className="text-4xl font-bold mb-8 py-16 text-center bg-red-800 text-white">
        {gameMode} Dart Scoreboard
      </h1>
      <div  className="grid grid-cols-2 py-96 ">


      <div className="flex flex-col bg-amber-900 p-24 rounded-xl shadow-xl mx-auto" >
      <div className="flex space-x-12 mb-8">
      <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Player 1</h2>
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-2xl font-bold">{player1Score}</h3>
          </div>
          </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Player 2</h2>
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-2xl font-bold">{player2Score}</h3>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">
      Player {currentPlayer}'s turn - {turns[`player${currentPlayer}`]} throws remaining
    </h2>
      <div className="flex space-x-4 h-4 w-fit flex-1 mb-4">
        <button
          className={`border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2 ${
            gameMode === "301" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleGameModeChange("301")}
        >
          301
        </button>
        <button
          className={`border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2 ${
            gameMode === "501" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleGameModeChange("501")}
        >
          501
        </button>
        <button
          className={`border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2 ${
            gameMode === "701" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleGameModeChange("701")}
        >
          701
        </button>
        <button
          className={`border-2 border-solid border-gray-400 bg-green-800 text-white rounded-lg p-2    ${
            gameMode === "cricket" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleGameModeChange("cricket")}
        >
          Cricket
        </button>
      {winningPlayer && (
        <div className="text-3xl font-bold mb-4">
          Player {winningPlayer} wins!
        </div>
      )}
<br></br>
<div className="flex flex-col rounded-xl text-white" >
      <button className="bg-blue-500 p-2 mb-4 rounded-lg" onClick={resetGame}>
        Reset Game
      </button>
      <button className="bg-red-500 p-2 mb-4 rounded-lg" onClick={undoLastThrow}>
  Undo Last Throw
</button>
</div>
</div>
      </div>
<div className="relative  border-solid border-black border-4 ">
  {clickPosition.x && clickPosition.y && (
    <div
      className="absolute bg-red-500 w-4 h-4 rounded-full"
      style={{
        left: clickPosition.x - 2,
        top: clickPosition.y - 2,
        transform: "translate(-50%, -50%)",
      }}
    />
  )}
   <MultiX2 onScoreChange={(points, event) => handleScoreChange(points, event)} />
  <OuterRing onScoreChange={(points, event) => handleScoreChange(points, event)} />
  <MultiX3 onScoreChange={(points, event) => handleScoreChange(points, event)} />
  <InnerRing onScoreChange={(points, event) => handleScoreChange(points, event)} />
  <Bullseye onScoreChange={(points, event) => handleScoreChange(points, event)} />
  </div>
    </div>
    </div>
  );
}
