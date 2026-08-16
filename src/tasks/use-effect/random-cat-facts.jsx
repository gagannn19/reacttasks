import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Fetch and display a random cat fact, with a button to get another.";

const requirements = [
  "Fetch from https://catfact.ninja/fact on mount and on button click",
  "Show a loading state between fetches",
  "Handle fetch failures"
];
import { useEffect, useState } from 'react';

export default function RandomCatFacts() {
  const [data, setData] = useState({});
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);

  function fetchfun() {
    setLoad(true);
    fetch("https://catfact.ninja/fact")
    .then((response)=>{
      return response.json();
    })
    .then((returnedData)=>{
      setData(returnedData);
      setLoad(false);
    })
    .catch((error)=>{
      setErr(true);
      setLoad(false);
    })
  }

  useEffect(() => {
    fetchfun();
    return () => {

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
          <button onClick={()=>{fetchfun()}}>More Thoughts</button>
          {load ? <p>loading ...</p> : err ? <p>error ...</p> : <p>{data.fact}</p>}
          
        </div>
      </div>
    </div>
  );
}
