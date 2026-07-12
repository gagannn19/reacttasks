import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Take a large list that's slow to render and apply optimizations to speed it up.";

const requirements = [
  "Start from a list large enough to visibly lag (e.g. 5,000+ rows)",
  "Apply at least one concrete optimization (memoized rows, windowing, etc.)",
  "Note/measure the before vs after difference"
];
import { useCallback, useMemo, useState } from 'react';

export default function OptimizedLargeList() {
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
        title="Optimized Large List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/performance/optimized-large-list.jsx"]}
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
