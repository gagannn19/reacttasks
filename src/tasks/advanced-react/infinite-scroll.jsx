import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Load more list items automatically as the user scrolls near the bottom.";

const requirements = [
  "Detect when the user has scrolled near the bottom",
  "Append the next batch of items to the list",
  "Show a loading indicator while the next batch loads"
];
import { useState } from 'react';

export default function InfiniteScroll() {
  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);
  return (
    <div className="task-page">
      <TaskInfo
        title="Infinite Scroll"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/advanced-react/infinite-scroll.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build the interactive pattern for "Infinite Scroll" */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
