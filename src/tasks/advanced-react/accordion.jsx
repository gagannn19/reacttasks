import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build an accordion where clicking a header expands/collapses its panel.";

const requirements = [
  "Multiple sections, each with a header and body",
  "Clicking a header toggles that section's open state",
  "Support either single-open or multi-open mode"
];
import { useState } from 'react';

export default function Accordion() {
  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);
  return (
    <div className="task-page">
      <TaskInfo
        title="Accordion"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/advanced-react/accordion.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build the interactive pattern for "Accordion" */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
