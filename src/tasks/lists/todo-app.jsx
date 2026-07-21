import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A classic todo list: add, complete, and delete tasks.";

const requirements = [
  "Add a new todo via an input + button/Enter",
  "Toggle a todo's completed state",
  "Delete a todo from the list"
];
import { useState } from 'react';

export default function TodoApp() {

  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function plusClicked() {
    setList(prev => [...prev,task]);
    setTask("");
  }
  function minusClicked(id) {
    const newList = list.filter((task, index) => id !== index);
    setList(newList);
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Todo App"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/todo-app.jsx"]}
      />
      <div className="task-workspace">

        <label>
          Task
          <input name='task' value={task} onChange={(e) => setTask(e.target.value)}></input>
        </label>
        <button onClick={plusClicked}>+</button>


          <div>
            {/* {list} */}
            {list.map((task,id) => 
              <div key={id} style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"10px"}}>
                <input type='checkbox'></input>
                <p>{task}</p>
                <button onClick={()=>minusClicked(id)}>-</button>
              </div>
            )}
          </div>

      </div>
    </div>
  );
}