import TaskInfo from '../../components/TaskInfo.jsx';

const description = "As the user types, show a dropdown of matching suggestions below the input.";

const requirements = [
  "Show up to N matching suggestions as the query changes",
  "Clicking a suggestion fills the input",
  "Hide the dropdown when there are no matches or input is empty"
];
import { useMemo, useState } from 'react';

export default function LiveSearchSuggestions() {
  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "Live Search Suggestions"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort `items` based on `query` (and any other controls you add)
    return items;
  }, [items, query]);
  return (
    <div className="task-page">
      <TaskInfo
        title="Live Search Suggestions"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/live-search-suggestions.jsx"]}
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
