import TaskInfo from '../../components/TaskInfo.jsx';

const description = "The app picks a random number in a range; the user guesses until they get it right.";

const requirements = [
  "Pick a random target number on mount/reset",
  "Give higher/lower feedback after each guess",
  "Track number of attempts and show a win message"
];
import { useState } from 'react';

export default function NumberGuessingGame() {
  const [state, setState] = useState(null); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    // TODO
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Number Guessing Game"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/number-guessing-game.jsx"]}
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
