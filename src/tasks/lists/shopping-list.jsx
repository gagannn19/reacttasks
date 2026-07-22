import TaskInfo from '../../components/TaskInfo.jsx';
const description = "Track shopping items with quantities, and mark items as picked up.";
const requirements = [
  "Add an item with a name and quantity",
  "Mark an item as picked up (visually distinct)",
  "Remove an item from the list"
];
import { useState } from 'react';
export default function ShoppingList() {

  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [itemList, setItemList] = useState([]);

  function changeItem(event) {
    setItem(event.target.value);
  }
  function changeQuantity(event) {
    setQuantity(event.target.value);
  }
  function addClicked(item, quantity) {
    setItemList(prev=>[...prev,`Item = ${item}, Quantity = ${quantity}`]);
    setItem("");
    setQuantity(0);
  }
  function removeClicked(id) {
    const newList = itemList.filter((items,index) => index !== id);
    setItemList(newList);
  }


  
  return (
    <div className="task-page">
      <TaskInfo
        title="Shopping List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/shopping-list.jsx"]}
      />
      <div className="task-workspace">



        <label>
          Enter Item Name :- 
          <input name='item' value={item} onChange={changeItem}></input>
        </label>

        <label>
          Enter Item Quantity :-
          <input name='quantity' value={quantity} onChange={changeQuantity}></input>
        </label>
        <button onClick={()=>addClicked(item,quantity)}>ADD</button>



        <div style={{border:"2px solid white", margin:"20px", padding:"20px"}}>
          <h2>CART</h2>
          
          {itemList.map((items,id) => {
            return (
              <div key={id} style={{display:"flex", flexDirection:"center", gap:"10px", alignItems:"center"}}>
                <input type='checkbox'></input>
                <p>{items}</p>
                <button onClick={()=>removeClicked(id)} style={{height:"25px", width:"100px", display:"flex", alignItems:"center", justifyContent:"center"}}>REMOVE</button>
              </div>
            )
          })}
        </div>





      </div>
    </div>
  );
}
