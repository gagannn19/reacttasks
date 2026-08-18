import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Fetch a random quote from a public API each time the user requests one.";

const requirements = [
  "Fetch a quote on mount and on button click",
  "Show a loading state while fetching",
  "Handle fetch errors with a friendly message"
];
import { useEffect, useState } from 'react';

export default function QuoteAPI() {

  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);

  function fetchfun() {
    setLoad(true);
    fetch("https://dummyjson.com/quotes/random")
    .then((res)=>{
      return res.json();
    })
    .then((quoteData)=>{
      setLoad(false);
      setData(quoteData);
    })
    .catch(()=>{
      setLoad(false);
      setErr(true)
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
        title="Quote API"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/quote-api.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <p>{load ? "loading..." : err ? "error..." : data.quote}</p>
          <button onClick={()=>{fetchfun()}}>Quote</button>
        </div>
      </div>
    </div>
  );
}
