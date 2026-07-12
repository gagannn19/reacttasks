import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Search FAQ questions by keyword and reveal matching answers.";

const requirements = [
  "Seed an array of {question, answer}",
  "Filter questions by matching the query",
  "Clicking a question expands/collapses its answer"
];
import { useMemo, useState } from 'react';

export default function FAQSearch() {
  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "FAQ Search"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort `items` based on `query` (and any other controls you add)
    return items;
  }, [items, query]);
  return (
    <div className="task-page">
      <TaskInfo
        title="FAQ Search"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/faq-search.jsx"]}
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
