import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Filter products using a min/max price range.";

const requirements = [
  "Two numeric inputs (or a range slider) for min and max price",
  "Only show items within the selected range",
  "Handle an empty/invalid range gracefully"
];
import { useMemo, useState } from 'react';

export default function FilterByPrice() {
  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "Filter by Price"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort `items` based on `query` (and any other controls you add)
    return items;
  }, [items, query]);
  return (
    <div className="task-page">
      <TaskInfo
        title="Filter by Price"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/filter-by-price.jsx"]}
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
