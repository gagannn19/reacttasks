import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Fetch and display a random dog image, with a button to get a new one.";

const requirements = [
  "Fetch from https://dog.ceo/api/breeds/image/random on mount and on button click",
  "Show a loading indicator while fetching",
  "Handle fetch failures"
];
import { useEffect, useState } from 'react';

export default function RandomDogImage() {
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
        title="Random Dog Image"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/random-dog-image.jsx"]}
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
