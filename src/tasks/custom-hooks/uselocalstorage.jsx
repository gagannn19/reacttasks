import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that syncs a piece of state with localStorage.";

const requirements = [
  "Reads the initial value from localStorage if present",
  "Writes to localStorage whenever the value changes",
  "Falls back to a provided default when nothing is stored"
];
import { useLocalStorage } from '../../hooks/useLocalStorage.js';

export default function UseLocalStorage() {
  // TODO: call useLocalStorage(...) once you've implemented it in src/hooks/useLocalStorage.js
  // const value = useLocalStorage(...);
  return (
    <div className="task-page">
      <TaskInfo
        title="useLocalStorage"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/uselocalstorage.jsx","src/hooks/useLocalStorage.js"]}
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
