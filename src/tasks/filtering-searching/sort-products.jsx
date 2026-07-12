import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Sort a product list by price or name, ascending or descending.";

const requirements = [
  "A control to choose the sort field (price/name)",
  "A control to choose direction (asc/desc)",
  "Sorting must not mutate the original array"
];
import { useMemo, useState } from 'react';

export default function SortProducts() {
  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "Sort Products"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort `items` based on `query` (and any other controls you add)
    return items;
  }, [items, query]);
  return (
    <div className="task-page">
      <TaskInfo
        title="Sort Products"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/sort-products.jsx"]}
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
