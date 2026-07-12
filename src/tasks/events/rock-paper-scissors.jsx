import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Play a single round of rock-paper-scissors against the computer.";

const requirements = [
  "User picks rock, paper, or scissors via buttons",
  "Computer's choice is randomized",
  "Determine and display the winner using correct game rules"
];
import { useState } from 'react';

export default function RockPaperScissors() {
  const [state, setState] = useState(null); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    // TODO
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Rock Paper Scissors"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/rock-paper-scissors.jsx"]}
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
