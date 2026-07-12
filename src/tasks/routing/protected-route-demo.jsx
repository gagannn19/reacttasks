import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a page that's only accessible when 'logged in', otherwise showing a login prompt.";

const requirements = [
  "A boolean 'authenticated' state (toggle for demo purposes)",
  "Protected content only renders when authenticated",
  "Show a login prompt/button when not authenticated"
];
import { useState } from 'react';

export default function ProtectedRouteDemo() {
  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="Protected Route Demo"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/protected-route-demo.jsx"]}
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
