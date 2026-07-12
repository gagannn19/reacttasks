import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Search a movie API/dataset and show results with poster, title, and year.";

const requirements = [
  "A search input triggers fetching/filtering movies",
  "Render results in a grid of cards",
  "Show a details view/modal for a selected movie",
  "Consider a SearchBar + MovieGrid + MovieCard split"
];
import { useState } from 'react';

export default function MovieSearchApp() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Movie Search App"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/mini-projects/movie-search-app.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Movie Search App" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
