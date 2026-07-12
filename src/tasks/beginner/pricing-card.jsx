import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a pricing plan card showing a plan name, price, feature list, and a call-to-action button.";

const requirements = [
  "Accept plan name, price, and a list of features as props",
  "Render the features as a list",
  "Highlight a 'featured' plan differently via a prop"
];

export default function PricingCard() {
  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })
  return (
    <div className="task-page">
      <TaskInfo
        title="Pricing Card"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/beginner/pricing-card.jsx"]}
      />
      <div className="task-workspace">
        <div className="card">
          {/* TODO: build the JSX for "Pricing Card" here */}
          <p>Your component markup goes here.</p>
        </div>
      </div>
    </div>
  );
}
