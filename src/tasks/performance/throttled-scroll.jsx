import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Throttle a scroll event handler so it runs at most every N milliseconds.";

const requirements = [
  "Attach a scroll listener (window or a scrollable container)",
  "Throttle the handler to run at most once per interval",
  "Display something derived from scroll position (e.g. scroll %)"
];
import { useCallback, useMemo, useState } from 'react';

export default function ThrottledScroll() {
  const [count, setCount] = useState(0);
  const [items] = useState(() => Array.from({ length: 2000 }, (_, i) => i));

  // TODO: this recomputes on every render — fix with useMemo where it belongs
  const expensiveResult = items.filter((n) => n % 2 === 0).length;

  // TODO: wrap any handler passed to a memoized child in useCallback
  function handleClick() {
    setCount((c) => c + 1);
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Throttled Scroll"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/performance/throttled-scroll.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <p>Even count: {expensiveResult}</p>
          <button className="btn" onClick={handleClick}>
            Re-render ({count})
          </button>
          {/* TODO: apply the optimization this task is about, then verify with React DevTools */}
        </div>
      </div>
    </div>
  );
}
