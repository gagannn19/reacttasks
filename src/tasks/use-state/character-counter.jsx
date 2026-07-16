import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A textarea that shows a live count of characters typed, with a max-length warning.";

const requirements = [
  "Track the input value in state",
  "Display current length / max length",
  "Show a warning style when nearing/exceeding the limit"
];
import { useState } from 'react';

function TextCount() {
  const [text, setText] = useState("");

  function countcount(e) {
    setText(e.target.value);
  }
  
  return (
    <>
      <textarea value={text} placeholder='Write a message...' onChange={countcount} style={{color: text.length>=40 ? "red" : "white"}}  />
      <p style={{color: "white"}}>{text.length}/50</p>
    </>
  );
}

export default function CharacterCounter() {
  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);
  return (
    <div className="task-page">
      <TaskInfo
        title="Character Counter"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/character-counter.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <TextCount />
        </div>
      </div>
    </div>
  );
}
