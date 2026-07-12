import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A Trello-style board with lists and draggable cards.";

const requirements = [
  "Multiple lists, each holding cards",
  "Add a new card to a list",
  "Drag cards between lists",
  "Consider Board + List + Card components"
];
import { useState } from 'react';

export default function TrelloClone() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Trello Clone"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/intermediate-projects/trello-clone.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Trello Clone" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
