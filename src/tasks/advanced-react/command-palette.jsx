import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a Cmd+K style command palette for fuzzy-searching and running actions.";

const requirements = [
  "A keyboard shortcut opens the palette",
  "Typing filters a list of commands/actions",
  "Selecting a command runs it and closes the palette"
];
import { useState } from 'react';

export default function CommandPalette() {
  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);
  return (
    <div className="task-page">
      <TaskInfo
        title="Command Palette"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/advanced-react/command-palette.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build the interactive pattern for "Command Palette" */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
