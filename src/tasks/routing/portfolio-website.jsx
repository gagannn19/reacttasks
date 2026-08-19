import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a personal portfolio with Home, Projects, and Contact sections as separate pages.";

const requirements = [
  "At least 3 sections navigable independently",
  "Each section has distinct sample content",
  "Persistent nav visible across all pages"
];
import { useState } from 'react';

export default function PortfolioWebsite() {

  const [page, setPage] = useState('home');
  let display;

  if(page === 'home') {
    display = <div>
      <h1>HOME PAGE</h1>
      <p>My name is Gagan Sharma and I am a frontend developer</p>
    </div>
  }
  else if(page === 'projects') {
    display = <div>
      <p>CrewDraw</p>
      <p>Crazy Four</p>
      <p>Baja Daal</p>
    </div>
  }
  else if(page === 'contact') {
    display = <div>
      <p>gmail :- gagansharmaa19@gmail.com</p>
      <p>mobile :- 87667576578</p>
    </div>
  }


  return (
    <div className="task-page">
      <TaskInfo
        title="Portfolio Website"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/portfolio-website.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <div>
            <button onClick={()=>setPage('home')} style={{margin:"5px"}}>Home</button>
            <button onClick={()=>setPage('projects')} style={{margin:"5px"}}>Projects</button>
            <button onClick={()=>setPage('contact')} style={{margin:"5px"}}>Contact</button>
          </div>
          {display}
        </div>
      </div>
    </div>
  );
}
