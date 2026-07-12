import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Look up current weather for a city name using a weather API.";

const requirements = [
  "Fetch weather data when the user submits a city",
  "Display temperature and conditions",
  "Show loading and error states"
];
import { useEffect, useState } from 'react';

export default function WeatherApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: run the side effect this task needs (timer, fetch, subscription...)
    // Remember to return a cleanup function if you start an interval/timeout/subscription.

    return () => {
      // TODO: cleanup here if needed
    };
  }, []);
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
          {/* TODO: render `data` / loading / error states */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
