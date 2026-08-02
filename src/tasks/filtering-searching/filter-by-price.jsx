import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Filter products using a min/max price range.";

const requirements = [
  "Two numeric inputs (or a range slider) for min and max price",
  "Only show items within the selected range",
  "Handle an empty/invalid range gracefully"
];
import { useMemo, useState } from 'react';

export default function FilterByPrice() {

  let saveProducts = [
    {name : "jeans", price : 900},
    {name : "laptop", price : 80000}, 
    {name : "protein-powder", price : 5000},
    {name : "dumbell", price : 1500},
    {name : "chochlate", price : 50}
  ]

  let [products,setProducts] = useState(saveProducts)
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [emptyString, setEmptyString] = useState("");

  function applyClicked() {
    let updatedProduct = saveProducts.filter((product)=>(
      product.price >= Number(min) && product.price <= Number(max)
    ))
    console.log(updatedProduct);
    if(updatedProduct.length === 0) {
      setEmptyString("There is no product in this range.")
      setProducts([]);

    }
    else {
      setEmptyString("");
      setProducts(updatedProduct)
    }

  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Filter by Price"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/filter-by-price.jsx"]}
      />
      <div className="task-workspace">
        <label>
          Max :- 
          <input type='number' name='max' value={max} onChange={(event)=>setMax(event.target.value)}></input>
          ...
        </label>
        <label>
          Min :- 
          <input type='number' name='min' value={min} onChange={(event)=>{setMin(event.target.value)}}></input>
        </label>
        <button onClick={applyClicked}>APPLY</button>
        <div>
          {products.map((product, index)=>(
            <div key={index}>
              <p style={{display:"inline"}}>Name :- {product.name} ... </p>
              <p style={{display:"inline"}}>Price :- {product.price}</p>
            </div>
          ))}
        </div>
        <p>{emptyString}</p>
      </div>
    </div>
  );
}
