import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Overlay positioned comment pins on a canvas/image with a comment thread per pin.";

const requirements = [
  "Click on the canvas to drop a new comment pin at that position",
  "Clicking a pin opens its comment thread",
  "Add replies to a thread",
  "Consider Canvas + CommentPin + CommentThread components"
];
import { useState } from 'react';

export default function FigmaCommentsUI() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Figma Comments UI"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/expert-projects/figma-comments-ui.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Figma Comments UI" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
