import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that manages a dark/light theme toggle, persisted across reloads.";

const requirements = [
  "Returns the current theme and a toggle function",
  "Persists the choice (e.g. via localStorage)",
  "Demo visibly changes styling based on the theme"
];
import { useDarkMode } from '../../hooks/useDarkMode.js';

export default function UseDarkMode() {
  // TODO: call useDarkMode(...) once you've implemented it in src/hooks/useDarkMode.js
  // const value = useDarkMode(...);
  return (
    <div className="task-page">
      <TaskInfo
        title="useDarkMode"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/usedarkmode.jsx","src/hooks/useDarkMode.js"]}
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
