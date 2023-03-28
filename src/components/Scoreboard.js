import React, { useState } from "react";

export default function Scoreboard() {
  const [player1Score, setPlayer1Score] = useState(301);
  const [player2Score, setPlayer2Score] = useState(301);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameMode, setGameMode] = useState("301");

  const handleScoreChange = (points) => {
    if (currentPlayer === 1) {
      setPlayer1Score(player1Score - points);
      setCurrentPlayer(2);
    } else {
      setPlayer2Score(player2Score - points);
      setCurrentPlayer(1);
    }
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
    setPlayer1Score(parseInt(mode));
    setPlayer2Score(parseInt(mode));
  };

  return (
    <div className="flex flex-col items-center bg-zinc-400">
      <h1 className="text-4xl font-bold mb-8">
        {gameMode} Dart Scoreboard
      </h1>

      <div className="flex space-x-12 mb-8">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">Player 1</h2>
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-2xl font-bold">{player1Score}</h3>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">Player 2</h2>
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-2xl font-bold">{player2Score}</h3>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <button
          className={`border-2 border-solid border-gray-400 rounded-lg p-2 ${
            gameMode === "301" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleGameModeChange("301")}
        >
          301
        </button>
        <button
          className={`border-2 border-solid border-gray-400 rounded-lg p-2 ${
            gameMode === "501" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleGameModeChange("501")}
        >
          501
        </button>
        <button
          className={`border-2 border-solid border-gray-400 rounded-lg p-2 ${
            gameMode === "701" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleGameModeChange("701")}
        >
          701
        </button>
        <button
          className={`border-2 border-solid border-gray-400 rounded-lg p-2 ${
            gameMode === "cricket" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleGameModeChange("cricket")}
        >
          Cricket
        </button>
      </div>
      </div>
      )}
