import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A minimal API client: choose a method/URL, send a request, view the response.";

const requirements = [
  "Inputs for HTTP method and URL (and optional body)",
  "Send the request and display status/headers/body",
  "Handle request errors gracefully",
  "Consider RequestForm + ResponseViewer components"
];
import { useState } from 'react';

export default function APITestingToolPostmanLite() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="API Testing Tool (Postman Lite)"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/expert-projects/api-testing-tool-postman-lite.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "API Testing Tool (Postman Lite)" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
