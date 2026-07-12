import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Show skeleton placeholders while data is loading instead of a blank screen or spinner.";

const requirements = [
  "Render skeleton shapes matching the eventual content's layout",
  "Swap to real content once data has 'loaded' (simulate with a timeout)",
  "Skeletons should roughly match final content dimensions"
];
import { useCallback, useMemo, useState } from 'react';

export default function SkeletonLoadingUI() {
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
        title="Skeleton Loading UI"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/performance/skeleton-loading-ui.jsx"]}
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
