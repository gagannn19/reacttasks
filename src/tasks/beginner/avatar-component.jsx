import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build an Avatar component that shows a user's image, or their initials if no image is provided.";

const requirements = [
  "Accept name and optional imageUrl props",
  "Fall back to initials when imageUrl is missing",
  "Support at least two sizes via a size prop"
];

export default function AvatarComponent() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="Avatar Component"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/avatar-component.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          {/* TODO: build the JSX for "Avatar Component" here */}
          <p>Your component markup goes here.</p>
        </div>
      </div>
    </div>
  );
}
