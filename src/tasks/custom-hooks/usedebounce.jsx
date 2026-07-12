import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that returns a debounced version of a fast-changing value.";

const requirements = [
  "Accepts a value and a delay in ms",
  "Only updates the returned value after the delay has passed without changes",
  "Demo shows both the raw and debounced value side by side"
];
import { useDebounce } from '../../hooks/useDebounce.js';

export default function UseDebounce() {
  // TODO: call useDebounce(...) once you've implemented it in src/hooks/useDebounce.js
  // const value = useDebounce(...);
  return (
    <div className="task-page">
      <TaskInfo
        title="useDebounce"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/usedebounce.jsx","src/hooks/useDebounce.js"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: use the hook's return value in this demo UI */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
