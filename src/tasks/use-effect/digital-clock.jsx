import TaskInfo from '../../components/TaskInfo.jsx';
import { useEffect, useState } from 'react';

const description = "Display the current time and update it every second.";

const requirements = [
  "Use useEffect + setInterval to tick every second",
  "Clean up the interval on unmount",
  "Format the time as HH:MM:SS"
];

export default function DigitalClock() {

  // Store the current time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {

    // Start the interval once
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup: stop the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };

  }, []);

  return (
    <div className="task-page">
      <TaskInfo
        title="Digital Clock"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/digital-clock.jsx"]}
      />

      <div className="task-workspace">
        <h1>{time}</h1>
      </div>
    </div>
  );
}
