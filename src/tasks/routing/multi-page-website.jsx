import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a small multi-page site (Home, About, Contact) with client-side navigation.";

const requirements = [
  "At least 3 distinct 'pages'",
  "Nav links/buttons switch between them",
  "The active page is visually indicated in the nav"
];
import { useState } from 'react';

export default function MultiPageWebsite() {
  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="Multi-page Website"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/multi-page-website.jsx"]}
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
