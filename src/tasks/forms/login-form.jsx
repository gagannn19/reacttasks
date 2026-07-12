import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A login form with email and password fields and basic client-side validation.";

const requirements = [
  "Controlled email and password inputs",
  "Show a validation error if a field is empty or email is malformed",
  "On valid submit, show a success message (no real backend needed)"
];
import { useState } from 'react';

export default function LoginForm() {
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
        title="Login Form"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/login-form.jsx"]}
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
