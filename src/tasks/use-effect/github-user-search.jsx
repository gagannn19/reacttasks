import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Look up a GitHub user by username and display their public profile info.";

const requirements = [
  "Fetch from https://api.github.com/users/<username> when the user searches",
  "Show avatar, name, bio, and public repo count",
  "Handle 'user not found' gracefully"
];
import { useEffect, useState } from 'react';

export default function GitHubUserSearch() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("Error ... ");

  function handleOnClick() {
    setError(false);
    setErrorMessage("")
    setLoading(true);

    const url = `https://api.github.com/users/${username}`

    fetch(url)
    .then((response)=>{
      if(!response.ok) {
        if(response.status === 403) {
          setErrorMessage("API request limit reached")
        }
        else if(response.status === 404) {
          setErrorMessage("user not found")
        }
        else {
          setErrorMessage("something went wrong")
        }
        setError(true);
        throw new Error("Request Failed")
      }
      return response.json();
    })
    .then((data)=>{
      setData(data);
      setLoading(false)
    })
    .catch((error)=>{
      setLoading(false)
    })
  }

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
          <label>
            Enter Your Github Username :- <input type='text' name='username' value={username} onChange={(event)=>setUsername(event.target.value)}></input>
            <button onClick={handleOnClick}>search</button>
          </label>
          <div>{loading ? "loading..." : error ? errorMessage : <div>
            <p>{data.avatar_url}</p>
            <p>{data.name}</p>
            <p>{data.bio}</p>
            <p>{data.public_repos}</p>
          </div>}</div>
        </div>
      </div>
    </div>
  );
}
