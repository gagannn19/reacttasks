import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Search a hardcoded list of countries by name.";

const requirements = [
  "Seed at least 15-20 sample countries",
  "Filter as the user types",
  "Show a flag emoji or code next to each result (bonus)"
];
import { useMemo, useState } from 'react';

export default function CountrySearch() {
  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "Country Search"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort `items` based on `query` (and any other controls you add)
    return items;
  }, [items, query]);
  return (
    <div className="task-page">
      <TaskInfo
        title="Country Search"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/country-search.jsx"]}
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
