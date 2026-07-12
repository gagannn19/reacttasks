import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Create a Button component that supports variants (primary/secondary) and forwards its props.";

const requirements = [
  "Accept children, onClick, and a variant prop",
  "Apply different styling per variant",
  "Forward any other native button props (e.g. disabled, type)"
];

export default function ReusableButtonComponent() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="Reusable Button Component"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/reusable-button-component.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          {/* TODO: build the JSX for "Reusable Button Component" here */}
          <p>Your component markup goes here.</p>
        </div>
      </div>
    </div>
  );
}
