import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Filter a product catalog by name using a search input.";

const requirements = [
  "Seed an array of sample products",
  "Filter by matching the product name against the query",
  "Highlight the matching substring (bonus)"
];
import { useMemo, useState } from 'react';

export default function SearchProducts() {
  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "Search Products"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort `items` based on `query` (and any other controls you add)
    return items;
  }, [items, query]);
  return (
    <div className="task-page">
      <TaskInfo
        title="Search Products"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/search-products.jsx"]}
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
