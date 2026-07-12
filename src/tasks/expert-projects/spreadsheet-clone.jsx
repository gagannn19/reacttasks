import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A minimal spreadsheet grid supporting cell selection and simple formulas.";

const requirements = [
  "An editable grid of cells addressed like A1, B2, etc.",
  "Selecting and editing a cell updates its value",
  "Support at least a basic formula like =A1+B2 (bonus)",
  "Consider a Grid + Cell component split"
];
import { useState } from 'react';

export default function SpreadsheetClone() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Spreadsheet Clone"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/expert-projects/spreadsheet-clone.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Spreadsheet Clone" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
