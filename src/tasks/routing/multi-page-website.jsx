import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a small multi-page site (Home, About, Contact) with client-side navigation.";

const requirements = [
  "At least 3 distinct 'pages'",
  "Nav links/buttons switch between them",
  "The active page is visually indicated in the nav"
];
import { useState } from 'react';

export default function MultiPageWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  let pageContent;
  if (currentPage === 'home') {
    pageContent = <div>
      <h1>HOME PAGE</h1>
      <p>yeah its home...</p>
    </div>;
  } else if (currentPage === 'about') {
    pageContent = <div>
      <h1>About</h1>
      <p>This is a react task</p>
    </div>;
  } else if (currentPage === 'contact') {
    pageContent = <div>
      <h1>Contact</h1>
      <p>Ph. 8756746455</p>
    </div>;
  }

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }
  return (
    <div className="task-page">
      <TaskInfo
        title="Multi-page Website"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/multi-page-website.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <div className="row">
            <button style={currentPage == 'home' ? {color:"red"} : {}} onClick={()=>setCurrentPage('home')}>HOME</button>
            <button style={currentPage == 'about' ? {color:"red"} : {}} onClick={()=>setCurrentPage('about')}>ABOUT</button>
            <button style={currentPage == 'contact' ? {color:"red"} : {}} onClick={()=>setCurrentPage('contact')}>CONTACT</button>
          </div>
            {pageContent}
        </div>
      </div>
    </div>
  );
}
