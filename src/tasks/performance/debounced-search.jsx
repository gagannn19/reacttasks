import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Debounce a search input so filtering only runs after the user pauses typing.";

const requirements = [
  "Typing quickly should not trigger a filter on every keystroke",
  "Filtering runs only after a short pause (e.g. 300ms)",
  "Show the debounced query alongside the raw input value"
];
import { useCallback, useMemo, useState } from 'react';

export default function DebouncedSearch() {
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
        title="Debounced Search"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/performance/debounced-search.jsx"]}
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
