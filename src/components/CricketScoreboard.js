import React, { useState } from "react";

const INITIAL_SCORES = {
  15: [0, 0],
  16: [0, 0],
  17: [0, 0],
  18: [0, 0],
  19: [0, 0],
  20: [0, 0],
  bullseye: [0, 0],
};

export default function CricketScoreboard({ numPlayers, onCricketScoreChange }) {
  const [scores, setScores] = useState(Array(numPlayers).fill(INITIAL_SCORES));
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const handleScoreChange = (key, count) => {
    setScores((prevScores) => {
      const newScores = JSON.parse(JSON.stringify(prevScores));
      newScores[currentPlayer][key] += count;
      
      if (newScores[currentPlayer][key] >= 3 && currentPlayer < numPlayers - 1) {
        setCurrentPlayer(currentPlayer + 1);
      } else if (newScores[currentPlayer][key] >= 3 && currentPlayer === numPlayers - 1) {
        setCurrentPlayer(0);
      }

      onCricketScoreChange(newScores);
      return newScores;
    });
  };

  const renderScoreCells = (key) => {
    return scores.map((score, index) => (
      <td
        key={`player-${index}-${key}`}
        className="border border-gray-300 p-1 text-center"
      >
        {score[key]}
      </td>
    ));
  };

  return (
    <div className="w-full h-fit">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="text-left p-2">Number</th>
            {Array.from({ length: numPlayers }, (_, i) => (
              <th key={`player-header-${i}`} className="text-center p-2">
                Player {i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(INITIAL_SCORES).map((key) => (
            <tr key={`row-${key}`}>
              <td className="border border-gray-300 p-2">{key}</td>
              {renderScoreCells(key)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
