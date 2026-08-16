import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Fetch and display a random dog image, with a button to get a new one.";

const requirements = [
  "Fetch from https://dog.ceo/api/breeds/image/random on mount and on button click",
  "Show a loading indicator while fetching",
  "Handle fetch failures"
];
import { useEffect, useState } from 'react';

export default function RandomDogImage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function fetchfun() {
    setLoading(true)
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=>{
      return res.json()
    })
    .then((dogImageData)=>{
      setData(dogImageData);
      setLoading(false);
    })
    .catch((error)=>{
      setError(true);
      setLoading(false);
    })
  }

  function btnClicked() {
    fetchfun();
  }

  useEffect(() => {
    fetchfun();
    return () => {

    };
  }, []);

  return (
    <div className="task-page">
      <TaskInfo
        title="Random Dog Image"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/random-dog-image.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <button onClick={()=>btnClicked()}>Dog Image</button>
          {loading ? <p>loading ... </p> : error && <p>error ...</p>}
          <img src={data.message} height={200} width={200}></img>
        </div>
      </div>
    </div>
  );
}
