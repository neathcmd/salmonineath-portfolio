import ProgressBar from "./ProgressBar";
import { FaReact, FaNodeJs } from "react-icons/fa"; // Example icons

const Skills = () => {
  return (
    <div>
      <ProgressBar progress={90} label="React" icon={<FaReact />} />
      <ProgressBar progress={85} label="Node.js" icon={<FaNodeJs />} />
      {/* Add more skills */}
    </div>
  );
};
