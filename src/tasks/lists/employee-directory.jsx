import TaskInfo from '../../components/TaskInfo.jsx';
import { useState } from 'react';

const description = "Display a list of employees with name, department, and role.";

const requirements = [
  "Render each employee as a card/row",
  "Seed at least 5 sample employees",
  "Group or label employees by department (bonus)"
];

export default function EmployeeDirectory() {
  const [showEmployees, setShowEmployees] = useState(false);

  const employeeList = [
    { name: "Ayush Singh", department: "Tech", role: "Software Engineer" },
    { name: "Abhisekh", department: "Tech", role: "Security Guard" },
    { name: "Ishant", department: "Group-D", role: "Peon" },
    { name: "Gagan", department: "Authority", role: "CEO" },
    { name: "Nikhil", department: "Cleaning", role: "Cleaner" }
  ];

  // Get unique departments
  const departmentList = [...new Set(employeeList.map(employee => employee.department))];

  function buttonTextClicked() {
    setShowEmployees(!showEmployees);
  }

  return (
    <div className="task-page">
      <TaskInfo
        title="Employee Directory"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/employee-directory.jsx"]}
      />

      <div className="task-workspace">
        <div className="stack">
          <button onClick={buttonTextClicked}>
            {showEmployees ? "HIDE" : "SHOW"}
          </button>

          {showEmployees &&
            departmentList.map((department) => (
              <div key={department} style={{ marginBottom: "20px" }}>
                <h2>{department}</h2>

                {employeeList
                  .filter(employee => employee.department === department)
                  .map((employee) => (
                    <div
                      key={employee.name}
                      style={{
                        border: "1px solid gray",
                        padding: "10px",
                        margin: "10px 0",
                        borderRadius: "5px"
                      }}
                    >
                      <p><strong>Name:</strong> {employee.name}</p>
                      <p><strong>Department:</strong> {employee.department}</p>
                      <p><strong>Role:</strong> {employee.role}</p>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}