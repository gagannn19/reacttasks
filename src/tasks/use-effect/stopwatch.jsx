import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A start/stop/reset stopwatch with elapsed time display.";

const requirements = [
  "Start begins incrementing elapsed time",
  "Stop pauses it without losing the current value",
  "Reset sets elapsed time back to 0, and the interval is cleaned up properly"
];
import { useEffect, useState } from 'react';

export default function Stopwatch() {
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
        title="Stopwatch"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/stopwatch.jsx"]}
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
