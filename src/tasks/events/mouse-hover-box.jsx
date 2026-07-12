import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A box that changes appearance while the mouse is hovering over it.";

const requirements = [
  "Use onMouseEnter/onMouseLeave to track hover state",
  "Change background color or scale while hovered",
  "Reset back to normal when the mouse leaves"
];
import { useState } from 'react';

export default function MouseHoverBox() {
  const [state, setState] = useState(null); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    // TODO
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
          {/* TODO: attach handleEvent to the right JSX element/event */}
          <button className="btn" onClick={handleEvent}>
            Trigger
          </button>
        </div>
      </div>
    </div>
  );
}
