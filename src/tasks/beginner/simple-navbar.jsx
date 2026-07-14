import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a horizontal navigation bar with a logo/title and a few nav links.";

const requirements = [
  "Render a brand/logo on the left and links on the right",
  "Use semantic <nav> markup",
  "Links can be placeholder <a> tags"
];

function NavBar() {
  return (
    <nav>
      <img src="https://www.freeiconspng.com/uploads/classic-g-logo-png-25.png" height={30} style={{ padding:"2px", marginRight:"100px", border:"1px dotted white", borderRadius:"10px"}}></img>
      <a href='#' style={{fontSize:"30px", marginRight:"25px"}}>Home </a>
      <a href='#' style={{fontSize:"30px", marginRight:"25px"}}>Products </a>
      <a href='#' style={{fontSize:"30px", marginRight:"25px"}}>About </a>
      <a href='#' style={{fontSize:"30px", marginRight:"25px"}}>Contact </a>
    </nav>
  )
}

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
          <NavBar />
        </div>
      </div>
    </div>
  );
}
