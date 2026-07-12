import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Show a random quote from a hardcoded list each time a button is clicked.";

const requirements = [
  "Maintain an array of quote objects (text + author)",
  "Button picks a new random quote, avoiding immediate repeats (bonus)",
  "Display the quote and its author"
];
import { useState } from 'react';

export default function RandomQuoteGenerator() {
  const [state, setState] = useState(null); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    // TODO
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Random Quote Generator"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/random-quote-generator.jsx"]}
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
