import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A credit card form with card number, expiry, and CVV, including basic formatting.";

const requirements = [
  "Auto-format the card number with spaces every 4 digits",
  "Validate expiry as a future MM/YY date",
  "Mask or limit CVV to the correct digit length"
];
import { useState } from 'react';

export default function CreditCardForm() {

  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [warn, setWarn] = useState("");

  function chanegCreditCardNumber(event) {
    const input = event.target.value;
    let value = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== " ") {
        value += input[i];
      }
    }
    if (!isNaN(value)) {
      let newString = "";
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
          newString += " ";
        }
        newString += value[i];
      }
      setCreditCardNumber(newString);
    }
  }
  function changeDate(event) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear() % 100;
    const typed = event.target.value;
    setDate(typed);
    if (typed.length !== 5) {
      setWarn("");
      return;
    }
    if (typed[2] !== "/") {
      setWarn("Enter date in MM/YY format");
      return;
    }
    const typedMonth = Number(typed[0] + typed[1]);
    const typedYear = Number(typed[3] + typed[4]);
    if (isNaN(typedMonth) || isNaN(typedYear)) {
      setWarn("Enter valid numbers");
      return;
    }
    if (typedMonth < 1 || typedMonth > 12) {
      setWarn("Enter a valid month");
      return;
    }
    if (typedYear < currentYear) {
      setWarn("Card has expired");
      return;
    }
    if (typedYear === currentYear && typedMonth < currentMonth) {
      setWarn("Card has expired");
      return;
    }
    setWarn("");
  }

  return (
    <div className="task-page">
      <TaskInfo
        title="Credit Card Form"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/credit-card-form.jsx"]}
      />
      <div className="task-workspace" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <label>
          Enter Card Number :-
          <input name='creditCardNumber' value={creditCardNumber} onChange={chanegCreditCardNumber} maxLength={19}></input>
        </label>
        <label>
          Enter Expiry Date :- 
          <input type='text' placeholder='MM/YY' maxLength={5} value={date} onChange={changeDate}></input>
          <p>{warn}</p>
        </label>
        <label>
          Enter CVV :-
          <input type='password' placeholder='xxx' maxLength={3}></input>
        </label>
      </div>
    </div>
  );
}
