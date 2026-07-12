import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Track daily habits and whether they were completed each day.";

const requirements = [
  "Add a habit to track",
  "Mark a habit complete/incomplete for today",
  "Show a simple streak or completion count",
  "Consider a HabitList + HabitItem component split"
];
import { useState } from 'react';

export default function HabitTracker() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Habit Tracker"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/mini-projects/habit-tracker.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Habit Tracker" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
