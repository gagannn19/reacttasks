import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Create a Button component that supports variants (primary/secondary) and forwards its props.";

const requirements = [
  "Accept children, onClick, and a variant prop",
  "Apply different styling per variant",
  "Forward any other native button props (e.g. disabled, type)"
];

function Button(props) {
  return (  
    <>
      <button onclick={props.onclik}>{props.children}</button>
      
    </>
  );
}

export default function ReusableButtonComponent() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="Reusable Button Component"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/reusable-button-component.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          <Button name="Gagan" onclik={function() {
            props.name = props.name+props.name
          } }/>
        </div>
      </div>
    </div>
  );
}
