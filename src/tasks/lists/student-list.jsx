import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Display a list of students with name and grade, supporting add/remove.";

const requirements = [
  "Render students from an array in state",
  "Add a new student via a small form",
  "Remove a student from the list"
];
import { useState } from 'react';

export default function StudentList() {

  const [formData, setFormData] = useState({
    name : "",
    grade : ""
  })
  const [list, setList] = useState([]);

  function changeFormData(event) {
    const {name, value} = event.target;
    const newFormData = {
      ...formData,
      [name] : value
  }
    setFormData(newFormData);
  }
  function addClicked() {
    const newList = [
      ...list,
      formData
    ]
    setList(newList);
    setFormData({
      name:"",
      grade:""
    })
  }
  function removeClicked(id) {
    console.log(list)
    const newList = list.filter((item,index) => id !== index)
    console.log(newList);
    setList(newList);
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
          
          <div>
            <h2>ADD STUDENT FORM</h2>
            <label>
              Name :- 
              <input name='name' value={formData.name} onChange={changeFormData}></input>
            </label>
            <label>
              Grade :-
              <input name='grade' value={formData.grade} onChange={changeFormData}></input>
            </label>
            <button onClick={addClicked}>ADD</button>
          </div>

          {list.map((item,id) => (
            <div key={id}>
              <p>Name :- {item.name}</p>
              <p>Grade :- {item.grade}</p>
              <button onClick={()=>removeClicked(id)}>REMOVE</button>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}
