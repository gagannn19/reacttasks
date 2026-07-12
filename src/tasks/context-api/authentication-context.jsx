import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Model a simple authentication state (user, login, logout) shared via Context.";

const requirements = [
  "AuthContext exposes the current user and login/logout functions",
  "A demo shows different UI when logged in vs logged out",
  "logout() clears the current user"
];
import { AuthProvider, useAuthContext } from '../../context/AuthContext.jsx';

function Demo() {
  // TODO: consume useAuthContext() here and build the UI
  return <p>Your code here.</p>;
}

export default function AuthenticationContext() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Authentication Context"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/context-api/authentication-context.jsx","src/context/AuthContext.jsx"]}
      />
      <div className="task-workspace">
        <AuthProvider>
          <Demo />
        </AuthProvider>
      </div>
    </div>
  );
}
