
export default function InnerRing({onScoreChange}) {
  const handleSingleScoreChange = (value) => {
    onScoreChange(value * 1); // value * single multiplier (1)
  };
  
  const handle1ScoreChange = () => handleSingleScoreChange(1);
  const handle2ScoreChange = () => handleSingleScoreChange(2);
  const handle3ScoreChange = () => handleSingleScoreChange(3);
  const handle4ScoreChange = () => handleSingleScoreChange(4);
  const handle5ScoreChange = () => handleSingleScoreChange(5);
  const handle6ScoreChange = () => handleSingleScoreChange(6);
  const handle7ScoreChange = () => handleSingleScoreChange(7);
  const handle8ScoreChange = () => handleSingleScoreChange(8);
  const handle9ScoreChange = () => handleSingleScoreChange(9);
  const handle10ScoreChange = () => handleSingleScoreChange(10);
  const handle11ScoreChange = () => handleSingleScoreChange(11);
  const handle12ScoreChange = () => handleSingleScoreChange(12);
  const handle13ScoreChange = () => handleSingleScoreChange(13);
  const handle14ScoreChange = () => handleSingleScoreChange(14);
  const handle15ScoreChange = () => handleSingleScoreChange(15);
  const handle16ScoreChange = () => handleSingleScoreChange(16);
  const handle17ScoreChange = () => handleSingleScoreChange(17);
  const handle18ScoreChange = () => handleSingleScoreChange(18);
  const handle19ScoreChange = () => handleSingleScoreChange(19);
  const handle20ScoreChange = () => handleSingleScoreChange(20);
  

return(
    <>
<div className="z-40 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[24rem] h-[24rem] rounded-full bg-zinc-400  overflow-hidden  border-2 border-solid border-zinc-400 " >
<button 
  value="20"
  id="20"
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  top-0
  left-[50%]
  -translate-x-[50%]"
  onClick={handle20ScoreChange}  
  >
</button>

<button 
  value="1"
  id="1"
  onClick={handle1ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc--500
  border-r-[2rem] border-r-transparent
  absolute
  top-[0rem]
  left-[12rem]
  rotate-18
  
" >
</button>
<button 
  value="18"
  id="18"
  onClick={handle18ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  top-[0.5rem]
  left-[14rem]
  rotate-36
">
</button>
<button 
  value="4"
  id="4"
  onClick={handle4ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-100
  border-r-[2rem] border-r-transparent
  absolute
  top-[1.75rem]
  left-[15.5rem]
  rotate-54
"></button>
<button 
  value="13"
  id="13"
  onClick={handle13ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  top-[3.8rem]
  left-[16rem]
  rotate-72
"></button>
<button 
  value="6"
  id="6"
  onClick={handle6ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-100
  border-r-[2rem] border-r-transparent
  absolute
  top-0
  right-0
  translate-y-[50%]
  -translate-x-[100%]
  rotate-90
">
</button>

<button 
  value="10"
  id="10"
  onClick={handle18ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  bottom-[3.8rem]
  left-[16rem]
  rotate-108
"></button>
<button 
  value="15"
  id="15"
  onClick={handle15ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-100
  border-r-[2rem] border-r-transparent
  absolute
  bottom-[2.5rem]
  right-[5rem]
  rotate-126
"></button>
<button 
  value="2"
  id="2"
  onClick={handle2ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  bottom-[0.5rem]
  left-[14rem]
  rotate-144
">
</button>


<button 
  value="17"
  id="17"
  onClick={handle17ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-blue-500
  border-r-[2rem] border-r-transparent
  absolute
  bottom-[0rem]
  left-[12rem]
  rotate-162
">
</button>
<button 
  value="3"
  id="3"
  onClick={handle3ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  bottom-0
  left-[50%]
  -translate-x-[50%]
  rotate-180
">
</button>
<button 
  value="19"
  id="19"
  onClick={handle19ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-blue-500
  border-r-[2rem] border-r-transparent
  absolute
  bottom-[0rem]
  right-[12rem]
  -rotate-162
">
</button>
<button 
  value="8"
  id="8"
  onClick={handle8ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  bottom-[0.5rem]
  right-[14rem]
  -rotate-144
">
</button>
<button 
  value="7"
  id="7"
  onClick={handle7ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-100
  border-r-[2rem] border-r-transparent
  absolute
  bottom-[2.5rem]
  left-[5rem]
  -rotate-126
"></button>
<button 
  value="16"
  id="16"
  onClick={handle16ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  bottom-[3.8rem]
  right-[16rem]
  -rotate-108
"></button>
<button 
  value="11"
  id="11"
  onClick={handle11ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-100
  border-r-[2rem] border-r-transparent
  absolute
  top-0
  left-0
  translate-y-[50%]
  translate-x-[100%]
  -rotate-90
">
</button>
<button 
  value="14"
  id="14"

  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  top-[4rem]
  left-[4.5rem]
  -rotate-72
"></button>
<button 
  value="14"
  id="14"
  onClick={handle14ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-100
  border-r-[2rem] border-r-transparent
  absolute
  top-[2.5rem]
  left-[5rem]
  -rotate-54
"></button>
<button 
  value="12"
  id="12"
  onClick={handle12ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  top-[0.5rem]
  left-[6rem]
  -rotate-36
">
</button>
<button 
id="5"
value="5"
onClick={handle5ScoreChange}
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-blue-500
  border-r-[2rem] border-r-transparent
  absolute
  top-[0rem]
  left-[8rem]
  -rotate-18
">
</button>
</div>
</>
)
}