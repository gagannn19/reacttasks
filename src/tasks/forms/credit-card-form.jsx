import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A credit card form with card number, expiry, and CVV, including basic formatting.";

const requirements = [
  "Auto-format the card number with spaces every 4 digits",
  "Validate expiry as a future MM/YY date",
  "Mask or limit CVV to the correct digit length"
];
import { useState } from 'react';

export default function CreditCardForm() {
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
        title="Credit Card Form"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/credit-card-form.jsx"]}
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
