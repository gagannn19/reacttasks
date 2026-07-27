import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Play a single round of rock-paper-scissors against the computer.";

const requirements = [
  "User picks rock, paper, or scissors via buttons",
  "Computer's choice is randomized",
  "Determine and display the winner using correct game rules"
];
import { useState } from 'react';

export default function RockPaperScissors() {

  const [result, setResult] = useState("");
  const [computer, setComputer] = useState("");


  function choiceClicked(event) {
    const computerChoice = Math.floor(Math.random()*3);
    const userChoice = event.target.name;

    if(computerChoice === 0) {
      setComputer("Rock")
    }
    else if(computerChoice === 1) {
      setComputer("Paper")
    }
    else {
      setComputer("Scissor")
    }

    if (computerChoice === 0 && userChoice === 'rock') {
      setResult("Tie")
    }
    else if (computerChoice === 0 && userChoice === 'paper') {
      setResult("User Win")
    }
    else if (computerChoice === 0 && userChoice === 'scissor') {
      setResult("Computer Win")
    }
    else if (computerChoice === 1 && userChoice === 'rock') {
      setResult("Computer Win")
    }
    else if (computerChoice === 1 && userChoice === 'paper') {
      setResult("Tie")
    }
    else if (computerChoice === 1 && userChoice === 'scissor') {
      setResult("User Win")
    }
    else if (computerChoice === 2 && userChoice === 'rock') {
      setResult("User Win")
    }
    else if (computerChoice === 2 && userChoice === 'paper') {
      setResult("Computer Win")
    }
    else if (computerChoice === 2 && userChoice === 'scissor') {
      setResult("Tie")
    }

  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Rock Paper Scissors"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/rock-paper-scissors.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <p>CHOOSE ANY 1</p>
          <div>
            <button name='rock' onClick={choiceClicked} style={{margin:"10px"}}>ROCK</button>
            <button name='paper' onClick={choiceClicked}  style={{margin:"10px"}}>PAPER</button>
            <button name='scissor' onClick={choiceClicked}  style={{margin:"10px"}}>SCISSOR</button>
          </div>
          <p>Computer Choose :- {computer}</p>
          <p>{result}</p>
          

        </div>
      </div>
    </div>
  );
}
