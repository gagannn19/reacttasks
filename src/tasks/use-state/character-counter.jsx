import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A textarea that shows a live count of characters typed, with a max-length warning.";

const requirements = [
  "Track the input value in state",
  "Display current length / max length",
  "Show a warning style when nearing/exceeding the limit"
];
import { useState } from 'react';

export default function CharacterCounter() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Character Counter"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/character-counter.jsx"]}
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
