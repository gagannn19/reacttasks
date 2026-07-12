import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that returns the previous value of a piece of state/props.";

const requirements = [
  "Returns the value from the render before the latest one",
  "Uses a ref internally rather than state",
  "Demo shows current vs previous value side by side"
];
import { usePrevious } from '../../hooks/usePrevious.js';

export default function UsePrevious() {
  // TODO: call usePrevious(...) once you've implemented it in src/hooks/usePrevious.js
  // const value = usePrevious(...);
  return (
    <div className="task-page">
      <TaskInfo
        title="usePrevious"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/useprevious.jsx","src/hooks/usePrevious.js"]}
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
