import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A classic todo list: add, complete, and delete tasks.";

const requirements = [
  "Add a new todo via an input + button/Enter",
  "Toggle a todo's completed state",
  "Delete a todo from the list"
];
import { useState } from 'react';

export default function TodoApp() {
  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "Todo App"
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
        title="Todo App"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/todo-app.jsx"]}
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
