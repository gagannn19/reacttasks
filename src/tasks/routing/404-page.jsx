import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a friendly 'page not found' view with a link back home.";

const requirements = [
  "Clear 404 messaging",
  "A button/link back to the home view",
  "Reusable so it could be shown for any unknown path"
];
import { useState } from 'react';

export default function Page404Page() {
  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="404 Page"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/404-page.jsx"]}
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
