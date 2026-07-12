import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Search a small emoji dataset by name/keyword.";

const requirements = [
  "Seed an array of {emoji, name, keywords}",
  "Filter by matching the query against name or keywords",
  "Render matching emoji in a grid"
];
import { useMemo, useState } from 'react';

export default function EmojiSearch() {
  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "Emoji Search"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort `items` based on `query` (and any other controls you add)
    return items;
  }, [items, query]);
  return (
    <div className="task-page">
      <TaskInfo
        title="Emoji Search"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/emoji-search.jsx"]}
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
