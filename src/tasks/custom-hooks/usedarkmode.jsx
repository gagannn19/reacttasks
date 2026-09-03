import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that manages a dark/light theme toggle, persisted across reloads.";

const requirements = [
  "Returns the current theme and a toggle function",
  "Persists the choice (e.g. via localStorage)",
  "Demo visibly changes styling based on the theme"
];
import { useDarkMode } from '../../hooks/useDarkMode.js';

export default function UseDarkMode() {

  const { isDark, toggleDarkMode } = useDarkMode();

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

          <div style={{background:isDark?"black" : "white"}}>
            <button style={{color:isDark?"white":"black", background:isDark?"black":"white"}} onClick={()=>{toggleDarkMode(true)}}>DARK MODE</button>
          </div>

        </div>
      </div>
    </div>
  );
}
