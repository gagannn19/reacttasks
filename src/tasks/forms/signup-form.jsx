import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A signup form with name, email, password, and confirm-password fields.";

const requirements = [
  "All fields are controlled inputs",
  "Confirm-password must match password",
  "Show inline error messages per field"
];
import { useState } from 'react';

export default function SignupForm() {
  // TODO: add one useState per field this form needs (or a single formData object)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  const [checkname, setcheckname] = useState("");
  const [checkemail, setcheckemail] = useState("");
  const [checkpassword, setcheckpassword] = useState("");
  const [checkconfirmpassword, setcheckconfirmpassword] = useState("");
  const [submit, setsubmit] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    // TODO: update formData for this field
    const newformData = {
      ...formData,
      [name] : value
    }

    setFormData(newformData);
  }

  function handleSubmit(event) {
  event.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let hasError = false;

  if (formData.name === "") {
    setcheckname("Fill the name");
    hasError = true;
  } else {
    setcheckname("");
  }

  if (!emailRegex.test(formData.email)) {
    setcheckemail("Enter a valid email");
    hasError = true;
  } else {
    setcheckemail("");
  }

  if (formData.password.length < 8) {
    setcheckpassword("Password must be at least 8 characters");
    hasError = true;
  } else {
    setcheckpassword("");
  }

  if (formData.password !== formData.confirmpassword) {
    setcheckconfirmpassword("Passwords do not match");
    hasError = true;
  } else {
    setcheckconfirmpassword("");
  }

  if (hasError) {
    setsubmit("");
    return;
  }

  setsubmit("Success");
}

  return (
    <div className="task-page">
      <TaskInfo
        title="Signup Form"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/signup-form.jsx"]}
      />
      <div className="task-workspace">
        <form className="stack" onSubmit={handleSubmit}>
          {/* TODO: add labeled <input> fields, wiring value+onChange to formData */}
          <label>Name :- <input name='name' value={formData.name} onChange={handleChange}></input><p style={{color:"red", fontSize:"small"}}>{checkname}</p></label>
          <label>Email :- <input type='email' name='email' value={formData.email} onChange={handleChange}></input><p style={{color:"red", fontSize:"small"}}>{checkemail}</p></label>
          <label>Password :- <input type='password' name='password' value={formData.password} onChange={handleChange}></input><p style={{color:"red", fontSize:"small"}}>{checkpassword}</p></label>
          <label>Confirm Password :- <input type='password' name='confirmpassword' value={formData.confirmpassword} onChange={handleChange}></input><p style={{color:"red", fontSize:"small"}}>{checkconfirmpassword}</p></label>
          <button className="btn primary" type="submit">
            Submit
          </button>
          <p>{submit}</p>
        </form>
      </div>
    </div>
  );
}
