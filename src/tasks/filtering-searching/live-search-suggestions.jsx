import TaskInfo from '../../components/TaskInfo.jsx';

const description = "As the user types, show a dropdown of matching suggestions below the input.";

const requirements = [
  "Show up to N matching suggestions as the query changes",
  "Clicking a suggestion fills the input",
  "Hide the dropdown when there are no matches or input is empty"
];
import { useMemo, useState } from 'react';

export default function LiveSearchSuggestions() {
  
  const randomWords = [
    "Airplane",
    "Bridge",
    "Cloud",
    "Diamond",
    "Engine",
    "Forest",
    "Garden",
    "Hammer",
    "Island",
    "Jungle",
    "Kitchen",
    "Laptop",
    "Mountain",
    "Notebook",
    "Ocean",
    "Pencil",
    "Question",
    "Rocket",
    "School",
    "Train",
    "Universe",
    "Village",
    "Window",
    "Xylophone",
    "Yellow",
    "Zoo"
  ];
  const [search, setSearch] = useState("");
  const [dropMenu, setDropMenu] = useState([]);

  function changeSearch(event) {
    const val = event.target.value;
    setSearch(val);
    setDropMenu([...randomWords].filter((word)=>word.toLowerCase().includes(val.toLowerCase())).slice(0, 5))
  }

  return (
    <div className="task-page">
      <TaskInfo
        title="Live Search Suggestions"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/live-search-suggestions.jsx"]}
      />
      <div className="task-workspace">
        <label>
          Search Anything :- 
          <input placeholder='Search...' value={search} onChange={changeSearch}></input>
        </label>
        <div>
          {search.length > 0 ? dropMenu.map((word, index) => (
            <p onClick={()=>{setSearch(word)}} key={index}>{word}</p>
          )) :
          ""}
        </div>
      </div>
    </div>
  );
}
