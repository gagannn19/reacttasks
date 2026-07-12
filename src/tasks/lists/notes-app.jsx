import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Create, edit, and delete short text notes.";

const requirements = [
  "Add a new note with a title/body",
  "Edit an existing note in place",
  "Delete a note"
];
import { useState } from 'react';

export default function NotesApp() {
  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "Notes App"
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
        title="Notes App"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/notes-app.jsx"]}
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
