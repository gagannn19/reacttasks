import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Visualize a fake component tree and let the user inspect a selected node's props/state.";

const requirements = [
  "Render a tree of sample components (name + children)",
  "Selecting a node shows its mock props/state in an inspector panel",
  "Highlight the currently selected node in the tree",
  "Consider a Tree + TreeNode + Inspector component split"
];
import { useState } from 'react';

export default function MiniReactDevToolsClone() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Mini React DevTools Clone"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/expert-projects/mini-react-devtools-clone.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Mini React DevTools Clone" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
