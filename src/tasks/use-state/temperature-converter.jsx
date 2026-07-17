import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Convert a temperature between Celsius and Fahrenheit as the user types.";

const requirements = [
  "Two inputs (C and F) stay in sync with each other",
  "Conversion math is correct in both directions",
  "Handle non-numeric input gracefully"
];
import { useState } from 'react';

function Convertor() {
  const [c, setc] = useState("");
  const [f, setf] = useState("");

  function ctof(e) {
    const value = e.target.value;
    setc(value);

    if (value === "" || isNaN(value)) {
      setf("");
      return;
    }
    
    setf((Number(value) * 9 / 5) + 32);
  }

  function ftoc(e) {
    const value = e.target.value;
    setf(value);

    if (value === "" || isNaN(value)) {
      setc("");
      return;
    }

    setc((Number(value) - 32) * 5 / 9);
  }

  return (
    <>
      <label>
        Celcius :-  
        <input type='text' value={c} onChange={ctof}></input>
      </label>
      <label>
        Fahrenheit :- 
        <input type='text' value={f} onChange={ftoc}></input>
      </label>

    </>
  );
}

export default function TemperatureConverter() {

  return (
    <div className="task-page">
      <TaskInfo
        title="Temperature Converter"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/temperature-converter.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <Convertor />
        </div>
      </div>
    </div>
  );
}
