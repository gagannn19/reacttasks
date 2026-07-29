import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Filter a product catalog by name using a search input.";

const requirements = [
  "Seed an array of sample products",
  "Filter by matching the product name against the query",
  "Highlight the matching substring (bonus)"
];
import { useMemo, useState } from 'react';

export default function SearchProducts() {

  const productsList = [
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500
    }
  ];
  const [search, setSearch] = useState("");
  const newProductList = productsList.filter((product,id)=>(
    product.name.toLowerCase().includes(search.toLowerCase())
  ))

  function changeSearch(event) {
    setSearch(event.target.value);
  }
 
  return (
    <div className="task-page">
      <TaskInfo
        title="Search Products"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/search-products.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <div>
            <input placeholder='Search...' name='search' value={search} onChange={changeSearch}></input>
          </div>

          <div>
            {newProductList.map((product,id)=> {
              return (
                <p>
                  {product.name} - ${product.price}
                </p>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
