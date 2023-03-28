import InnerRing from "./InnerRing";

export default function MutliX3() {
  return (
    <div className="w-[27rem] h-[27rem]  rounded-full absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%] border-2 border-solid border-zinc-400 overflow-hidden">
      <div
        className="w-0 h-0 
  border-l-[2.3rem] border-l-transparent
  border-t-[13rem] border-t-red-700
  border-r-[2.3rem] border-r-transparent
   absolute
    top-0
    left-[13.5rem]
    -translate-x-[50%]
    
  "
      ></div>
            <div
        className="w-0 h-0 
  border-l-[2.3rem] border-l-transparent
  border-t-[13rem] border-t-red-700
  border-r-[2.3rem] border-r-transparent
   absolute
    bottom-0
    left-[13.5rem]
    -translate-x-[50%]
    rotate-180
    
  "
      ></div>
      <InnerRing />
    </div>
  );
}
