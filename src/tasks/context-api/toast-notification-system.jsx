import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a reusable toast system (success/error/info) accessible via Context.";

const requirements = [
  "ToastContext exposes a function to push a toast with a type and message",
  "Toasts render in a fixed position and auto-dismiss",
  "A demo triggers at least two different toast types"
];
import { ToastProvider, useToastContext } from '../../context/ToastContext.jsx';

function Demo() {
  // TODO: consume useToastContext() here and build the UI
  return <p>Your code here.</p>;
}

export default function ToastNotificationSystem() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Toast Notification System"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/context-api/toast-notification-system.jsx","src/context/ToastContext.jsx"]}
      />
      <div className="task-workspace">
        <ToastProvider>
          <Demo />
        </ToastProvider>
      </div>
    </div>
  );
}
