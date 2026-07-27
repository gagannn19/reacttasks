import TaskInfo from '../../components/TaskInfo.jsx';

const description = "The app picks a random number in a range; the user guesses until they get it right.";

const requirements = [
  "Pick a random target number on mount/reset",
  "Give higher/lower feedback after each guess",
  "Track number of attempts and show a win message"
];
import { useEffect, useState } from 'react';

export default function NumberGuessingGame() {

  const [number, setNumber] = useState("");
  const [warn, setWarn] = useState("");
  const [pick, setPick] = useState(()=>(Math.floor(Math.random()*100)));
  const [attempts, setAttempts] = useState(0);
  const [bool, setBool] = useState(false)

  function numberChange(event) {
    const num = event.target.value;
    if(num === "" || isNaN(num)) {
      setWarn("Enter valid Number");
      setNumber("");
      return;
    }
    else {
      setWarn("");
      setNumber(Number(num));
    }
  }

  function submitClicked(){
    setAttempts(prev => prev+1);
    if(number < pick) {
      setWarn("guess bigger number");
    }
    else if (number > pick){
      setWarn("guess smaller number");
    }
    else {
      setWarn("you win")
      setBool(true)
    }
  }

  function reset() {
    setNumber("");
    setWarn("");
    setPick(()=>(Math.floor(Math.random()*100)));
    setAttempts(0);
    setBool(false);
  }

  
  return (
    <div className="task-page">
      <TaskInfo
        title="Number Guessing Game"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/number-guessing-game.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <label>
            Guess any Number :- 
            <input name='number' value={number} onChange={numberChange}></input>
            <button disabled={bool} onClick={submitClicked}>submit</button>
            <p style={{fontSize:"13px", color:"red"}}>{warn}</p>
          </label>
          <p>Number of Attempts :- {attempts}</p>
          <button onClick={reset}>Reset</button>

        </div>
      </div>
    </div>
  );
}
