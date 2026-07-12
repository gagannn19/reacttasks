import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a tabbed interface that shows one panel at a time based on the active tab.";

const requirements = [
  "A row of tab buttons plus a content area",
  "Clicking a tab makes it active and shows its panel",
  "The active tab is visually distinct"
];
import { useState } from 'react';

export default function Tabs() {
  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);
  return (
    <div className="task-page">
      <TaskInfo
        title="Tabs"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/advanced-react/tabs.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build the interactive pattern for "Tabs" */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
