import TaskInfo from '../../components/TaskInfo.jsx';

const description = "As the user types in an input, mirror the text live in a preview area below.";

const requirements = [
  "Controlled input stores its value in state",
  "Preview area re-renders with the latest value on every keystroke",
  "Show a placeholder message when the input is empty"
];
import { useState } from 'react';

export default function LiveTextPreview() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Live Text Preview"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/live-text-preview.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: render UI driven by state, plus controls that call your setters */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
