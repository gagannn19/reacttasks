import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A tree-view file explorer supporting nested folders and files.";

const requirements = [
  "Recursive rendering of nested folders/files",
  "Expand/collapse folders",
  "Support adding/removing a file or folder (in local state)",
  "Consider a recursive FileTree/TreeNode component"
];
import { useState } from 'react';

export default function FileExplorer() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="File Explorer"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/expert-projects/file-explorer.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "File Explorer" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
