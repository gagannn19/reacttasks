import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Search recipes by ingredient or name and view full recipe details.";

const requirements = [
  "Search/filter a list of recipes",
  "Show recipe details including ingredients and steps",
  "Handle a 'no recipes found' state",
  "Consider a SearchBar + RecipeList + RecipeDetail split"
];
import { useState } from 'react';

export default function RecipeFinder() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Recipe Finder"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/mini-projects/recipe-finder.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Recipe Finder" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
