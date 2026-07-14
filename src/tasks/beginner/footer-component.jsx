import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a footer with copyright text, social links, and the current year.";

const requirements = [
  "Show a copyright line with the current year computed in JS",
  "Include a few social/contact links",
  "Keep it as a standalone reusable component"
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h3>Contact Us</h3>
      <div>
        <a src="#">Linkedin</a>
        
      </div>
      <div>
        <a src="#">Github</a>
      </div>
      
      <p>@ {year} React Learning Website</p>

    </footer>
  );
}

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
          <Footer />
        </div>
      </div>
    </div>
  );
}
