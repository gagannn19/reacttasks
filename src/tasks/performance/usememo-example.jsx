import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Use useMemo to avoid recomputing an expensive derived value on every render.";

const requirements = [
  "An expensive computation derived from some state",
  "Wrap it in useMemo with the correct dependency array",
  "Show it's skipped when unrelated state changes"
];
import { useCallback, useMemo, useState } from 'react';

export default function UseMemoExample() {
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
        title="useMemo Example"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/performance/usememo-example.jsx"]}
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
