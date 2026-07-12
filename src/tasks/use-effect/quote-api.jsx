import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Fetch a random quote from a public API each time the user requests one.";

const requirements = [
  "Fetch a quote on mount and on button click",
  "Show a loading state while fetching",
  "Handle fetch errors with a friendly message"
];
import { useEffect, useState } from 'react';

export default function QuoteAPI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: run the side effect this task needs (timer, fetch, subscription...)
    // Remember to return a cleanup function if you start an interval/timeout/subscription.

    return () => {
      // TODO: cleanup here if needed
    };
  }, []);
  return (
    <div className="task-page">
      <TaskInfo
        title="Quote API"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/quote-api.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: render `data` / loading / error states */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
