import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A multi-question survey combining text input, radio buttons, and checkboxes.";

const requirements = [
  "Include at least one text field, one radio group, and one checkbox group",
  "Collect all answers into a single state object",
  "Show a summary of answers after submit"
];
import { useState } from 'react';

export default function SurveyForm() {

  const [formData, setFormData] = useState({
    name : "",
    category : "",
    gender : "",
    agree : false
  })
  const [submitted, setSubmitted] = useState(false);

  function chanegFormData(event) {
    const { name, value, checked, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }
  function formSubmit(event) {
    event.preventDefault();
    setSubmitted(true)
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
        <form onSubmit={formSubmit} style={{display:"flex", flexDirection:"column", gap:"10px"}}>

          <label>
            Full Name :-
            <input type='text' name='name' value={formData.name} onChange={chanegFormData}></input>
          </label>

          <label>
            Category :- 
            <select name='category' value={formData.category} onChange={chanegFormData}>
              <option value={""}>Choose a Category</option>
              <option>General</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
            </select>
          </label>

          <label>
            Gender :- 
            <label>
              <input type='radio' name='gender' value={"male"} onChange={chanegFormData}></input>
              Male
            </label>
            <label>
              <input type='radio' name='gender' value={"female"} onChange={chanegFormData}></input>
              Female
            </label>
            <label>
              <input type='radio' name='gender' value={"other"} onChange={chanegFormData}></input>
              Other
            </label>
          </label>

          <label>
            <input type='checkbox' name='agree' checked={formData.agree} onChange={chanegFormData}></input>
            I agree to the terms and conditions
          </label>

          <button type='submit'>Submit</button>
          
        </form>

        {submitted ? 
        <div>
          <h3>FORM SUMMARY</h3>
          <p>Candidate name is {formData.name} is a {formData.gender} comes under {formData.category} and they are {formData.agree ? "agreed" : "not agreed"} to terms and conditions</p>
        </div> : ""}


      </div>
    </div>
  );
}
