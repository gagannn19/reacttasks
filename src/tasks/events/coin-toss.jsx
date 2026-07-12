import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate flipping a coin and display Heads or Tails.";

const requirements = [
  "Button triggers a random Heads/Tails result",
  "Display the result clearly",
  "Track a running tally of heads vs tails (bonus)"
];
import { useState } from 'react';

export default function CoinToss() {
  const [state, setState] = useState(null); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    // TODO
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Coin Toss"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/coin-toss.jsx"]}
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
