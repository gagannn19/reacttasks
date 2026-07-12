import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Track a small library of books, including a 'read/unread' status.";

const requirements = [
  "Render each book's title, author, and read status",
  "Toggle a book between read and unread",
  "Add a new book to the collection"
];
import { useState } from 'react';

export default function BookLibrary() {
  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "Book Library"
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
        title="Book Library"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/book-library.jsx"]}
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
