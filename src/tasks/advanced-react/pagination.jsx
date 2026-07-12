import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Split a list into pages with Previous/Next and page-number controls.";

const requirements = [
  "Only render the current page's slice of items",
  "Previous/Next navigate correctly at the boundaries",
  "Show the current page and total page count"
];
import { useState } from 'react';

export default function Pagination() {
  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);
  return (
    <div className="task-page">
      <TaskInfo
        title="Pagination"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/advanced-react/pagination.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build the interactive pattern for "Pagination" */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
