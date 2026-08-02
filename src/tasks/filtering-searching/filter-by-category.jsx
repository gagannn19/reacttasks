import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Filter a list of items using a category dropdown/button group.";

const requirements = [
  "Seed items that each have a category field",
  "Selecting a category filters the visible items",
  "Include an 'All' option that clears the filter"
];
import { useMemo, useState } from 'react';

export default function FilterByCategory() {

  const products = [
    { name: "Mobile", category: "Tech" },
    { name: "Charger", category: "Tech" },
    { name: "Jeans", category: "Clothing" },
    { name: "Kurta", category: "Clothing" },
    { name: "Apple", category: "Groceries" },
    { name: "Oats", category: "Groceries" },
    { name: "Protein Powder", category: "Groceries" }
  ];
  const [val, setVal] = useState(products.map(product => product.name));

  function changeItem(event) {
    if(event.target.value === "ALL") {
      setVal(products.map(product => product.name));
      return;
    }
    const categorized = products.filter((product, index)=>(
      product.category === event.target.value
    ))
    const categorizedProduct = categorized.map((product) => (
      product.name
    ))
    setVal(categorizedProduct);
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Filter by Category"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/filter-by-category.jsx"]}
      />
      <div className="task-workspace">
        <select onChange={changeItem}>
          <option value={"ALL"}>ALL</option>
          <option value={"Tech"}>Tech</option>
          <option value={"Clothing"}>Clothing</option>
          <option value={"Groceries"}>Groceries</option>
        </select>
        <div>
          {val.map((item,index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
