import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Recreate a VS Code-like sidebar file tree plus a tabbed editor area.";

const requirements = [
  "A file tree sidebar like File Explorer above",
  "Clicking a file opens it in a tab",
  "Multiple tabs can be open with a close button each",
  "Consider Sidebar + TreeNode + TabBar + EditorPane components"
];
import { useState } from 'react';

export default function VSCodeExplorer() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="VS Code Explorer"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/expert-projects/vs-code-explorer.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "VS Code Explorer" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
