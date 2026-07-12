import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Calculate BMI from a user's height and weight and show the resulting category.";

const requirements = [
  "Inputs for height (cm) and weight (kg)",
  "Compute BMI = weight / (height in meters)^2",
  "Show category (underweight/normal/overweight/obese) based on the result"
];
import { useState } from 'react';

export default function BMICalculator() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="BMI Calculator"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/bmi-calculator.jsx"]}
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
