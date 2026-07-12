import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Render only the visible slice of a very large list for performance.";

const requirements = [
  "Render a list of a few thousand items without lag",
  "Only render the rows currently in/near the viewport",
  "Scrolling updates which rows are rendered"
];
import { useState } from 'react';

export default function VirtualizedList() {
  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);
  return (
    <div className="task-page">
      <TaskInfo
        title="Virtualized List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/advanced-react/virtualized-list.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build the interactive pattern for "Virtualized List" */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
