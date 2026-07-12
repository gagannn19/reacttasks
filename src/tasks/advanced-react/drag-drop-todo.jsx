import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Reorder todo items by dragging and dropping them.";

const requirements = [
  "Items can be dragged and dropped into a new position",
  "The underlying array order updates to match",
  "Visually indicate the item being dragged (bonus)"
];
import { useState } from 'react';

export default function DragDropTodo() {
  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);
  return (
    <div className="task-page">
      <TaskInfo
        title="Drag & Drop Todo"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/advanced-react/drag-drop-todo.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build the interactive pattern for "Drag & Drop Todo" */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
