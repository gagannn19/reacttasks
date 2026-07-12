import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Demonstrate the difference between a component that re-renders unnecessarily and one that doesn't.";

const requirements = [
  "Show an unnecessary re-render happening",
  "Fix it using the appropriate memoization technique",
  "Prove the fix using console logs or React DevTools"
];
import { useCallback, useMemo, useState } from 'react';

export default function MemoizationDemo() {
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
        title="Memoization Demo"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/performance/memoization-demo.jsx"]}
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
