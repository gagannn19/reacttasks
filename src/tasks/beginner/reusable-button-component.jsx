import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Create a Button component that supports variants (primary/secondary) and forwards its props.";

const requirements = [
  "Accept children, onClick, and a variant prop",
  "Apply different styling per variant",
  "Forward any other native button props (e.g. disabled, type)"
];

function Button({children, onClick, variant = "primary" , ...props}) {

  const styles = {
    primary: {
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "6px",
      cursor: "pointer",
      marginRight: "10px",
    },
    secondary: {
      backgroundColor: "#e5e7eb",
      color: "#111827",
      border: "1px solid #9ca3af",
      padding: "10px 20px",
      borderRadius: "6px",
      cursor: "pointer",
      marginRight: "10px",
    },
  };

  return (
    <button onClick={onClick} style={styles[variant]} {...props}>
      {children}
    </button>
  )
}



export default function ReusableButtonComponent() {
  function handlePrimaryClick() {
    alert("Primary Button Clicked!");
  }

  function handleSecondaryClick() {
    alert("Secondary Button Clicked!");
  }

  return (
    <div className="task-page">
      <TaskInfo
        title="Reusable Button Component"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/reusable-button-component.jsx"]}
      />
      <div className="task-workspace">
        <h2>Reusable Button Demo</h2>
        <Button
          variant="primary"
          onClick={handlePrimaryClick}
        >
          Primary Button 
        </Button>

        <Button
          variant="secondary"
          onClick={handleSecondaryClick}
        >
          Secondary Button
        </Button>

        <Button
          variant="primary"
          disabled
        >
          Disabled Button
        </Button>

        <Button
          variant="secondary"
          type="submit"
          title="This is a submit button"
          onClick={() => alert("Submit Button")}
        >
          Submit Button
        </Button>

      </div>
    </div>
  );
}
