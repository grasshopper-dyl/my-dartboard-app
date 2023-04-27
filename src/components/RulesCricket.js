// components/CricketRules.js
export default function CricketRules() {
    const rules = [
      'Cricket is played with a standard dartboard and any number of players.',
      'The objective of the game is to "close" all numbers from 15 to 20, as well as the bullseye, and have the highest or equal points total.',
      'Each player takes turns throwing three darts per round.',
      'A number is considered "open" until both players have scored three hits on it. Once both players have three hits on a number, it is considered "closed."',
      'Players can score points on an open number. If a player has already scored three hits on a number and their opponent has not, they can continue to hit that number to score points equal to the number\'s value (e.g., hitting an open 20 scores 20 points).',
      'Doubles and triples count as two or three hits, respectively, and also multiply the points scored.',
      'To close the bullseye, players must score three outer bullseyes (green ring) or one inner bullseye (red center). The outer bullseye is worth 25 points, and the inner bullseye is worth 50 points.',
      'The game ends when all numbers (15 to 20) and the bullseye are closed by both players. The player with the highest or equal points total at the end of the game is the winner. If a player closes all numbers and the bullseye and has a higher points total than their opponent, they win instantly.',
    ];
  
    return (
        <div className="space-y-2 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center pt-12 ">Cricket Game Rules</h2>
        <ul className="list-disc pl-5 space-y-2 max-w-6xl mx-auto py-12">
          {rules.map((rule, index) => (
            <li key={index} className="text-xl">
              {rule}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  