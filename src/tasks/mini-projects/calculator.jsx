import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A working calculator supporting basic arithmetic operations.";

const requirements = [
  "Number pad plus +, -, ×, ÷, and = buttons",
  "Correctly chains multiple operations",
  "Clear/reset the current calculation",
  "Consider a Display + Keypad component split"
];
import { useState } from 'react';

export default function Calculator() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Calculator"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/mini-projects/calculator.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Calculator" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
