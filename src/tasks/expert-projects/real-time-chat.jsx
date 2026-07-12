import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate a real-time chat between two 'users' in the same app (no real backend required).";

const requirements = [
  "Two simulated participants exchanging messages",
  "New messages appear without a page reload",
  "Show typing/online status indicators (simulated)",
  "Consider ChatWindow + MessageList + MessageInput components"
];
import { useState } from 'react';

export default function RealTimeChat() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Real-time Chat"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/expert-projects/real-time-chat.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Real-time Chat" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
