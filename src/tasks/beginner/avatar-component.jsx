import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build an Avatar component that shows a user's image, or their initials if no image is provided.";

const requirements = [
  "Accept name and optional imageUrl props",
  "Fall back to initials when imageUrl is missing",
  "Support at least two sizes via a size prop"
];

function Avatar({name,imgUrl, size}) {

  function initials(name) {
    return name.split(" ").map(word => word[0]).join("").toUpperCase();
  }

  return (
    <>
      <p>{name}</p>
      {imgUrl ? <img src={imgUrl} height={size=="small" ? 40 : 80}></img> : initials(name)}
    </>
  );
}

export default function AvatarComponent({name, imgUrl, size}) {
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
          <Avatar name="Gagan" imgUrl="https://www.pngitem.com/pimgs/m/54-541567_dragon-ball-goku-petit-hd-png-download.png" size="small" />
        </div>
      </div>
    </div>
  );
}


