import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Extend the counter with both increment and decrement buttons, plus a reset button.";

const requirements = [
  "Increment and decrement buttons update state correctly",
  "Add a reset button that sets count back to 0",
  "Prevent count from going below 0 (bonus)"
];
import { useState } from 'react';

export default function CounterWithIncrementDecrement() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Counter with Increment/Decrement"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/counter-with-increment-decrement.jsx"]}
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
