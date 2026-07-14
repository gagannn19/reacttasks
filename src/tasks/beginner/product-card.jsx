import TaskInfo from '../../components/TaskInfo.jsx';
import shirt from './photos/shirt.png'

const description = "Display a product's image, name, price, and an 'Add to Cart' button.";

const requirements = [
  "Show product image, name, and price",
  "Include an Add to Cart button (no need to wire up real cart logic)",
  "Accept the product data as props so it is reusable"
];

function Cart({image, name, price}) {
  return (
    <>
      <hr></hr>
      <img src={image} alt={name} height={250} ></img>
      <p>{name}</p>
      <p>{price}</p>
    </>
  );
}

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
          <Cart image="https://www.beyours.in/cdn/shop/files/light-blue-classic-shirt.jpg?v=1763537464" name="Shirt" price={800} />
          <Cart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNprp049GYpiGN2iTRhe29HygyA8muECtw7F_sE90Bf8O-qnaKtDOn4IS2&s=10" name="Pant" price={1300} />
          <Cart image="https://m.media-amazon.com/images/I/61ThdxjHLtL._AC_UY1100_.jpg" name="Cap" price={300} />
        </div>
      </div>
    </div>
  );
}
