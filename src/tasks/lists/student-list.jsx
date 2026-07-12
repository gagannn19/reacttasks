import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Display a list of students with name and grade, supporting add/remove.";

const requirements = [
  "Render students from an array in state",
  "Add a new student via a small form",
  "Remove a student from the list"
];
import { useState } from 'react';

export default function StudentList() {
  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "Student List"
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
        title="Student List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/student-list.jsx"]}
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
