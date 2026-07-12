import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A social-media style like button that toggles liked state and updates a like count.";

const requirements = [
  "Clicking toggles between liked/unliked",
  "Like count increases/decreases accordingly",
  "Button style changes when liked"
];
import { useState } from 'react';

export default function LikeButton() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Like Button"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/like-button.jsx"]}
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
