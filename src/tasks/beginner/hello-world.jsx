import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Render a simple 'Hello, World!' heading using JSX — the classic first React component.";

const requirements = [
  "Render an <h1> that says \"Hello, World!\"",
  "Component must be a valid functional component",
  "No props or state needed"
];

export default function HelloWorld() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="Hello World"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/hello-world.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          {/* TODO: build the JSX for "Hello World" here */}
          <h1>Hello, World!</h1>
          {/* <p>Your component markup goes here.</p> */}
        </div>
      </div>
    </div>
  );
}
