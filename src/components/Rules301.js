export default function Darts301Rules() {
    const rules = [
      'Each player starts with a score of 301.',
      'In some variations of 301, a player must hit a double (the outer ring) to start scoring. This is known as "doubling in." If this rule is applied, any darts thrown before hitting a double will not count towards reducing the player\'s score.',
      'Each player throws three darts per turn.',
      'The sum of the points scored with the three darts is subtracted from the player\'s current total. Hitting a double or triple ring multiplies the point value of the corresponding segment (double equals 2x, triple equals 3x).',
      'To win the game, a player must reach exactly zero by finishing with a double (the outer ring). For example, if a player has 32 points left, they must hit a double 16 to win the game. If a player scores more points than they have left, it is called a "bust," and their turn ends with no points subtracted from their score.',
      'If a player\'s score goes below zero or the player hits a double that would take their score to one, it is considered a "bust." The player\'s score reverts to what it was at the beginning of their turn, and the game proceeds to the next player\'s turn.',
      'Players take turns in a clockwise order. The order of play can be determined by each player throwing a single dart at the bullseye, with the closest to the bullseye going first, and so on.',
      'If two or more players reach zero in the same round, the winner is the one with the highest double (e.g., a player finishing with double 16 would beat a player finishing with double 8). If the players have the same finishing double, a tiebreaker round is played with the same rules, and the first player to reach zero wins.',
    ];
  
    return (
      <div className="space-y-2 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center pt-12 ">301 Darts Game Rules</h2>
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
  