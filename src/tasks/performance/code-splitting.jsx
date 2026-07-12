import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Split a heavier feature into its own chunk that loads on demand.";

const requirements = [
  "Use dynamic import() for the heavier module/component",
  "Wrap it with Suspense and a loading fallback",
  "Confirm (conceptually or via build output) it is a separate chunk"
];
import { useCallback, useMemo, useState } from 'react';

export default function CodeSplitting() {
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
        title="Code Splitting"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/performance/code-splitting.jsx"]}
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
