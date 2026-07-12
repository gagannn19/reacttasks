import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a collapsible sidebar with navigation items and active-item highlighting.";

const requirements = [
  "Sidebar can collapse/expand",
  "Clicking an item marks it active and shows related content",
  "Active item is visually distinct"
];
import { useState } from 'react';

export default function SidebarNavigation() {
  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="Sidebar Navigation"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/sidebar-navigation.jsx"]}
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
