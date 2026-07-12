import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Look up a GitHub user by username and display their public profile info.";

const requirements = [
  "Fetch from https://api.github.com/users/<username> when the user searches",
  "Show avatar, name, bio, and public repo count",
  "Handle 'user not found' gracefully"
];
import { useEffect, useState } from 'react';

export default function GitHubUserSearch() {
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
        title="GitHub User Search"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/github-user-search.jsx"]}
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
