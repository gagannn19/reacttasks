import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A live markdown editor with a side-by-side rendered preview.";

const requirements = [
  "Textarea for raw markdown input",
  "Live preview rendering basic markdown (headers, bold, lists, etc.)",
  "Keep editor and preview in sync as the user types",
  "Consider an Editor + Preview component split"
];
import { useState } from 'react';

export default function MarkdownEditor() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Markdown Editor"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/mini-projects/markdown-editor.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Markdown Editor" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
