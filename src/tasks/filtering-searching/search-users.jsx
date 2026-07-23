import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Filter a list of users by name as the user types in a search box.";

const requirements = [
  "Seed an array of sample users",
  "Filter case-insensitively as the query changes",
  "Show a 'no results' message when nothing matches"
];
import { useMemo, useState } from 'react';

export default function SearchUsers() {

  const usersList = ["Gagan", "Priyanka", "Rani", "Prachi", "Ayush", "Shreyas"];
  const [search, setSearch] = useState("");
  const updatedList = usersList.filter((users,id)=>(
    users.toLowerCase().includes(search.toLowerCase())
  ))

  function changeSearch(event) {
    setSearch(event.target.value);
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Search Users"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/search-users.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <div>
            <input placeholder='Search...' name='search' value={search} onChange={changeSearch}></input>
          </div>
          <div>
            {updatedList.length > 0 ? updatedList.map((users, id) => (
              <p key={id}>{users}</p>
            )) : <p>No Matches Found</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
