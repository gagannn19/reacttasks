import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A minimal counter that increments by 1 on button click.";

const requirements = [
  "Track count in state",
  "One button increments the count",
  "Display the current count"
];
import { useState } from 'react';

export default function Counter() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Counter"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/counter.jsx"]}
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
