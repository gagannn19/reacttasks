import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Combine a search box and a sort control operating on the same list.";

const requirements = [
  "Filtering and sorting both apply to the same source array",
  "Order of operations should not matter (filter then sort)",
  "Use useMemo to avoid recomputing needlessly (bonus)"
];
import { useMemo, useState } from 'react';

export default function SearchSortCombined() {
  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "Search + Sort Combined"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort `items` based on `query` (and any other controls you add)
    return items;
  }, [items, query]);
  return (
    <div className="task-page">
      <TaskInfo
        title="Search + Sort Combined"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/search-sort-combined.jsx"]}
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
