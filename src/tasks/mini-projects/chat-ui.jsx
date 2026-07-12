import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A chat interface with a message list and an input to send new (local) messages.";

const requirements = [
  "Render a scrollable list of messages with sender distinction",
  "Send a new message via the input, appending it to the list",
  "Auto-scroll to the latest message",
  "Consider a MessageList + MessageBubble + MessageInput split"
];
import { useState } from 'react';

export default function ChatUI() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Chat UI"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/mini-projects/chat-ui.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Chat UI" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
