import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a reusable hook for counter logic with increment/decrement/reset.";

const requirements = [
  "Returns the count plus increment/decrement/reset functions",
  "Accepts an optional initial value and step",
  "Demo component uses the hook instead of local useState"
];
import { useCounter } from '../../hooks/useCounter.js';

export default function UseCounter() {
  // TODO: call useCounter(...) once you've implemented it in src/hooks/useCounter.js
  // const value = useCounter(...);
  return (
    <div className="task-page">
      <TaskInfo
        title="useCounter"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/usecounter.jsx","src/hooks/useCounter.js"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: use the hook's return value in this demo UI */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
