import TaskInfo from '../../components/TaskInfo.jsx';

const description = "As the user types in an input, mirror the text live in a preview area below.";

const requirements = [
  "Controlled input stores its value in state",
  "Preview area re-renders with the latest value on every keystroke",
  "Show a placeholder message when the input is empty"
];
import { useState } from 'react';

function Preview() {
  const [text, setText] = useState("");

  function show(e) {
    setText(e.target.value);
  }
  return(
    <>
      <textarea value={text} placeholder='Enter Something...' onChange={show}>

      </textarea>
      <p style={{border:"1px solid white", padding:"3px"}}>{text === "" ? "Start Typing..." : text}</p>
    </>
  );
}

export default function LiveTextPreview() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Live Text Preview"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/live-text-preview.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <Preview />
        </div>
      </div>
    </div>
  );
}
