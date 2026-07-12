import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Generic validation practice: required fields, min length, and pattern matching (e.g. email).";

const requirements = [
  "Validate on submit (and optionally on blur)",
  "Show a specific error message per invalid field",
  "Disable submit while the form is invalid (bonus)"
];
import { useState } from 'react';

export default function FormValidation() {
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
        title="Form Validation"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/form-validation.jsx"]}
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
