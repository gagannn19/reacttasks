import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate flipping a coin and display Heads or Tails.";

const requirements = [
  "Button triggers a random Heads/Tails result",
  "Display the result clearly",
  "Track a running tally of heads vs tails (bonus)"
];
import { useState } from 'react';

export default function CoinToss() {

  const [coin, setCoin] = useState("");
  const [head, setHead] = useState(0);
  const [tail, setTail] = useState(0);

  function flipCoinClicked() {
    const flipCoin = Math.random() > 0.5 ? "Head" : "Tail";
    setCoin(flipCoin)
    if(flipCoin == "Head") {
      setHead(prev => prev+1);
    }
    else {
      setTail (prev => prev+1);
    }
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Coin Toss"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/coin-toss.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <button onClick={flipCoinClicked}>Flip Coin</button>
          <p>{coin}</p>
          <p>Head :- {head}</p>
          <p>Tail :- {tail}</p>
        </div>
      </div>
    </div>
  );
}
