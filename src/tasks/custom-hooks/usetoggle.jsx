import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a reusable hook that manages a boolean toggle state.";

const requirements = [
  "Returns [value, toggle] (or similar)",
  "toggle() flips the boolean",
  "Optionally accept an initial value"
];
import { useToggle } from '../../hooks/useToggle.js';

export default function UseToggle() {
  // TODO: call useToggle(...) once you've implemented it in src/hooks/useToggle.js
  // const value = useToggle(...);
  return (
    <div className="task-page">
      <TaskInfo
        title="useToggle"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/usetoggle.jsx","src/hooks/useToggle.js"]}
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
