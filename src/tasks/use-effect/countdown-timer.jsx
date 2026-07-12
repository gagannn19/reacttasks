import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Count down from a given number of seconds to zero.";

const requirements = [
  "Accept a starting number of seconds",
  "Tick down once per second using useEffect",
  "Stop at zero and show a 'done' message, cleaning up the interval"
];
import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: run the side effect this task needs (timer, fetch, subscription...)
    // Remember to return a cleanup function if you start an interval/timeout/subscription.

    return () => {
      // TODO: cleanup here if needed
    };
  }, []);
  return (
    <div className="task-page">
      <TaskInfo
        title="Countdown Timer"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/countdown-timer.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: render `data` / loading / error states */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
