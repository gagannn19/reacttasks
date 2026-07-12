import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Wrap a child component in React.memo to skip re-renders when its props have not changed.";

const requirements = [
  "A parent re-renders frequently (e.g. via a counter)",
  "A child should not re-render when its own props are unchanged",
  "Verify with a render counter or console.log in the child"
];
import { useCallback, useMemo, useState } from 'react';

export default function ReactMemoExample() {
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
        title="React.memo Example"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/performance/react-memo-example.jsx"]}
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
