import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a global notification/toast queue accessible from anywhere via Context.";

const requirements = [
  "NotificationContext exposes a notify(message) function and the current queue",
  "Notifications auto-dismiss after a delay",
  "A demo triggers a notification from a button"
];
import { NotificationProvider, useNotificationContext } from '../../context/NotificationContext.jsx';

function Demo() {
  // TODO: consume useNotificationContext() here and build the UI
  return <p>Your code here.</p>;
}

export default function NotificationContext() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Notification Context"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/context-api/notification-context.jsx","src/context/NotificationContext.jsx"]}
      />
      <div className="task-workspace">
        <NotificationProvider>
          <Demo />
        </NotificationProvider>
      </div>
    </div>
  );
}
