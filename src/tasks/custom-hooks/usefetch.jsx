import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a generic data-fetching hook that returns data/loading/error.";

const requirements = [
  "Accepts a URL and re-fetches when it changes",
  "Returns { data, loading, error }",
  "Demo uses it against a public API endpoint"
];
import { useFetch } from '../../hooks/useFetch.js';

export default function UseFetch() {
  // TODO: call useFetch(...) once you've implemented it in src/hooks/useFetch.js
  // const value = useFetch(...);
  return (
    <div className="task-page">
      <TaskInfo
        title="useFetch"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/usefetch.jsx","src/hooks/useFetch.js"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: use the hook's return value in this demo UI */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
