import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Show which key was last pressed while an input is focused.";

const requirements = [
  "Use onKeyDown (or onKeyUp) to capture key presses",
  "Display the key name and key code",
  "Handle special keys like Enter/Escape distinctly"
];
import { useState } from 'react';

export default function KeyboardEventTracker() {
  const [state, setState] = useState(null); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    // TODO
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Keyboard Event Tracker"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/keyboard-event-tracker.jsx"]}
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
