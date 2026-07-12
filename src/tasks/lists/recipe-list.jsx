import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Display a list of recipes with name, cook time, and ingredient count.";

const requirements = [
  "Render each recipe as a card",
  "Clicking a recipe expands/collapses its ingredient list",
  "Seed at least 4 sample recipes"
];
import { useState } from 'react';

export default function RecipeList() {
  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "Recipe List"
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
        title="Recipe List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/recipe-list.jsx"]}
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
