import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Split a form into multiple steps (e.g. personal info → address → review) with next/back navigation.";

const requirements = [
  "Track the current step in state",
  "Preserve entered data when moving between steps",
  "A final review step summarizing all entered data"
];
import { useState } from 'react';

export default function MultiStepForm() {

  const [check, setCheck] = useState(1);
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    gender : "",
    country : "",
    state : "",
    city : ""
  })

  function next(e) {
    e.preventDefault();
    setCheck(2);
  }

  function back(e) {
    e.preventDefault();
    setCheck(1);
  }

  function review(e) {
    e.preventDefault();
    setCheck(3);
  }

  function changeFormData(event) {
    const {name, value} = event.target;

    const newFormData = {
      ...formData,
      [name] : value
    }

    setFormData(newFormData);
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
        <div style={{display:"flex", flexDirection:"column"}}>
          {
            check == 1 && 
            <label style={{margin:"5px"}}>
              Enter Your Name :-
              <input name='name' value={formData.name} onChange={changeFormData}></input>
            </label>
          }

          {/* Email */}
          {
            check == 1 && 
            <label style={{margin:"5px"}}>
              Enter Your Email :-
              <input name='email' value={formData.email} onChange={changeFormData}></input>
            </label>
          }

          {/* Gender */}
          {
            check == 1 && 
            <label style={{margin:"5px"}}>
              Enter Your Gender :-
              <input name='gender' value={formData.gender} onChange={changeFormData}></input>
            </label>
          }

          {/* button */}
          {
            check == 1 &&
            <button onClick={next} style={{margin:"5px"}}>
              Next
            </button>
          }
        </div>
        
        <div style={{display:"flex", flexDirection:"column"}}>
          {
            check == 2 &&
            <label style={{margin:"5px"}}>
              Enter Your Country :-
              <input name='country' value={formData.country} onChange={changeFormData}></input>
            </label>
          }

          {/* State */}
          {
            check == 2 &&
            <label style={{margin:"5px"}}>
              Enter Your State :-
              <input name='state' value={formData.state} onChange={changeFormData}></input>
            </label>
          }

          {/* City */}
          {
            check == 2 &&
            <label style={{margin:"5px"}}>
              Enter Your City :-
              <input name='city' value={formData.city} onChange={changeFormData}></input>
            </label>
          }

          {/* buttons */}
          {
            check == 2 &&
            <div style={{margin:"5px"}}>
              <button onClick={back}>Back</button>
              <button onClick={review}>Review</button>
            </div>
          }
        </div>
        

        {
          check == 3 &&
          <div>
            <h2>Review</h2>
            <p>Name :- {formData.name}</p>
            <p>Email :- {formData.email}</p>
            <p>Gender :- {formData.gender}</p>
            <p>Address :- {formData.country}, {formData.state}, {formData.city}</p>
          </div>

        }
        
      </div>
    </div>
  );
}