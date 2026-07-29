import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Generic validation practice: required fields, min length, and pattern matching (e.g. email).";

const requirements = [
  "Validate on submit (and optionally on blur)",
  "Show a specific error message per invalid field",
  "Disable submit while the form is invalid (bonus)"
];
import { useState } from 'react';

export default function FormValidation() {

  const [data, setData] = useState({
    name : "",
    gmail : "",
    password : ""
  })
  const [passwordWarning, setPasswordWarning] = useState("");
  const [gmailWarning, setGmailWarning] = useState("");
  const [nameWarning, setNameWarning] = useState("");
  const [button, setButton] = useState(true);
  const isFormValid = nameWarning === "" &&
  gmailWarning === "" &&
  passwordWarning === "" &&
  data.name !== "" &&
  data.gmail !== "" &&
  data.password !== "";

  function changeData(event) {
    const {name,value} = event.target;
    setData({
      ...data,
      [name] : value
    })
  }
  function checkLength(event) {
    if(event.target.value.length < 8) {
      setPasswordWarning("Password Length is Small");
    }
    else {
      setPasswordWarning("");
    }
  }
  function checkMatch(event) {
    const gmailCopy = event.target.value;
    if(gmailCopy.includes("@")){
      const parts = gmailCopy.split("@");
      if(parts[0] != "") {
        if(parts[1] != "") {
          if(parts[1].includes(".")){
            const part2 = parts[1].split(".");
            if(part2[0] != "") {
              if(part2[1] != "") {
                setGmailWarning("");
              }
              else {
                setGmailWarning("Enter Valid Gmail")
              }
            }
            else {
              setGmailWarning("Enter Valid Gmail")
            }
          }
          else {
            setGmailWarning("Enter Valid Gmail")
          }
        }
        else {
          setGmailWarning("Enter Valid Gmail");
        }
      }
      else {
        setGmailWarning("Enter Valid Gmail")
      }
    }
    else {
      setGmailWarning("Enter Valid Gmail");
    }
  }
  function checkName(event) {
    if(event.target.value == "") {
      setNameWarning("Enter Valid Name")
    }
    else if(!isNaN(event.target.value)){
      setNameWarning("Enter Valid Name")
    }
    else {
      setNameWarning("");
    }
  }
 
  return (
    <div className="task-page">
      <TaskInfo
        title="Form Validation"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/form-validation.jsx"]}
      />
      <div className="task-workspace">
        <div style={{display:"flex", flexDirection : "column" , gap : "10px"}}>
          <label>
            Enter Your Name :-
            <input type='text' name='name' value={data.name} onChange={changeData} onBlur={checkName}></input>
            <p style={{fontSize:"10px", color:"red"}}>{nameWarning}</p>
          </label>
          <label>
            Enter Your Gmail :-
            <input type='email' name='gmail' value={data.gmail} onChange={changeData} onBlur={checkMatch}></input>
            <p style={{fontSize:"10px", color:"red"}}>{gmailWarning}</p>
          </label>
          <label>
            Write a New Password :-
            <input type='password' name='password' value={data.password} onChange={changeData} onBlur={checkLength}></input>
            <p style={{fontSize:"10px", color:"red"}}>{passwordWarning}</p>
          </label>
          <button disabled={!isFormValid} >Submit</button>
        </div>
      </div>
    </div>
  );
}