import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Recreate a browse UI with hero banner and horizontally-scrollable content rows.";

const requirements = [
  "A hero/banner section for a featured title",
  "Multiple horizontally-scrollable rows of titles (e.g. by genre)",
  "Clicking a title shows more details (modal or section)",
  "Consider Hero + Row + Card components"
];
import { useState } from 'react';

export default function NetflixClone() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Netflix Clone"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/intermediate-projects/netflix-clone.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Netflix Clone" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
