import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A fuller kanban board: columns, drag-and-drop cards, and per-card details.";

const requirements = [
  "Multiple columns with draggable cards, reorderable within and across columns",
  "Add/edit/delete a card, including a title and description",
  "Persist board state in local state (or localStorage) across interactions",
  "Consider Board + Column + Card + CardModal components"
];
import { useState } from 'react';

export default function KanbanWithDragDrop() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Kanban with Drag & Drop"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/expert-projects/kanban-with-drag-drop.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Kanban with Drag & Drop" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
