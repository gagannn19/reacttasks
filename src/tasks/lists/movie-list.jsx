import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Display a list of movies with title, year, and rating.";

const requirements = [
  "Render each movie's title, year, and rating",
  "Seed at least 5 sample movies",
  "Sort the list by rating (bonus)"
];
import { useState } from 'react';

export default function MovieList() {
  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "Movie List"
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
        title="Movie List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/movie-list.jsx"]}
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
