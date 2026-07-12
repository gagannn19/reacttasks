import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A richer weather app showing current conditions plus a short forecast.";

const requirements = [
  "Search by city and fetch current weather",
  "Show a multi-day (or hourly) forecast summary",
  "Handle loading and error states",
  "Consider a SearchBar + CurrentWeather + Forecast component split"
];
import { useState } from 'react';

export default function WeatherDashboard() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Weather Dashboard"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/mini-projects/weather-dashboard.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Weather Dashboard" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
