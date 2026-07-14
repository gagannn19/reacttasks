import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A minimal counter that increments by 1 on button click.";

const requirements = [
  "Track count in state",
  "One button increments the count",
  "Display the current count"
];
import { useState } from 'react';

export default function Counter() {

  let [value, setValue] = useState(0);

  function increase() {
    setValue(value+1);
  }

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
          <p>{value}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}
