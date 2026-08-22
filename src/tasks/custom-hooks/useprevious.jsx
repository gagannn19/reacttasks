import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that returns the previous value of a piece of state/props.";

const requirements = [
  "Returns the value from the render before the latest one",
  "Uses a ref internally rather than state",
  "Demo shows current vs previous value side by side"
];
import { usePrevious } from '../../hooks/usePrevious.js';
import { useState } from 'react';

export default function UsePrevious() {
  
  const [num, setNum] = useState(0);
  const [current, setCurrent] = useState(0);
  const previous = usePrevious(current);


  return (
    <div className="task-page">
      <TaskInfo
        title="usePrevious"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/useprevious.jsx","src/hooks/usePrevious.js"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <label>
            Enter Any Number here :- <input type='number' value={num} onChange={(event)=>setNum(Number(event.target.value))}></input>
            <button onClick={()=>setCurrent(num)}>Save</button>
          </label>
          {previous}
          
        </div>
      </div>
    </div>
  );
}
