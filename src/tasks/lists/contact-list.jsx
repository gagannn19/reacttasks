import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A contacts list showing name, phone, and email, with the ability to remove a contact.";

const requirements = [
  "Render contacts from state",
  "Remove a contact by id",
  "Add a new contact via a small form"
];
import { useState } from 'react';

export default function ContactList() {
  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "Contact List"
  ]);

  function handleAdd(item) {
    // TODO: add item to items
  }

  function handleRemove(id) {
    // TODO: remove item by id from items
  }
  return (
    <div className="task-page">
      <TaskInfo
        title="Contact List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/contact-list.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: render items.map(...) as a list, plus add/remove controls */}
          <p>{items.length} items</p>
        </div>
      </div>
    </div>
  );
}
