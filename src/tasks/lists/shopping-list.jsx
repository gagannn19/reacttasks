import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Track shopping items with quantities, and mark items as picked up.";

const requirements = [
  "Add an item with a name and quantity",
  "Mark an item as picked up (visually distinct)",
  "Remove an item from the list"
];
import { useState } from 'react';

export default function ShoppingList() {
  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "Shopping List"
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
        title="Shopping List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/shopping-list.jsx"]}
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
