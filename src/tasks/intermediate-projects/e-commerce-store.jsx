import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A small storefront: product grid, product detail, and a cart.";

const requirements = [
  "Product grid with add-to-cart",
  "Cart page/section showing items, quantities, and total",
  "Basic checkout summary (no real payment)",
  "Consider ProductGrid + ProductCard + Cart + CartItem components"
];
import { useState } from 'react';

export default function ECommerceStore() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="E-commerce Store"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/intermediate-projects/e-commerce-store.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "E-commerce Store" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
