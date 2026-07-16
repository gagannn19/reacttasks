import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build a pricing plan card showing a plan name, price, feature list, and a call-to-action button.";

const requirements = [
  "Accept plan name, price, and a list of features as props",
  "Render the features as a list",
  "Highlight a 'featured' plan differently via a prop"
];

function Plancard(props) {
  return (
    <>

      <span style={{display:"inline-block", marginRight:"10px", marginLeft:"30px", border: "1px solid white", padding:"5px", height:"150px"}}>
        <div style={{fontSize:"25px", padding:"10px"}}>{props.name[0]}</div>
        <div>-{props.price[0]}</div>
        <div>-{props.features[0][0]}</div>
        <div>-{props.features[0][1]}</div>
        <div>-{props.features[0][2]}</div>
      </span>

      <span style={{display:"inline-block", marginRight:"10px", border: "5px dotted white", padding:"5px", height:"150px"}}>
        <div style={{fontSize:"25px", padding:"10px"}}>{props.name[1]}</div>
        <div>-{props.price[1]}</div>
        <div>-{props.features[1][0]}</div>
        <div>-{props.features[1][1]}</div>
        <div>-{props.features[1][2]}</div>
      </span>

      <span style={{display:"inline-block", marginRight:"30px", border: "1px solid white", padding:"5px", height:"150px"}}>
        <div style={{fontSize:"25px", padding:"10px"}}>{props.name[2]}</div>
        <div>-{props.price[2]}</div>
        <div>-{props.features[2][0]}</div>
        <div>-{props.features[2][1]}</div>
        <div>-{props.features[2][2]}</div>
      </span>

    </>
  );
}

export default function PricingCard() {
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
          <Plancard name={["Solid Plan ", "Pro Plan ", "Enterprise Plan "]} price={["1500/month", "2000/month", "4000 for 3 months"]} features={[["Use Gym Only", "No Tredmill", "No Gym Coach"],["Gym with Tredmill", "Jumba Class", "Gym Coach"],["Gym wih Tredmill", "Gym Coach", "Jumba Class"]]}  />
        </div>
      </div>
    </div>
  );
}
