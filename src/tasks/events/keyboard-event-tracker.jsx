import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Show which key was last pressed while an input is focused.";

const requirements = [
  "Use onKeyDown (or onKeyUp) to capture key presses",
  "Display the key name and key code",
  "Handle special keys like Enter/Escape distinctly"
];
import { useState } from 'react';

export default function KeyboardEventTracker() {

  const [keys,setKeys] = useState("");
  const [keyName, setKeyName] = useState("");
  const [keyCode, setKeyCode] = useState("");
  const [message, setMessage] = useState("");

  function changeKeys(event) {
    setKeys(event.target.value);
  }
  function keyDown(event) {
    setKeyName(event.key);
    setKeyCode(event.code);
    if(event.key.length > 1) {
      setMessage("special key is pressed")
    }
    else {
      setMessage("key is pressed")
    }
  }

  return (
    <div className="task-page">
      <TaskInfo
        title="Keyboard Event Tracker"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/keyboard-event-tracker.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <input onKeyDown={keyDown} name='keys' value={keys} onChange={changeKeys}></input>
          <p>{keyName} ...  {message}</p>
          <p>Code :- {keyCode}</p>
        </div>
      </div>
    </div>
  );
}
