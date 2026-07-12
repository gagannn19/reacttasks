import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Take a long URL and generate a shortened version, tracked in a list.";

const requirements = [
  "Input for a long URL, generating a short code",
  "List of previously shortened URLs with click counts (simulated)",
  "Copy-to-clipboard for a shortened link",
  "Consider ShortenForm + LinkList components"
];
import { useState } from 'react';

export default function URLShortener() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="URL Shortener"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/intermediate-projects/url-shortener.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "URL Shortener" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
