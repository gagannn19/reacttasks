import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a hook that tracks the current window width/height.";

const requirements = [
  "Returns { width, height } updated on resize",
  "Subscribes on mount and cleans up the resize listener on unmount",
  "Demo displays the live values"
];
import { useWindowSize } from '../../hooks/useWindowSize.js';

export default function UseWindowSize() {
  // TODO: call useWindowSize(...) once you've implemented it in src/hooks/useWindowSize.js
  const {height, width} = useWindowSize();
  return (
    <div className="task-page">
      <TaskInfo
        title="useWindowSize"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/custom-hooks/usewindowsize.jsx","src/hooks/useWindowSize.js"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <p>Height :- </p>{height}
          <p> Width :- </p>{width}
        </div>
      </div>
    </div>
  );
}
