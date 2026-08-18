import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a blog with a post list page and a post detail page.";

const requirements = [
  "A list view showing post titles",
  "Clicking a post shows its detail view",
  "A way to navigate back to the list"
];
import { useState } from 'react';

export default function BlogWebsite() {

  const [back, setBack] = useState(true);

  const titlePage = <div>
    <p onClick={()=>{setTitle('callback'); setBack(false)}} style={{border:"1px solid white", padding : "5px"}}>JS Callback</p>
    <p onClick={()=>{setTitle('promise'); setBack(false)}} style={{border:"1px solid white", padding : "5px"}}>JS Promise</p>
    <p onClick={()=>{setTitle('asyncawait'); setBack(false)}} style={{border:"1px solid white", padding : "5px"}}>JS Async/Await</p>
  </div>

  let titledisplay;

  const [title, setTitle] = useState("");

  if(title === 'callback') {
    titledisplay = <div style={{border:"5px solid white", padding:"15px"}}>
      <button onClick={()=>{setBack(true); setTitle("")}}>back</button>
      <h1>callback</h1>
      <p>A callback function is a function passed into another function as an argument. That outer function executes the callback at a later time—either right away (synchronously) or after a task finishes (asynchronously) like a timer, data fetch, or user click</p>
    </div>
  }
  else if(title === 'promise') {
    titledisplay = <div style={{border:"5px solid white", padding:"15px"}}>
      <button onClick={()=>{setBack(true); setTitle("")}}>back</button>
      <h1>promise</h1>
      <p>A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation. It acts as a placeholder for a value that is not immediately known when the promise is created</p>
    </div>
  }
  else if(title === 'asyncawait'){     
    titledisplay = <div style={{border:"5px solid white", padding:"15px"}}>
      <button onClick={()=>{setBack(true); setTitle("")}}>back</button>
      <h1>asyncawait</h1>
      <p>async and await are JavaScript keywords used to handle asynchronous operations more cleanly than using traditional Promise chains (.then() and .catch()). They act as "syntactic sugar," making asynchronous code look and behave like readable, sequential synchronous code</p>
    </div>
  }

 

  return (
    <div className="task-page">
      <TaskInfo
        title="Blog Website"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/blog-website.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {back ? titlePage : ""}
          {titledisplay}
        </div>
      </div>
    </div>
  );
}
