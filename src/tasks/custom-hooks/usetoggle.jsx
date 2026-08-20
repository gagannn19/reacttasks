import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a reusable hook that manages a boolean toggle state.";

const requirements = [
  "Returns [value, toggle] (or similar)",
  "toggle() flips the boolean",
  "Optionally accept an initial value"
];
import { useToggle } from '../../hooks/useToggle.js';

export default function UseToggle() {
  
  const [buttonClicked, toggleButton] = useToggle(false);

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
          <button onClick={toggleButton}>Click</button>
          {buttonClicked ? <p>button clicked</p> : <p>not clicked</p>}
        </div>
      </div>
    </div>
  );
}
