import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A freehand drawing canvas with basic tools.";

const requirements = [
  "Draw freehand on a <canvas> while the mouse is held down",
  "Support at least a color and stroke-width control",
  "A clear-canvas button",
  "Consider a Toolbar + Canvas component split"
];
import { useState } from 'react';

export default function WhiteboardApp() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Whiteboard App"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/expert-projects/whiteboard-app.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Whiteboard App" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
