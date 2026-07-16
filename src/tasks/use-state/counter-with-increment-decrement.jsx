import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Extend the counter with both increment and decrement buttons, plus a reset button.";

const requirements = [
  "Increment and decrement buttons update state correctly",
  "Add a reset button that sets count back to 0",
  "Prevent count from going below 0 (bonus)"
];
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count+1);
  }
  function decrease() {
    if(count > 0) {
      setCount(count-1);
    }
    else {
      setCount(0);
    }
  }

  function reset() {
    setCount(0);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>RESET</button>
    </>
  );
}

export default function CounterWithIncrementDecrement() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Counter with Increment/Decrement"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/counter-with-increment-decrement.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <Counter />
        </div>
      </div>
    </div>
  );
}
