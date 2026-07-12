import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Fetch and display a random cat fact, with a button to get another.";

const requirements = [
  "Fetch from https://catfact.ninja/fact on mount and on button click",
  "Show a loading state between fetches",
  "Handle fetch failures"
];
import { useEffect, useState } from 'react';

export default function RandomCatFacts() {
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
        title="Random Cat Facts"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/random-cat-facts.jsx"]}
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
