import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate navigating from a product list to a detail view for the selected product.";

const requirements = [
  "A list of products, each clickable",
  "Selecting one shows its full detail view",
  "A back action returns to the list"
];
import { useState } from 'react';

export default function ProductDetailsPage() {
  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="Product Details Page"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/product-details-page.jsx"]}
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
