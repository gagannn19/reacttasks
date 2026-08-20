import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a collapsible sidebar with navigation items and active-item highlighting.";

const requirements = [
  "Sidebar can collapse/expand",
  "Clicking an item marks it active and shows related content",
  "Active item is visually distinct"
];
import { useState } from 'react';

export default function SidebarNavigation() {

  const [page, setPage] = useState('home');
  const [sideBar, setSideBar] = useState(false);
  let display;

  

  if(page === 'home') {
    display = <div style={{marginLeft : "30px", display:"inline", width:"500px"}}>
      <h1>This is home page</h1>
    </div>
  }
  else if(page === 'about') {
    display = <div style={{marginLeft : "30px", display:"inline", width:"500px"}}>
      <h1>This is about page</h1>
    </div>
  }
  else if(page === 'setting') {
    display = <div style={{marginLeft : "30px", display:"inline", width:"500px"}}>
      <h1>This is setting page</h1>
    </div>
  }
  else if(page === 'connect') {
    display = <div style={{marginLeft : "30px", display:"inline", width:"500px"}}>
      <h1>This is connect page</h1>
    </div>
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Sidebar Navigation"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/sidebar-navigation.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack" style={{display:"flex", flexDirection:"row"}} >

          <div style={{display:"flex", flexDirection:"column"}}>
            {sideBar ? <div style={{display:"flex", flexDirection:"column", width:"100px"}}>
              <button onClick={()=>setSideBar(prev=>!prev)} style={{width:"100px"}}>{"<=="}</button>
              <button onClick={()=>setPage('home')} style={{border : page==='home' ? "1px solid white" : ""}}>Home</button>
              <button onClick={()=>setPage('about')} style={{border : page==='about' ? "1px solid white" : ""}}>About</button>
              <button onClick={()=>setPage('setting')} style={{border : page==='setting' ? "1px solid white" : ""}}>Setting</button>
              <button onClick={()=>setPage('connect')} style={{border : page==='connect' ? "1px solid white" : ""}}>Connect</button>
            </div> : ""}

            {!sideBar && <button onClick={()=>setSideBar(prev=>!prev)} style={{width:"30px"}}>☰</button>}
          </div>

          

          {display}
        </div>
      </div>
    </div>
  );
}
