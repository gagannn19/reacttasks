import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Turn the profile card into a reusable component that accepts a user's data via props.";

const requirements = [
  "Accept name, role, and avatarUrl as props",
  "Render at least two <UserCard /> instances with different props",
  "Provide sensible fallback values for missing props"
];

export default function UserCardWithProps() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="User Card with Props"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/user-card-with-props.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          {/* TODO: build the JSX for "User Card with Props" here */}
          <p>Your component markup goes here.</p>
        </div>
      </div>
    </div>
  );
}
