import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a dashboard shell with a sidebar and a main content area that changes per section.";

const requirements = [
  "Persistent sidebar with a few navigation items",
  "Selecting a sidebar item changes the main content",
  "Highlight the active sidebar item"
];
import { useState } from 'react';

export default function DashboardLayout() {

  const [page, setPage] = useState('home');
  const [showDash, setShowDash] = useState(false);
  let display;

  if(page === 'home') {
    display = <div style={{marginLeft:"40px"}}>
      <h1 style={{display:"inline", verticalAlign: "middle"}}>This is the HomePage of Website</h1>
    </div>
  }
  else if(page === 'about') {
    display = <div style={{marginLeft:"40px"}}>
      <h1>about</h1>
      <p>name-gagan</p>
      <p>frontend developer</p>
    </div>
  }
  else if(page === 'projects') {
    display = <div style={{marginLeft:"40px"}}>
      <h1>projects</h1>
      <p>1. crewdraw</p>
      <p>2. crazy 4</p>
      <p>3. baja daal</p>
    </div>
  }
  else if(page === 'contact') {
    display = <div style={{marginLeft:"40px"}}>
      <h1>contact</h1>
      <p>email :- gagansharmaa19@gmail.com</p>
      <p>ph. :- 782482347</p>
    </div>
  }
  else if(page === 'education') {
    display = <div style={{marginLeft:"40px"}}>
      <h1>education</h1>
      <p>mca</p>
      <p>bca</p>
    </div>
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Dashboard Layout"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/dashboard-layout.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack" style={{display:"flex", flexDirection:"row"}}>
          {showDash ? <div style={{display:"flex", flexDirection:"column", width:"100px"}}>
              <button onClick={()=>setShowDash(prev => !prev)} style={{margin:"20px"}}>☰</button>
              <button onClick={()=>setPage('home')}  style={{fontSize:"20px", border : page === 'home' && "1px solid white"}}>Home</button>
              <button onClick={()=>setPage('about')} style={{fontSize:"20px", border : page === 'about' && "1px solid white"}}>About</button>
              <button onClick={()=>setPage('projects')} style={{fontSize:"20px", border : page === 'projects' && "1px solid white"}}>Projects</button>
              <button onClick={()=>setPage('contact')} style={{fontSize:"20px", border : page === 'contact' && "1px solid white"}}>Contact</button>
              <button onClick={()=>setPage('education')} style={{fontSize:"20px", border : page === 'education' && "1px solid white"}}>Education</button>
            </div> : <button onClick={()=>setShowDash(prev => !prev)} style={{margin:"20px", width:"60px", height : "30px"}}>☰</button>}
          
          {display}
          
        </div>
      </div>
    </div>
  );
}
