import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A one-time-password input made of individual digit boxes with auto-focus advance.";

const requirements = [
  "Render N separate single-character inputs",
  "Typing a digit auto-focuses the next box",
  "Backspace on an empty box focuses the previous box"
];
import { useState } from 'react';

export default function OTPInput() {
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
        title="OTP Input"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/otp-input.jsx"]}
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
