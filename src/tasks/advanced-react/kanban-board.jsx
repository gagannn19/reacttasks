import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a simple kanban board with columns (e.g. To Do/In Progress/Done) and draggable cards.";

const requirements = [
  "At least 3 columns holding cards",
  "Cards can move between columns via drag and drop",
  "Support adding a new card to a column"
];
import { useState } from 'react';

export default function KanbanBoard() {
  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);
  return (
    <div className="task-page">
      <TaskInfo
        title="Kanban Board"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/advanced-react/kanban-board.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build the interactive pattern for "Kanban Board" */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
