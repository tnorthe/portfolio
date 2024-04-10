import {BallCanvas} from "./canvas";
import { SectionWrapper } from '../hoc';
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-30 h-28 rounded-full bg-white" key={technology.name}>
          {/*<BallCanvas icon={technology.icon}/>*/}
          <img src={technology.icon} className="object-cover w-full h-full"/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");