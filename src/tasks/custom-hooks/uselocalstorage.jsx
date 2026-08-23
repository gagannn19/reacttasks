import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that syncs a piece of state with localStorage.";

const requirements = [
  "Reads the initial value from localStorage if present",
  "Writes to localStorage whenever the value changes",
  "Falls back to a provided default when nothing is stored"
];
import { useLocalStorage } from '../../hooks/useLocalStorage.js';

export default function UseLocalStorage() {

  const [value, setValue] = useLocalStorage("name", "Gagan");

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
          {value}
          <button onClick={() => setValue("Mohan")}>
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
