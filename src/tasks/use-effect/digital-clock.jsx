import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Display the current time and update it every second.";

const requirements = [
  "Use useEffect + setInterval to tick every second",
  "Clean up the interval on unmount",
  "Format the time as HH:MM:SS"
];
import { useEffect, useState } from 'react';

export default function DigitalClock() {
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
        title="Digital Clock"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/digital-clock.jsx"]}
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
