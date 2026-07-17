import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Calculate BMI from a user's height and weight and show the resulting category.";

const requirements = [
  "Inputs for height (cm) and weight (kg)",
  "Compute BMI = weight / (height in meters)^2",
  "Show category (underweight/normal/overweight/obese) based on the result"
];
import { useState } from 'react';

function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, changeCategory] = useState("");

  function changeweight(e) {
    let weight = e.target.value;
    if(weight === ""){
      setWeight("");
      return;
    }
    if(isNaN(weight)){
      return;
    }
    setWeight(e.target.value);
  }

  function changeheight(e) {
    let height = e.target.value;
    if(height === ""){
      setHeight("");
      return;
    }
    if(isNaN(height)){
      return;
    }
    setHeight(e.target.value);
  }

  function cal() {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    setBmi(bmi);

    if (bmi < 18.5) {
      changeCategory("Under Weight");
    } else if (bmi < 25) {
      changeCategory("Healthy Weight");
    } else if (bmi < 30) {
      changeCategory("Over Weight");
    } else {
      changeCategory("Obesity");
    }
  }

  return (
    <>
      <h1>BMI CALCULATOR</h1>
      <label>Enter Weight(in kg) :- 
        <input value={weight} onChange={changeweight}></input>
      </label>
      <label>Enter Height(in cm):-
        <input value={height} onChange={changeheight}></input>
      </label>
      <button onClick={cal}>Calculate</button>
      <h3>BMI :- {bmi}</h3>
      <h3>BMI Category :- {category}</h3>
    </>
  );
}

export default function BMICalculator() {
  return (
    <div className="task-page">
      <TaskInfo
        title="BMI Calculator"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/bmi-calculator.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <BMI />
        </div>
      </div>
    </div>
  );
}
