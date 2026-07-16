import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A single button that switches between ON and OFF state and shows the current status.";

const requirements = [
  "Boolean state tracks on/off",
  "Button label and color reflect the current state",
  "Clicking flips the state"
];
import { useState } from 'react';

function Currentstate(){
  const [state, setState] = useState("OFF");
  const [stylish, setStylish] = useState({display:"inline-block", width:"50px", height:"50px"})

  function changestate() {
    if(state === "OFF") {
      setState("ON");
    }
    else{
      setState("OFF");
    }

    changestylish();

  }

  function changestylish() {
    if(state === "OFF") {
      setStylish({display:"inline-block", width:"50px", height:"50px", backgroundColor :"green"});
    }
    else{
      setStylish({display:"inline-block", width:"50px", height:"50px", backgroundColor:"red"})
    }
  }


  return (
    <button style={stylish} onClick={changestate}>
      <p>{state}</p>
    </button>
  );
}

export default function ToggleButtonONOFF() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Toggle Button (ON/OFF)"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/toggle-button-on-off.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <Currentstate />
        </div>
      </div>
    </div>
  );
}
