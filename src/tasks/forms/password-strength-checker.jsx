import TaskInfo from '../../components/TaskInfo.jsx';

const description = "As the user types a password, show a live strength meter (weak/medium/strong).";

const requirements = [
  "Evaluate strength based on length, casing, digits, and symbols",
  "Update the meter live as the user types",
  "Show which criteria are met/unmet"
];
import { useState } from 'react';

export default function PasswordStrengthChecker() {

  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    output : "",
    length : "",
    casing : "",
    digits : "",
    symbols : ""
  });

  function passwordChange(event) {
    const copyPassword = event.target.value;
    setPassword(copyPassword);

    let count = 0;
    let passwordLength = false;
    let passwordCasing = false;
    let passwordDigit = false;
    let passwordSymbols = false;
    if(copyPassword.length >= 8) {
      passwordLength = true
      count = count+1;
    } 
    if(/[A-Z]/.test(copyPassword)) {
      if(/[a-z]/.test(copyPassword)) {
        count = count + 1;
        passwordCasing = true;
      }
    }
    if(/[0-9]/.test(copyPassword)) {
      count = count+1;
      passwordDigit = true
    }
    if(/[^A-Za-z0-9]/.test(copyPassword)) {
      count = count+1;
      passwordSymbols = true;
    }

    setData({
      ...data,
      length : passwordLength ? "Yes" : "No",
      casing : passwordCasing ? "Yes" : "No",
      digits : passwordDigit ? "Yes" : "No",
      symbols : passwordSymbols ? "Yes" : "No",
      output : count <= 1 ? "Weak" : count === 2 ? "Medium" : count === 3 ? "Strong" : "Very Strong"
    })
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Password Strength Checker"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/password-strength-checker.jsx"]}
      />
      <div className="task-workspace">
        <label>
          Type a Password :-
          <input type='password' value={password} onChange={passwordChange}></input>
        </label>
        <p>Length(8+) :- {data.length}</p>
        <p>Casing :- {data.casing}</p>
        <p>Digits :- {data.digits}</p>
        <p>Symbols :- {data.symbols}</p>
        <h2>Password Strength :- {data.output}</h2>
      </div>
    </div>
  );
}