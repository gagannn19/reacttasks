import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A notes app with a Pinterest-style masonry/grid layout and colors.";

const requirements = [
  "Add/edit/delete notes",
  "Notes support a background color",
  "Pin a note so it stays at the top",
  "Consider NoteGrid + NoteCard + NoteEditor components"
];
import { useState } from 'react';

export default function GoogleKeepClone() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Google Keep Clone"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/intermediate-projects/google-keep-clone.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Google Keep Clone" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
