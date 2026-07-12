import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Display a list of employees with name, department, and role.";

const requirements = [
  "Render each employee as a card/row",
  "Seed at least 5 sample employees",
  "Group or label employees by department (bonus)"
];
import { useState } from 'react';

export default function EmployeeDirectory() {
  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "Employee Directory"
  ]);

  function handleAdd(item) {
    // TODO: add item to items
  }

  function handleRemove(id) {
    // TODO: remove item by id from items
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Employee Directory"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/employee-directory.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: render items.map(...) as a list, plus add/remove controls */}
          <p>{items.length} items</p>
        </div>
      </div>
    </div>
  );
}
