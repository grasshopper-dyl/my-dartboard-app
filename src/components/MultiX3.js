const MultiX3 = ({ onScoreChange }) => {
  const handleTriple1ScoreChange = () => {
    onScoreChange(3);
  };

  const handleTriple2ScoreChange = () => {
    onScoreChange(6);
  };

  const handleTriple3ScoreChange = () => {
    onScoreChange(9);
  };

  const handleTriple4ScoreChange = () => {
    onScoreChange(12);
  };

  const handleTriple5ScoreChange = () => {
    onScoreChange(15);
  };

  const handleTriple6ScoreChange = () => {
    onScoreChange(18);
  };

  const handleTriple7ScoreChange = () => {
    onScoreChange(21);
  };

  const handleTriple8ScoreChange = () => {
    onScoreChange(24);
  };

  const handleTriple9ScoreChange = () => {
    onScoreChange(27);
  };

  const handleTriple10ScoreChange = () => {
    onScoreChange(30);
  };

  const handleTriple11ScoreChange = () => {
    onScoreChange(33);
  };

  const handleTriple12ScoreChange = () => {
    onScoreChange(36);
  };

  const handleTriple13ScoreChange = () => {
    onScoreChange(439);
  };

  const handleTriple14ScoreChange = () => {
    onScoreChange(42);
  };

  const handleTriple15ScoreChange = () => {
    onScoreChange(45);
  };

  const handleTriple16ScoreChange = () => {
    onScoreChange(48);
  };

  const handleTriple17ScoreChange = () => {
    onScoreChange(51);
  };

  const handleTriple18ScoreChange = () => {
    onScoreChange(54);
  };

  const handleTriple19ScoreChange = () => {
    onScoreChange(57);
  };

  const handleTriple20ScoreChange = () => {
    onScoreChange(60);
  };

  return (
    <>
      <div
        className=" w-[51%] h-[51%] lg:w-[47.44%] lg:h-[47.44%] rounded-full  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] border-2 border-solid border-zinc-400
 overflow-hidden"
      >
        {/* top */}
<button
  value="60"
  id="20x3"
  className="w-1/2 h-[16%] bg-dartboard-red absolute top-0 right-1/2 translate-y-[100%] translate-x-[50%] transform rotate-90"
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple20ScoreChange}
></button>
<button
  value="3"
  id="1x3"
  className="w-1/2 h-[16%] bg-dartboard-green absolute bottom-[65.5%] right-[17.5%]   transform rotate-108 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple1ScoreChange}
></button>
<button
  value="39"
  id="13x3"
  className="w-1/2 h-[16%] bg-dartboard-red absolute right-0 bottom-1/2 transform  rotate-162"
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple13ScoreChange}
></button>
<button
  value="12"
  id="4x3"
  className="w-1/2 h-[16%] bg-dartboard-green absolute bottom-[56.2%] right-[5.1%]   transform rotate-144 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple4ScoreChange}
></button>
<button
  value="54"
  id="18x3"
  className="w-1/2 h-[16%] bg-dartboard-red absolute bottom-[62%] right-[10.5%]   transform rotate-126 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple18ScoreChange}
></button>
{/* 90 degrees */}
<button
  value="18"
  id="6x3"
  className="w-1/2 h-[16%] bg-dartboard-green absolute top-1/2 right-0  -translate-y-1/2 transform rotate-180"
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple6ScoreChange}
></button>
<button
  value="30"
  id="10x3"
  className="w-1/2 h-[16%] bg-dartboard-red absolute right-0 bottom-1/2 translate-y-[100%] transform  -rotate-162"
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple10ScoreChange}
></button>
<button
  value="45"
  id="15x3"
  className="w-1/2 h-[16%] bg-dartboard-green absolute top-[56.2%] right-[5.1%]   transform -rotate-144 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple15ScoreChange}
></button>
<button
  value="6"
  id="2x3"
  className="w-1/2 h-[16%] bg-dartboard-red absolute top-[62%] right-[10.5%]   transform -rotate-126 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple2ScoreChange}
></button>

<button
  value="51"
  id="17x3"
  className="w-1/2 h-[16%] bg-dartboard-green absolute top-[65.5%] right-[17.5%]   transform -rotate-108 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple17ScoreChange}
></button>
<button
  value="9"
  id="3x3"
  className="w-1/2 h-[16%] bg-dartboard-red absolute bottom-0 right-1/2 -translate-y-[100%] translate-x-[50%] transform -rotate-90"
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple3ScoreChange}
></button>
        <button
  value="57"
  id="19x3"
  className="w-1/2 h-[16%] bg-dartboard-green absolute top-[65.5%] left-[17.5%]   transform -rotate-72 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple19ScoreChange}
></button>
<button
  value="21"
  id="7x3"
  className="w-1/2 h-[16%] bg-dartboard-red absolute top-[62%] left-[10.5%]   transform -rotate-54 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple7ScoreChange}
></button>
<button
  value="48"
  id="16x3"
  className="w-1/2 h-[16%] bg-dartboard-green absolute top-[56.2%] left-[5.1%]   transform -rotate-36 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple16ScoreChange}
></button>
<button
  value="34"
  id="8x3"
  className="w-1/2 h-[16%] bg-dartboard-red absolute left-0 bottom-1/2 translate-y-[100%] transform  -rotate-18"
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple8ScoreChange}
></button>
{/* 270 degree */}
<button
  value="33"
  id="11x3"
  className="w-1/2 h-[16%] bg-dartboard-green absolute top-1/2 left-0 -translate-y-1/2 transform "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple11ScoreChange}
></button>
<button
  value="42"
  id="14x3"
  className="w-1/2 h-[16%] bg-dartboard-red absolute left-0 bottom-1/2 transform  rotate-18"
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple14ScoreChange}
></button>
<button
  value="27"
  id="9x3"
  className="w-1/2 h-[16%] bg-dartboard-green absolute bottom-[56.2%] left-[5.1%]   transform rotate-36 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple9ScoreChange}
></button>
<button
  value="36"
  id="12x3"
  className="w-1/2 h-[16%] bg-dartboard-red absolute bottom-[62%] left-[10.5%]   transform rotate-54 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple12ScoreChange}
></button>
<button
  value="15"
  id="5x3"
  className="w-1/2 h-[16%] bg-dartboard-green absolute bottom-[65.5%] left-[17.5%]   transform rotate-72 "
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
  onClick={handleTriple5ScoreChange}
></button>

      </div>
    </>
  );
};

export default MultiX3;
