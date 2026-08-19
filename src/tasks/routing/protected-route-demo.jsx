import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a page that's only accessible when 'logged in', otherwise showing a login prompt.";

const requirements = [
  "A boolean 'authenticated' state (toggle for demo purposes)",
  "Protected content only renders when authenticated",
  "Show a login prompt/button when not authenticated"
];
import { useState } from 'react';

export default function ProtectedRouteDemo() {

  const [auth, setAuth] = useState(false);
  const [page, setPage] = useState('login');
  let display;
  if(page === 'login') {
    display = <div>
      <label>
        Enter Gmail :- <input type='email'></input>
      </label>
      <label>
        Enter Password :- <input type='password'></input>
      </label>
      <button onClick={()=>{setPage('info'); setAuth(true)}}>Log In</button>
    </div>
  }
  else if(page === 'info' && auth === true) {
    display = <div>
      <p>hulululu</p>
    </div>
  }
 
  return (
    <div className="task-page">
      <TaskInfo
        title="Protected Route Demo"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/protected-route-demo.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {display}
            
        </div>
      </div>
    </div>
  );
}
