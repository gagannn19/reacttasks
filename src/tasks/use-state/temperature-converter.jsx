import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Convert a temperature between Celsius and Fahrenheit as the user types.";

const requirements = [
  "Two inputs (C and F) stay in sync with each other",
  "Conversion math is correct in both directions",
  "Handle non-numeric input gracefully"
];
import { useState } from 'react';

export default function TemperatureConverter() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Temperature Converter"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/temperature-converter.jsx"]}
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
