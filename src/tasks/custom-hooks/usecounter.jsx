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
  const [value, increament, decreament, reset] = useCounter(10);
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
          <p>{value}</p>
          <button onClick={increament}>+</button>
          <button onClick={decreament}>-</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
}
