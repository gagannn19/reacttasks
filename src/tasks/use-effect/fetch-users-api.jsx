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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setData(data)
      setLoading(false)
    })
    .catch(error => {
      setError(true)
      setLoading(false)
    })

    return () => {
      
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
          <p>{loading ? 'LOADING...' : error ? 'ERROR...' : data.map((dataObject, index)=>(
            <div key={index}>
              <p>{dataObject.name}</p>
              <p>{dataObject.email}</p>
            </div>
          ))}</p>
        </div>
      </div>
    </div>
  );
}



