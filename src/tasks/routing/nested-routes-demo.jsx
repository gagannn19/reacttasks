import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate nested navigation, e.g. a Settings page with Profile/Security sub-sections.";

const requirements = [
  "A top-level page with its own sub-navigation",
  "Sub-navigation switches nested content without leaving the parent page",
  "Track both the parent and child selection in state"
];
import { useState } from 'react';

export default function NestedRoutesDemo() {
  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="Nested Routes Demo"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/nested-routes-demo.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <div className="row">
            {/* TODO: nav buttons that call setCurrentPage(...) */}
          </div>
          {/* TODO: render the component for currentPage */}
        </div>
      </div>
    </div>
  );
}
