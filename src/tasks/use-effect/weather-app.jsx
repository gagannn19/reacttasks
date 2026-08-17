import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Look up current weather for a city name using a weather API.";

const requirements = [
  "Fetch weather data when the user submits a city",
  "Display temperature and conditions",
  "Show loading and error states"
];
import { useEffect, useState } from 'react';

export default function WeatherApp() {
  const [data, setData] = useState({});
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);
  const [city, setCity] = useState("");
  const apiKey = "516b440f4f9e946747a0f428c35d691c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  function handleClick() {
    setLoad(true);
    fetch(url)
    .then((res)=>{
      return res.json();
    })
    .then((returnedData)=>{
      setData(returnedData)
      setLoad(false);

    })
    .catch(()=>{
      setErr(true);
      setLoad(false);

    })
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Weather App"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/weather-app.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <label>Enter City :- <input type='text' name='city' value={city} onChange={(event)=>setCity(event.target.value)}></input> <button onClick={handleClick}>Submit</button></label>
          {load ? <p>loading ... </p> : err ? <p>error ... </p> : data.name && (
            <div>
              <h2>{data.name}</h2>
              <p>Temperature: {data.main?.temp}°C</p>
              <p>Feels like: {data.main?.feels_like}°C</p>
              <p>Condition: {data.weather?.[0]?.description}</p>
              <p>Wind: {data.wind?.speed} m/s</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
