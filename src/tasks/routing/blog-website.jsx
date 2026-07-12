import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a blog with a post list page and a post detail page.";

const requirements = [
  "A list view showing post titles",
  "Clicking a post shows its detail view",
  "A way to navigate back to the list"
];
import { useState } from 'react';

export default function BlogWebsite() {
  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="Blog Website"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/blog-website.jsx"]}
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
