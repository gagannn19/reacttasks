import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Show a random quote from a hardcoded list each time a button is clicked.";

const requirements = [
  "Maintain an array of quote objects (text + author)",
  "Button picks a new random quote, avoiding immediate repeats (bonus)",
  "Display the quote and its author"
];
import { useState } from 'react';

export default function RandomQuoteGenerator() {

  const quoteList = ["Arise, awake and stop not til the goal is reached", "To observe without judgement is the highest form of intelligence", "The mind is. beautiful servant but a dangerous master", "Beauty is not in the face, it is light in the heart", "Be your own light"];
  const authorlist = ["Swami Vivekanand", "Jiddu Krishnamurti", "OSHO", "Khalil Gibran", "Buddha"];
  const [number, setNumber] = useState();

  function showQuoteClicked() {
    let randomNumber = Math.floor(Math.random()*(quoteList.length));
    while(randomNumber == number) {
      randomNumber = Math.floor(Math.random()*(quoteList.length))
    }
    setNumber(randomNumber);
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Random Quote Generator"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/events/random-quote-generator.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <button onClick={showQuoteClicked}>SHOW QUOTE</button>
          <p>{quoteList[number]}</p>
          <p>{authorlist[number]}</p>

        </div>
      </div>
    </div>
  );
}
