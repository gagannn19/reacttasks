import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Filter a list of items using a category dropdown/button group.";

const requirements = [
  "Seed items that each have a category field",
  "Selecting a category filters the visible items",
  "Include an 'All' option that clears the filter"
];
import { useMemo, useState } from 'react';

export default function FilterByCategory() {
  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "Filter by Category"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort `items` based on `query` (and any other controls you add)
    return items;
  }, [items, query]);
  return (
    <div className="task-page">
      <TaskInfo
        title="Filter by Category"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/filter-by-category.jsx"]}
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
