import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Filter a list of users by name as the user types in a search box.";

const requirements = [
  "Seed an array of sample users",
  "Filter case-insensitively as the query changes",
  "Show a 'no results' message when nothing matches"
];
import { useMemo, useState } from 'react';

export default function SearchUsers() {
  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "Search Users"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort `items` based on `query` (and any other controls you add)
    return items;
  }, [items, query]);
  return (
    <div className="task-page">
      <TaskInfo
        title="Search Users"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/search-users.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <input
            className="input"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* TODO: render visibleItems */}
        </div>
      </div>
    </div>
  );
}
