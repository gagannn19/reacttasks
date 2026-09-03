import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that copies text to the clipboard and reports success/failure.";

const requirements = [
  "Exposes a copy(text) function",
  "Tracks a 'copied' status that resets after a short delay",
  "Demo has a button that copies sample text and shows feedback"
];
import { useClipboard } from '../../hooks/useClipboard.js';

export default function UseClipboard() {

  const {copied, copy} = useClipboard();
  return (
    <div className="task-page">
      <TaskInfo
        title="useClipboard"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/useclipboard.jsx","src/hooks/useClipboard.js"]}
      />
      <div className="task-workspace">
        <div className="stack">
          
          <button onClick={()=>copy("hello world")}>Copy</button>
          <p>{copied ? "copied" : "not copied"}</p>
        </div>
      </div>
    </div>
  );
}
