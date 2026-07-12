import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a dashboard shell with a sidebar and a main content area that changes per section.";

const requirements = [
  "Persistent sidebar with a few navigation items",
  "Selecting a sidebar item changes the main content",
  "Highlight the active sidebar item"
];
import { useState } from 'react';

export default function DashboardLayout() {
  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="Dashboard Layout"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/dashboard-layout.jsx"]}
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
