import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Given a birth date, calculate and display the person's current age.";

const requirements = [
  "Accept a date of birth via a date input",
  "Compute age in years (accounting for whether the birthday has passed this year)",
  "Show an error/prompt state until a date is chosen"
];
import { useState } from 'react';

export default function AgeCalculator() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Age Calculator"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/age-calculator.jsx"]}
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
