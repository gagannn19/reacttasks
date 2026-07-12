import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A work/break timer following the Pomodoro technique.";

const requirements = [
  "Countdown for a work session, then a break session",
  "Start/pause/reset controls",
  "Switch automatically between work and break phases",
  "Consider a TimerDisplay + Controls component split"
];
import { useState } from 'react';

export default function PomodoroTimer() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Pomodoro Timer"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/mini-projects/pomodoro-timer.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Pomodoro Timer" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
