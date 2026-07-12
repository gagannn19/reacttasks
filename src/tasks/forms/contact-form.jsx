import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A simple contact form with name, email, and message fields.";

const requirements = [
  "Controlled inputs for name, email, and message",
  "Require all fields before allowing submit",
  "Show a 'message sent' confirmation on submit"
];
import { useState } from 'react';

export default function ContactForm() {
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
        title="Contact Form"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/contact-form.jsx"]}
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
