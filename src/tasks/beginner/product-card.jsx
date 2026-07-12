import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Display a product's image, name, price, and an 'Add to Cart' button.";

const requirements = [
  "Show product image, name, and price",
  "Include an Add to Cart button (no need to wire up real cart logic)",
  "Accept the product data as props so it is reusable"
];

export default function ProductCard() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="Product Card"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/product-card.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          {/* TODO: build the JSX for "Product Card" here */}
          <p>Your component markup goes here.</p>
        </div>
      </div>
    </div>
  );
}
