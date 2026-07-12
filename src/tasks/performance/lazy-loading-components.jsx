import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Use React.lazy + Suspense to load a component only when it's needed.";

const requirements = [
  "A component is only fetched/loaded when first rendered",
  "Show a fallback while it loads",
  "Trigger the lazy load from a button/toggle"
];
import { useCallback, useMemo, useState } from 'react';

export default function LazyLoadingComponents() {
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
        title="Lazy Loading Components"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/performance/lazy-loading-components.jsx"]}
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
