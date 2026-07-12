import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Render a greeting message that changes based on the current time of day.";

const requirements = [
  "Use the current hour to decide Morning/Afternoon/Evening",
  "Render a single greeting message",
  "Handle the edge cases around midnight and noon"
];

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
          {/* TODO: build the JSX for "Greeting Card (Morning/Afternoon/Evening)" here */}
          <p>Your component markup goes here.</p>
        </div>
      </div>
    </div>
  );
}
