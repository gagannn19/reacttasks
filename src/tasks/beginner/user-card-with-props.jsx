import TaskInfo from '../../components/TaskInfo.jsx';
import goku from './photos/goku.jpeg';

const description = "Turn the profile card into a reusable component that accepts a user's data via props.";

const requirements = [
  "Accept name, role, and avatarUrl as props",
  "Render at least two <UserCard /> instances with different props",
  "Provide sensible fallback values for missing props"
];

function ProfileCard({name, about, avatar}) {
  return(
    <>
      <p>Name : {name}</p>
      <p>About : {about}</p>
      {avatar ? (
        <img src={avatar} alt={name} />
      ) : (
        <p>{name}</p>
      )}
    </>
  )
}

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
          <ProfileCard name="Gagan" about="I am learning react.js" avatar={goku} />
          <ProfileCard name="Rahul" about="I am learning Martial Art" avatar={null} />

        </div>
      </div>
    </div>
  );
}
