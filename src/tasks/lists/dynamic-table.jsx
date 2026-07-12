import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Render tabular data from an array of objects into an HTML table dynamically.";

const requirements = [
  "Generate table headers from the object keys",
  "Render one <tr> per data row using .map()",
  "Support removing a row (bonus)"
];
import { useState } from 'react';

export default function DynamicTable() {
  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "Dynamic Table"
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
        title="Dynamic Table"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/dynamic-table.jsx"]}
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
