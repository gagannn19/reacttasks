import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A dashboard shell with stat cards, a data table, and a sidebar.";

const requirements = [
  "A row of summary stat cards",
  "A data table with sortable columns",
  "Sidebar navigation between at least two dashboard sections",
  "Consider Sidebar + StatCard + DataTable components"
];
import { useState } from 'react';

export default function AdminDashboard() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Admin Dashboard"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/intermediate-projects/admin-dashboard.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Admin Dashboard" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
