import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A single button that switches between ON and OFF state and shows the current status.";

const requirements = [
  "Boolean state tracks on/off",
  "Button label and color reflect the current state",
  "Clicking flips the state"
];
import { useState } from 'react';

export default function ToggleButtonONOFF() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Toggle Button (ON/OFF)"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/toggle-button-on-off.jsx"]}
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
