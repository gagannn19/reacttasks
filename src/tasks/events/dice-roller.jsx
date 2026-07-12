import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate rolling a six-sided die and display the result.";

const requirements = [
  "Button triggers a new random roll (1-6)",
  "Display the resulting number (bonus: as a dice face)",
  "Disable/animate briefly while 'rolling' (optional)"
];
import { useState } from 'react';

export default function DiceRoller() {
  const [state, setState] = useState(null); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    // TODO
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Dice Roller"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/dice-roller.jsx"]}
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
