import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Share the current user's profile info across components using Context.";

const requirements = [
  "UserProfileContext exposes profile fields and an updateProfile function",
  "At least two components read from the context",
  "Updating the profile in one place reflects everywhere it is used"
];
import { UserProfileProvider, useUserProfileContext } from '../../context/UserProfileContext.jsx';

function Demo() {
  // TODO: consume useUserProfileContext() here and build the UI
  return <p>Your code here.</p>;
}

export default function UserProfileContext() {
  return (
    <div className="task-page">
      <TaskInfo
        title="User Profile Context"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/context-api/user-profile-context.jsx","src/context/UserProfileContext.jsx"]}
      />
      <div className="task-workspace">
        <UserProfileProvider>
          <Demo />
        </UserProfileProvider>
      </div>
    </div>
  );
}
