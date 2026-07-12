import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a footer with copyright text, social links, and the current year.";

const requirements = [
  "Show a copyright line with the current year computed in JS",
  "Include a few social/contact links",
  "Keep it as a standalone reusable component"
];

export default function FooterComponent() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="Footer Component"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/footer-component.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          {/* TODO: build the JSX for "Footer Component" here */}
          <p>Your component markup goes here.</p>
        </div>
      </div>
    </div>
  );
}
