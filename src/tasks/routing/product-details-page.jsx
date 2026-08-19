import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Simulate navigating from a product list to a detail view for the selected product.";

const requirements = [
  "A list of products, each clickable",
  "Selecting one shows its full detail view",
  "A back action returns to the list"
];
import { useState } from 'react';

export default function ProductDetailsPage() {

  const [page, setPage] = useState('home');

  let display;
  if(page === 'home') {
    display = <div>
      <h2>List Items :- </h2>
      <ul>
        <li onClick={()=>setPage('pant')}>Pant</li>
        <li onClick={()=>setPage('shirt')}>Shirt</li>
        <li onClick={()=>setPage('shoe')}>Shoe</li>
      </ul>
    </div>
  }
  else if(page === 'pant') {
    display = <div>
      <button onClick={()=>setPage('home')}>back</button>
      <p>Pant</p>
      <p>Price :- 1200</p>
    </div>
  }
  else if(page === 'shirt') {
    display = <div>
      <button onClick={()=>setPage('home')}>back</button>
      <p>Shirt</p>
      <p>Price :- 700</p>
    </div>
  }
  else if(page === 'shoe') {
    display = <div>
      <button onClick={()=>setPage('home')}>back</button>
      <p>Shoe</p>
      <p>Price :- 2100</p>
    </div>
  }

  
  return (
    <div className="task-page">
      <TaskInfo
        title="Product Details Page"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/product-details-page.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {display}
          
        </div>
      </div>
    </div>
  );
}
