import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Recreate the core Gmail layout: sidebar folders, an email list, and a reading pane.";

const requirements = [
  "Sidebar with folders (Inbox/Sent/Trash, etc.)",
  "Email list filtered by the selected folder",
  "Selecting an email shows it in a reading pane",
  "Consider Sidebar + EmailList + EmailItem + ReadingPane components"
];
import { useState } from 'react';

export default function GmailUIClone() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Gmail UI Clone"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/intermediate-projects/gmail-ui-clone.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Gmail UI Clone" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
