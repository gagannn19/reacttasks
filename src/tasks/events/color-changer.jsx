import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Buttons for a few colors that change the background color of a preview box when clicked.";

const requirements = [
  "Render a set of color swatch buttons",
  "Clicking a swatch updates the preview box background",
  "Track the currently selected color in state"
];
import { useState } from 'react';

export default function ColorChanger() {
  const [state, setState] = useState(null); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    // TODO
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
          {/* TODO: attach handleEvent to the right JSX element/event */}
          <button className="btn" onClick={handleEvent}>
            Trigger
          </button>
        </div>
      </div>
    </div>
  );
}
