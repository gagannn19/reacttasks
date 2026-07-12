import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that copies text to the clipboard and reports success/failure.";

const requirements = [
  "Exposes a copy(text) function",
  "Tracks a 'copied' status that resets after a short delay",
  "Demo has a button that copies sample text and shows feedback"
];
import { useClipboard } from '../../hooks/useClipboard.js';

export default function UseClipboard() {
  // TODO: call useClipboard(...) once you've implemented it in src/hooks/useClipboard.js
  // const value = useClipboard(...);
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
          {/* TODO: use the hook's return value in this demo UI */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
