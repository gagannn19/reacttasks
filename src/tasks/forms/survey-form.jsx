import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A multi-question survey combining text input, radio buttons, and checkboxes.";

const requirements = [
  "Include at least one text field, one radio group, and one checkbox group",
  "Collect all answers into a single state object",
  "Show a summary of answers after submit"
];
import { useState } from 'react';

export default function SurveyForm() {
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
        title="Survey Form"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/survey-form.jsx"]}
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
