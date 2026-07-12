import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Split a form into multiple steps (e.g. personal info → address → review) with next/back navigation.";

const requirements = [
  "Track the current step in state",
  "Preserve entered data when moving between steps",
  "A final review step summarizing all entered data"
];
import { useState } from 'react';

export default function MultiStepForm() {
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
        title="Multi-Step Form"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/multi-step-form.jsx"]}
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
