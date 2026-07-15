import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Demonstrate handling a click event and reading data from the event object.";

const requirements = [
  "Attach an onClick handler to a button",
  "Log or display something derived from the click event",
  "Show a click counter"
];
import { useState } from 'react';

export default function ClickEventDemo() {
  const [count, setCount] = useState(0); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    setCount(count+1);
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Click Event Demo"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/click-event-demo.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: attach handleEvent to the right JSX element/event */}
          <button className="btn" onClick={handleEvent}>
            Trigger
          </button>
          <p id='para'>Button Clicked {count} times...</p>
        </div>
      </div>
    </div>
  );
}
