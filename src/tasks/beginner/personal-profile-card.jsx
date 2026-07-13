import TaskInfo from '../../components/TaskInfo.jsx';
import goku from "./photos/goku.jpeg";

const description = "Build a static card that displays your name, a short bio, and a photo/avatar placeholder.";

const requirements = [
  "Show a name, title/role, and a short bio",
  "Include an image or avatar placeholder",
  "Style it as a card using the .card class"
];

export default function PersonalProfileCard() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="Personal Profile Card"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/personal-profile-card.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          {/* TODO: build the JSX for "Personal Profile Card" here */}
          <p>Name :- Gagan</p>
          <p>I am learning React.js</p>
          <img src={goku} alt='goku photo' />
        </div>
      </div>
    </div>
  );
}
