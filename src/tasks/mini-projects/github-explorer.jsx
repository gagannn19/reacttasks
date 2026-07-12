import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Search GitHub users and browse their public repositories.";

const requirements = [
  "Search for a username and fetch their profile",
  "List their public repos with stars/language",
  "Handle loading/error/not-found states",
  "Consider a SearchBar + UserProfile + RepoList split"
];
import { useState } from 'react';

export default function GitHubExplorer() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="GitHub Explorer"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/mini-projects/github-explorer.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "GitHub Explorer" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
