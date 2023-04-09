
const MultiX2 = ({ onScoreChange }) => {
  const handleDouble1ScoreChange = () => {
    onScoreChange(2);
  };

  const handleDouble2ScoreChange = () => {
    onScoreChange(4);
  };

  const handleDouble3ScoreChange = () => {
    onScoreChange(6);
  };

  const handleDouble4ScoreChange = () => {
    onScoreChange(8);
  };

  const handleDouble5ScoreChange = () => {
    onScoreChange(10);
  };

  const handleDouble6ScoreChange = () => {
    onScoreChange(12);
  };

  const handleDouble7ScoreChange = () => {
    onScoreChange(14);
  };

  const handleDouble8ScoreChange = () => {
    onScoreChange(16);
  };

  const handleDouble9ScoreChange = () => {
    onScoreChange(18);
  };

  const handleDouble10ScoreChange = () => {
    onScoreChange(20);
  };

  const handleDouble11ScoreChange = () => {
    onScoreChange(22);
  };

  const handleDouble12ScoreChange = () => {
    onScoreChange(24);
  };

  const handleDouble13ScoreChange = () => {
    onScoreChange(26);
  };

  const handleDouble14ScoreChange = () => {
    onScoreChange(28);
  };

  const handleDouble15ScoreChange = () => {
    onScoreChange(30);
  };

  const handleDouble16ScoreChange = () => {
    onScoreChange(32);
  };

  const handleDouble17ScoreChange = () => {
    onScoreChange(34);
  };

  const handleDouble18ScoreChange = () => {
    onScoreChange(36);
  };

  const handleDouble19ScoreChange = () => {
    onScoreChange(38);
  };

  const handleDouble20ScoreChange = () => {
    onScoreChange(40);
  };

  return (
    <>
        <div
          className="w-[75.38%] h-[75.38%] rounded-full  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]
 overflow-hidden border-2 border-solid border-zinc-400 "
        >
<button
  value="40"
  id="20x2"
  className="w-[16%] h-1/2 bg-red-700  absolute top-0 left-1/2 -translate-x-1/2 "
  onClick={handleDouble20ScoreChange}
></button>
<button
  value="40"
  id="20x2"
  className="w-[16%] h-1/2 bg-green-700  absolute top-1/2 left-0 translate-x-[100%] -translate-y-1/2 rotate-90"
  onClick={handleDouble20ScoreChange}
></button>
                    <button
            value="40"
            id="20x2"
            className="w-[16%] h-1/2 bg-red-700  absolute bottom-0 left-1/2 -translate-x-1/2"
            onClick={handleDouble20ScoreChange}
          ></button>
        
        </div>
      
    </>
  );
};

export default MultiX2;
