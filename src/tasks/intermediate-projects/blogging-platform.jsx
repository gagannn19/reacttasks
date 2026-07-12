import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A blog with a post list, post detail view, and a basic post editor.";

const requirements = [
  "List of posts with title/excerpt",
  "Full post detail view",
  "A form to create/edit a post (stored in local state)",
  "Consider PostList + PostDetail + PostEditor components"
];
import { useState } from 'react';

export default function BloggingPlatform() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Blogging Platform"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/intermediate-projects/blogging-platform.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Blogging Platform" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
