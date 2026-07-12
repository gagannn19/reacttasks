import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a personal portfolio with Home, Projects, and Contact sections as separate pages.";

const requirements = [
  "At least 3 sections navigable independently",
  "Each section has distinct sample content",
  "Persistent nav visible across all pages"
];
import { useState } from 'react';

export default function PortfolioWebsite() {
  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="Portfolio Website"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/portfolio-website.jsx"]}
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
