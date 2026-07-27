import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A button that sets the page/box background to a randomly generated color.";

const requirements = [
  "Generate a random hex color on click",
  "Update the background using that color",
  "Display the current hex code as text"
];
import { useState } from 'react';

export default function RandomBackgroundGenerator() {

  const [color,setColor] = useState("RRGGBB");
  const hexValue = "0123456789ABCDEF";
  const [rndm, setRandom] = useState("");

  function changeColorClicked() {
    let random = "#";
    for(let i = 0; i<6; i++) {
      random = random + hexValue[Math.floor(Math.random() * 16)]
    }
    setRandom(random);
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Random Background Generator"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/random-background-generator.jsx"]}
      />
      <div className="task-workspace" style={{ border:"2px solid white", background:rndm}}>
        <div className="stack">
            <button onClick={changeColorClicked}>Change Color</button>
            <p>{rndm}</p>
        </div>
      </div>
    </div>
  );
}
