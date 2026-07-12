import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Collect a star/number rating plus optional comments from the user.";

const requirements = [
  "A rating control (e.g. 1-5 buttons or stars)",
  "An optional comment textarea",
  "Display a summary of the submitted feedback"
];
import { useState } from 'react';

export default function FeedbackForm() {
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
        title="Feedback Form"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/feedback-form.jsx"]}
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
