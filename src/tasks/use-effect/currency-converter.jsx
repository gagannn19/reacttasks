import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Convert an amount between two currencies using live (or mocked) exchange rates.";

const requirements = [
  "Fetch/derive exchange rates for the selected currencies",
  "Recalculate the converted amount when amount or currencies change",
  "Handle the loading/error state for the rate fetch"
];
import { useEffect, useState } from 'react';

export default function CurrencyConverter() {

  const [data, setData] = useState({});
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);
  const [selectOption, setSelectOption] = useState([]);
  const [answer, setAnswer] = useState("");


  function fetchfun() {
    setLoad(true)
    fetch("https://v6.exchangerate-api.com/v6/bc5325e565aac45f2f8f0645/latest/USD")
    .then((res)=>{
      return res.json();
    })
    .then((returnedData)=>{
      setData(returnedData)
      setLoad(false)
      setSelectOption(Object.keys(returnedData.conversion_rates));
    })
    .catch(()=>{
      setErr(true);
      setLoad(false);
    })
  }
  
  useEffect(() => {
    fetchfun();
  }, []);


  useEffect(() => {
    if (
      data.conversion_rates &&
      fromCurrency !== "" &&
      toCurrency !== ""
    ) {
      const ans =
        amount *
        (data.conversion_rates[toCurrency] /
          data.conversion_rates[fromCurrency]);

      setAnswer(ans);
    }
  }, [amount, fromCurrency, toCurrency, data]);

  return (

    <div className="task-page">
      <TaskInfo
        title="Currency Converter"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/currency-converter.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <label>Enter Amount :- <input type='number' value={amount} onChange={(event)=>setAmount(event.target.value)}></input></label>

          <label>
            from
            {selectOption.length > 0 && <select onChange={(event)=>setFromCurrency(event.target.value)}>
              {selectOption.map((optn, index)=>{
                return <option value={optn} key={index}>{optn}</option>
              })}
            </select>}
          </label>

          <label>
            to
            {selectOption.length > 0 && <select onChange={(event)=>setToCurrency(event.target.value)}>
              {selectOption.map((optn, index)=>{
                return <option value={optn} key={index}>{optn}</option>
              })}
            </select>}
          </label>

          <p>{load ? "loading..." : err ? "error..." : answer}</p>
          

        </div>
      </div>
    </div>
  );
}