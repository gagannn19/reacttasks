import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Render a greeting message that changes based on the current time of day.";

const requirements = [
  "Use the current hour to decide Morning/Afternoon/Evening",
  "Render a single greeting message",
  "Handle the edge cases around midnight and noon"
];

function Greeting() {
  const now = new Date();
  const hour = now.getHours();
  let wish;

  if(hour >= 4 && hour < 12) {
    wish = "Good Morning";
  }
  else if(hour >= 12 && hour < 17) {
    wish = "Good Afternoon";
  }
  else if(hour >= 17 && hour < 20) {
    wish = "Good Evening";
  }
  else {
    wish = "Good Night";
  }


  return(
    <>
      <h1>{wish}</h1>
    </>
  );
}

export default function GreetingCardMorningAfternoonEvening() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="Greeting Card (Morning/Afternoon/Evening)"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/greeting-card-morning-afternoon-evening.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          <Greeting />
        </div>
      </div>
    </div>
  );
}
