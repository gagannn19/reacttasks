import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Show a breadcrumb trail that reflects the current simulated navigation depth.";

const requirements = [
  "Breadcrumb updates as the user navigates deeper",
  "Clicking a breadcrumb segment jumps back to that level",
  "Home is always the first breadcrumb"
];
import { useState } from 'react';

export default function BreadcrumbNavigation() {
  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="Breadcrumb Navigation"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/breadcrumb-navigation.jsx"]}
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
