import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Fetch a list of users from a public API and render them.";

const requirements = [
  "Fetch from https://jsonplaceholder.typicode.com/users on mount",
  "Show a loading state while fetching",
  "Handle and display fetch errors"
];
import { useEffect, useState } from 'react';

export default function FetchUsersAPI() {
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
        title="Fetch Users API"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/fetch-users-api.jsx"]}
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
