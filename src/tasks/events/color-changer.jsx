import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Buttons for a few colors that change the background color of a preview box when clicked.";

const requirements = [
  "Render a set of color swatch buttons",
  "Clicking a swatch updates the preview box background",
  "Track the currently selected color in state"
];
import { useState } from 'react';

export default function ColorChanger() {

  const [color, setColor] = useState("white");

  function changeColor(event) {
    setColor(event.target.value);
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Color Changer"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/color-changer.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <div style={{width:"100px", height:"100px", background:color}}></div>
          <button onClick={changeColor} value={"red"}>Red</button>
          <button onClick={changeColor} value={"blue"}>Blue</button>
          <button onClick={changeColor} value={"green"}>Green</button>
          <button onClick={changeColor} value={"white"}>White</button>
        </div>
      </div>
    </div>
  );
}
