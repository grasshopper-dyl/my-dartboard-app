export default function Bullseye() {
    return (
      <div className="absolute bottom-1/2 left-1/2 transform translate-y-1/2">
        <div className="w-[5rem] h-[5rem] bg-green-700 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-zinc-400"></div>
        <div className="w-[2.5rem] h-[2.5rem] bg-red-700 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-zinc-400"></div>
      </div>
    );
  }
  