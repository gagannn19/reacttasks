import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Use useCallback to keep a function reference stable across renders.";

const requirements = [
  "A callback passed down to a memoized child",
  "Wrap it in useCallback with the correct dependencies",
  "Show the child no longer re-renders due to a new function reference"
];
import { useCallback, useMemo, useState } from 'react';

export default function UseCallbackExample() {
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
        title="useCallback Example"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/performance/usecallback-example.jsx"]}
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
