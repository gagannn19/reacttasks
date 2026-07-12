import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a reusable modal dialog that opens/closes and can be dismissed via backdrop or Escape.";

const requirements = [
  "Modal only renders when open",
  "Closes on backdrop click and on Escape key",
  "Content is passed in via children/props"
];
import { useState } from 'react';

export default function ModalComponent() {
  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);
  return (
    <div className="task-page">
      <TaskInfo
        title="Modal Component"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/advanced-react/modal-component.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build the interactive pattern for "Modal Component" */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
