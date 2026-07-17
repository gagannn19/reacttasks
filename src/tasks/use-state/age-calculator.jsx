import { useState } from "react";
import TaskInfo from "../../components/TaskInfo.jsx";

const description =
  "Given a birth date, calculate and display the person's current age.";

const requirements = [
  "Accept a date of birth via a date input",
  "Compute age in years (accounting for whether the birthday has passed this year)",
  "Show an error/prompt state until a date is chosen",
];

function Age() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  function getAge(e) {
    const selectedDob = e.target.value;
    setDob(selectedDob);

    const today = new Date();
    const birthDate = new Date(selectedDob);

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  }

  return (
    <>
      <label>
        Enter Your DOB:
        <input
          type="date"
          value={dob}
          onChange={getAge}
        />
      </label>

      <p>
        {dob
          ? `Your age is ${age} year${age !== 1 ? "s" : ""}.`
          : "Please select your date of birth."}
      </p>
    </>
  );
}

export default function AgeCalculator() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Age Calculator"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/age-calculator.jsx"]}
      />

      <div className="task-workspace">
        <div className="stack">
          <Age />
        </div>
      </div>
    </div>
  );
}