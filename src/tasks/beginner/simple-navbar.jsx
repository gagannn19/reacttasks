import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a horizontal navigation bar with a logo/title and a few nav links.";

const requirements = [
  "Render a brand/logo on the left and links on the right",
  "Use semantic <nav> markup",
  "Links can be placeholder <a> tags"
];

export default function SimpleNavbar() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="Simple Navbar"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/simple-navbar.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          {/* TODO: build the JSX for "Simple Navbar" here */}
          <p>Your component markup goes here.</p>
        </div>
      </div>
    </div>
  );
}
