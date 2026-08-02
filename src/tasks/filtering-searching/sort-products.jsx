import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Sort a product list by price or name, ascending or descending.";

const requirements = [
  "A control to choose the sort field (price/name)",
  "A control to choose direction (asc/desc)",
  "Sorting must not mutate the original array"
];
import { useMemo, useState } from 'react';

export default function SortProducts() {

  const originalProductArray = [
    {name : "jeans", price : 800},
    {name : "shoe", price : 1300}, 
    {name : "laptop", price : 80000},
    {name : "creatine", price : 400},
    {name : "bottle", price : 120}
  ]
  const [copyArray, setCopyArray] = useState(originalProductArray);
  const [selectKey, setSelectKey] = useState("Name");
  const [selectOrder, setSelectOrder] = useState("Ascending");

  function handleChange() {
    console.log(selectKey);
    console.log(selectOrder);
    const copy = [...originalProductArray];
    if(selectKey === "Name" && selectOrder === "Ascending") {
      setCopyArray(copy.sort((a,b) => a.name.localeCompare(b.name)));
    }
    else if(selectKey === "Name" && selectOrder === "Descending") {
      setCopyArray(copy.sort((a,b)=>b.name.localeCompare(a.name)))
    }
    else if(selectKey === "Price" && selectOrder === "Ascending") {
      setCopyArray(copy.sort((a,b) => a.price - b.price))
    }
    else if(selectKey === "Price" && selectOrder === "Descending") {
      setCopyArray(copy.sort((a,b) => b.price - a.price))
    }
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Sort Products"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/sort-products.jsx"]}
      />
      <div className="task-workspace">
        <h3>CHOOSE THE SORTING...</h3>
        <div style={{border:"1px solid white"}}>
          <select onChange={(event)=>{setSelectKey(event.target.value)}} style={{margin:"20px"}}>
            <option value={"Name"}>Name</option>
            <option value={"Price"}>Price</option>
          </select>
          <select onChange={(event)=>{setSelectOrder(event.target.value)}} style={{margin:"20px"}}>
            <option value={"Ascending"}>Ascending</option>
            <option value={"Descending"}>Descending</option>
          </select>
          <button onClick={handleChange}>APPLY</button>
        </div>
        <div>
          {copyArray.map((element,index)=>(
            <div key={index}>
              <p style={{display:"inline"}}>Name :- {element.name}...</p>
              <p style={{display:"inline"}}>Price :- {element.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
