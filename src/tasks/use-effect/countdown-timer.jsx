import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Count down from a given number of seconds to zero.";

const requirements = [
  "Accept a starting number of seconds",
  "Tick down once per second using useEffect",
  "Stop at zero and show a 'done' message, cleaning up the interval"
];
import { use, useEffect, useState } from 'react';

export default function CountdownTimer() {

  const [number, setNumber] = useState(0);
  const [countDown, setCountDown] = useState("");
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  function handleButtonClick() {
    setCountDown(number);
    setDone(false);
    setRunning(true);
  }

  useEffect(()=>{

    if(number <= 0) {
      return
    }

    const intervalId = setInterval(()=>{
      setCountDown(prev => {
        if (prev <= 1) {
          setDone(true);
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000)

    return ()=>{
      clearInterval(intervalId)
    }

  },[running])

  
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Countdown Timer"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/countdown-timer.jsx"]}
      />
      <div className="task-workspace">
        <label>
          Give Time in Seconds
          <input type='number' name='number' value={number} onChange={(event)=>setNumber(event.target.value)}></input>
        </label>
        <button onClick={handleButtonClick}>Start Timer</button>
        <p>{done ? "Done" : countDown}</p>
      </div>
    </div>
  );
}
