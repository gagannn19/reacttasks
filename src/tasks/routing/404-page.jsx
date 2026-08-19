import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a friendly 'page not found' view with a link back home.";

const requirements = [
  "Clear 404 messaging",
  "A button/link back to the home view",
  "Reusable so it could be shown for any unknown path"
];
import { useState } from 'react';

export default function Page404Page() {

  const [page, setPage] = useState('err');
  let display;
  if(page === 'err') {
    display = <div>
      <button onClick={()=>setPage('home')}>back</button>
      <p>page not found</p>
    </div>
  }
  else if(page === 'home') {
    display = <div>
      <h1>home page</h1>
      <p>welcome to the home page</p>
    </div>
  }
   
  return (
    <div className="task-page">
      <TaskInfo
        title="404 Page"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/404-page.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {display}
        </div>
      </div>
    </div>
  );
}
