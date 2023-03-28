import Bullseye from "./Bullseye";

export default function InnerRing() {

return(
    <>
<div className="relative mx-auto my-[1rem]   w-[24rem] h-[24rem] rounded-full bg-zinc-500  overflow-hidden  border-2 border-solid border-zinc-400 " >
<div 
  value="20"
  id="20"
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-900
  border-r-[2rem] border-r-transparent
  absolute
  top-0
  left-[50%]
  -translate-x-[50%]
  
">
</div>
<div 
  value="3"
  id="3"
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
</div>
<div 
  value="3"
  id="3"
  className="w-0 h-0 
  border-l-[2rem] border-l-transparent
  border-t-[12rem] border-t-zinc-blue-500
  border-r-[2rem] border-r-transparent
  absolute
  top-[0rem]
  left-[12rem]
  rotate-18
">
</div>
<div 
  value="3"
  id="3"
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
</div>
<div 
  value="3"
  id="3"
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
</div>



</div>
</>
)
}