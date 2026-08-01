import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Render tabular data from an array of objects into an HTML table dynamically.";

const requirements = [
  "Generate table headers from the object keys",
  "Render one <tr> per data row using .map()",
  "Support removing a row (bonus)"
];
import { useState } from 'react';

export default function DynamicTable() {

  const [arr, setArr] = useState([{name : "gagan", course : "mca", section : "b"}, {name : "priyanka", course : "mba", section : "f"}, {name : "rani", course : "btech", section : "d"}]);
  const keys = arr[0] && Object.keys(arr[0]);

  function deleteRow(object){
    setArr(prev => prev.filter((obj)=> (obj !== object)))
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Dynamic Table"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/dynamic-table.jsx"]}
      />
      <div className="task-workspace">
        <h2>TABLE</h2>
        <table border={5}>
          <thead>
            <tr>
              {keys && keys.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
              {
                arr && arr.map((object, index) => {
                  const val = Object.values(object)
                  return <tr key={index}>
                    {val && val.map((value, index)=>(
                      <td key={index}>{value}</td>
                    ))}
                    <td>
                      <button onClick={()=>{deleteRow(object)}}>-</button>
                    </td>
                  </tr>
                  
                })
              }
          </tbody>
        </table>
      </div>
    </div>
  );
}
