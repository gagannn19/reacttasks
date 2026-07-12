import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Share cart state (items, add/remove, total) across components using Context.";

const requirements = [
  "CartContext exposes items plus addItem/removeItem",
  "A derived total is available to consumers",
  "A demo adds a couple of sample products and shows the running total"
];
import { CartProvider, useCartContext } from '../../context/CartContext.jsx';

function Demo() {
  // TODO: consume useCartContext() here and build the UI
  return <p>Your code here.</p>;
}

export default function ShoppingCartContext() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Shopping Cart Context"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/context-api/shopping-cart-context.jsx","src/context/CartContext.jsx"]}
      />
      <div className="task-workspace">
        <CartProvider>
          <Demo />
        </CartProvider>
      </div>
    </div>
  );
}
