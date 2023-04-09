import Image from "next/image";
import numbers from '../images/numbers.png'
import Bullseye from "./Bullseye";
import InnerRing from "./InnerRing";
import MultiX2 from "./MultiX2";
import MultiX3 from "./MultiX3";
import OuterRing from "./OuterRing";


export default function DartBoard({ onScoreChange }) {
  const handleScoreChange = (points, event) => {
    onScoreChange(points, event);
  };

  return (
    <>
    <div className="relative w-full h-full flex justify-center items-center">
      <div className=" transform -rotate-9 ">
        <Image src={numbers}
        alt="dartboard numbers"
        loading="eager"
        placeholder="black"

        />
      </div>
      <MultiX2 onScoreChange={handleScoreChange} />
      <OuterRing onScoreChange={handleScoreChange}/>
      <MultiX3 onScoreChange={handleScoreChange} />
      <InnerRing onScoreChange={handleScoreChange}/>
      <Bullseye onScoreChange={handleScoreChange}/>

    </div>
        </>
  );
}
