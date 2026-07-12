import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that tracks whether the browser is currently online.";

const requirements = [
  "Returns a boolean online status",
  "Subscribes to the online/offline window events and cleans up on unmount",
  "Demo shows a live status indicator"
];
import { useOnlineStatus } from '../../hooks/useOnlineStatus.js';

export default function UseOnlineStatus() {
  // TODO: call useOnlineStatus(...) once you've implemented it in src/hooks/useOnlineStatus.js
  // const value = useOnlineStatus(...);
  return (
    <div className="task-page">
      <TaskInfo
        title="useOnlineStatus"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/useonlinestatus.jsx","src/hooks/useOnlineStatus.js"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: use the hook's return value in this demo UI */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
