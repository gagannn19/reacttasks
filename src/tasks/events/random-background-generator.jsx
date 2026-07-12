import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A button that sets the page/box background to a randomly generated color.";

const requirements = [
  "Generate a random hex color on click",
  "Update the background using that color",
  "Display the current hex code as text"
];
import { useState } from 'react';

export default function RandomBackgroundGenerator() {
  const [state, setState] = useState(null); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    // TODO
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Random Background Generator"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/random-background-generator.jsx"]}
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
