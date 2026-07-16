import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A password input with an eye icon/button to toggle showing the raw text.";

const requirements = [
  "Input type toggles between 'password' and 'text'",
  "A button/icon toggles the boolean state",
  "Reflect the current mode in the toggle button's label"
];
import { useState } from 'react';

function Password() {
  const [state, setState] = useState(true);

  function change() {
    if(state === true) {
      setState(false);
    }
    else{
      setState(true);
    }
  }
  return(
    <div style={{display:"flex", justifyContent:"center", gap:"5px"}}>
      <input type={state ? "password" : "text"} style={{display:"inline-block", width:"200px"}} >
        
      </input>
      <img src={state ? "https://www.svgrepo.com/show/380010/eye-password-show.svg" : "https://www.kindpng.com/picc/m/327-3273865_password-eye-icon-png-transparent-png.png"} style={{height:"30px", display:"inline-block", width:"30px", backgroundColor:"white"}} onClick={change}></img>
    </div>
  );
}

export default function ShowHidePassword() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Show/Hide Password"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/show-hide-password.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <Password />
        </div>
      </div>
    </div>
  );
}
