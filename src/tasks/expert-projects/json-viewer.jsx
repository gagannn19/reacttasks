import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Pretty-print and let the user collapse/expand nested JSON data.";

const requirements = [
  "Recursively render arbitrarily nested objects/arrays",
  "Collapse/expand any object or array node",
  "Syntax-highlight keys, strings, numbers, booleans distinctly",
  "Consider a recursive JsonNode component"
];
import { useState } from 'react';

export default function JSONViewer() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="JSON Viewer"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/expert-projects/json-viewer.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "JSON Viewer" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
