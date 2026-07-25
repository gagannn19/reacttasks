import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A box that changes appearance while the mouse is hovering over it.";

const requirements = [
  "Use onMouseEnter/onMouseLeave to track hover state",
  "Change background color or scale while hovered",
  "Reset back to normal when the mouse leaves"
];
import { useState } from 'react';

export default function MouseHoverBox() {

  const [styling, setStyling] = useState({border:"5px solid white", height:"100px", width:"100px", background:"white"})

  function mouseEntered() {
    setStyling({border:"5px solid red", height:"100px", width:"100px", background:"red"})
  }

  function mouseLeaved() {
    setStyling({border:"5px solid white", height:"100px", width:"100px", background:"white"})
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Mouse Hover Box"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/mouse-hover-box.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <div style={styling} onMouseEnter={mouseEntered} onMouseLeave={mouseLeaved}>

          </div>
        </div>
      </div>
    </div>
  );
}
