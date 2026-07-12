import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A password input with an eye icon/button to toggle showing the raw text.";

const requirements = [
  "Input type toggles between 'password' and 'text'",
  "A button/icon toggles the boolean state",
  "Reflect the current mode in the toggle button's label"
];
import { useState } from 'react';

export default function ShowHidePassword() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Show/Hide Password"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/show-hide-password.jsx"]}
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
