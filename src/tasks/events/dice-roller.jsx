import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate rolling a six-sided die and display the result.";

const requirements = [
  "Button triggers a new random roll (1-6)",
  "Display the resulting number (bonus: as a dice face)",
  "Disable/animate briefly while 'rolling' (optional)"
];
import { useState } from 'react';

export default function DiceRoller() {

  const [pText, setPText] = useState("");
  const [number, setNumber] = useState();
  const numberList = [1,2,3,4,5,6];
  const diceImage = ["https://img.magnific.com/free-vector/casino-background-design_1314-103.jpg?semt=ais_hybrid&w=740&q=80","https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-dice-one-icon-png-image_313036.jpg", "https://www.svgrepo.com/show/320118/inverted-dice-2.svg", "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312624_1280.png", "https://static.vecteezy.com/system/resources/previews/068/739/003/non_2x/minimalist-outline-dice-with-four-dots-for-game-and-chance-icon-vector.jpg", "https://cdn-icons-png.flaticon.com/512/51/51419.png", "https://thumbs.dreamstime.com/b/red-dice-games-casinos-points-d-illustration-isolation-red-dice-games-casinos-points-d-rendering-isolation-170220936.jpg"]
  const [isRolling, setIsRolling] = useState(false);


  function rollClicked() {
    setIsRolling(true);
    setPText("... Dice is Rolling ...")
    setNumber(0);
    setTimeout(()=>{
      setIsRolling(false);
      const num = numberList[Math.floor(Math.random()*6)]
      setNumber(num);
      setPText(num);
    },500)
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Dice Roller"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/dice-roller.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <button disabled={isRolling} onClick={rollClicked}>ROLL</button>
          <p>{pText}</p>
          <img src={diceImage[number]} style={{height:"100px", width:"100px"}}></img>
        </div>
      </div>
    </div>
  );
}
