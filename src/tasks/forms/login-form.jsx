import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A login form with email and password fields and basic client-side validation.";

const requirements = [
  "Controlled email and password inputs",
  "Show a validation error if a field is empty or email is malformed",
  "On valid submit, show a success message (no real backend needed)"
];
import { useState } from 'react';

function Form() {

  const [formdata, setformdata] = useState({});
  const [update, setupdate] = useState("");

  function formchange(event) {
    const {name, value} = event.target;

    const newformdata = {
      ...formdata,
      [name] : value
    }

    setformdata(newformdata);
  }

  function handlechange(event) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(formdata.email === "") {
      setupdate("Please fill all the fields...")
      return;
    }
    if(formdata.password === ""){
      setupdate("Please fill all the fields...")
      return;
    }
    if(emailRegex.test(formdata.email)) {
      setupdate("Success");
    }
    else {
      setupdate("Invalid Email")
    }
      
  }

  

  return (
    <form onSubmit={handlechange}>
      <label style={{display:"block", margin:"10px"}}>Enter Your Email :-
        <input name='email' value={formdata.email} onChange={formchange}></input>
      </label>
      <label style={{display:"block", margin:"10px"}}>Enter Your Password :-
        <input name='password' value={formdata.password} onChange={formchange}></input>
      </label>
      <button type='submit' style={{display:"block", margin:"10px"}}>Submit</button>
      <p>{update}</p>
    </form>
  );
}

export default function LoginForm() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Login Form"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/login-form.jsx"]}
      />
      <div className="task-workspace">
        <Form />
      </div>
    </div>
  );
}
