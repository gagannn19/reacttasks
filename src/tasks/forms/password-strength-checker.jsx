import TaskInfo from '../../components/TaskInfo.jsx';

const description = "As the user types a password, show a live strength meter (weak/medium/strong).";

const requirements = [
  "Evaluate strength based on length, casing, digits, and symbols",
  "Update the meter live as the user types",
  "Show which criteria are met/unmet"
];
import { useState } from 'react';

export default function PasswordStrengthChecker() {
  // TODO: add one useState per field this form needs (or a single formData object)
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    // TODO: update formData for this field
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: validate and handle the submitted data
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Password Strength Checker"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/password-strength-checker.jsx"]}
      />
      <div className="task-workspace">
        <form className="stack" onSubmit={handleSubmit}>
          {/* TODO: add labeled <input> fields, wiring value+onChange to formData */}
          <button className="btn primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
