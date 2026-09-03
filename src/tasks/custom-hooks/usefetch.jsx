import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a generic data-fetching hook that returns data/loading/error.";

const requirements = [
  "Accepts a URL and re-fetches when it changes",
  "Returns { data, loading, error }",
  "Demo uses it against a public API endpoint"
];
import { useFetch } from '../../hooks/useFetch.js';

export default function UseFetch() {
  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")
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
          <p>{loading?"loading...":error?"error...":JSON.stringify(data)}</p>
        </div>
      </div>
    </div>
  );
}
