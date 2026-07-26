import TaskInfo from '../../components/TaskInfo.jsx';
import { useEffect, useState } from 'react';

const description = "A start/stop/reset stopwatch with elapsed time display.";

const requirements = [
  "Start begins incrementing elapsed time",
  "Stop pauses it without losing the current value",
  "Reset sets elapsed time back to 0, and the interval is cleaned up properly"
];

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  function startClicked() {
    setRunning(true);
  }

  function stopClicked() {
    setRunning(false);
  }

  function resetClicked() {
    setRunning(false);
    setTime(0);
  }

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  return (
    <div className="task-page">
      <TaskInfo
        title="Stopwatch"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/stopwatch.jsx"]}
      />

      <div className="task-workspace">
        <div>
          <button onClick={startClicked} style={{ margin: "10px" }}>
            Start
          </button>

          <button onClick={stopClicked} style={{ margin: "10px" }}>
            Stop
          </button>

          <button onClick={resetClicked} style={{ margin: "10px" }}>
            Reset
          </button>
        </div>

        <h1>{time}</h1>
      </div>
    </div>
  );
}